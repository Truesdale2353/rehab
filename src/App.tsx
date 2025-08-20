import { useEffect } from 'react'
import './App.css'
import getConfig from './configResolvers/whitelabelResolver'
import { applyTheme } from './configResolvers/themePicker'
import ContactForm from './contact-form/contactForm'

function App() {
  const config = getConfig(window.location)
  const { brand, navigation, hero, services, about, testimonials, contact, theme, externalProviers } = config

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  return (
    <>
      <div id="home"></div>
      <div className="homepage">
        <header className="header sticky">
          <div className="nav-container">
            <img src={brand.logo} alt={brand.alt || 'Лого'} className="logo" />
            <nav className="nav">
              <ul>
                {navigation.map(item => (
                  <li key={item.href}><a href={item.href}>{item.label}</a></li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <section className="hero" style={hero.backgroundImage ? { backgroundImage: `url(${hero.backgroundImage})` } : undefined}>
          <div className="hero-overlay">
            <h1>{hero.title}</h1>
            <p id={hero.subtitleAnchorId}>{hero.subtitle}</p>
            <div className="hero-ctas">
              {hero.ctas.map(cta => (
                <a key={cta.href} href={cta.href} id={cta.id || undefined} className={cta.className || ''}>{cta.label}</a>
              ))}
            </div>
          </div>
        </section>

        <section className="services">
          <h2>{services.heading}</h2>
          <div className="service-list">
            {services.items.map((s, idx) => (
              <div className="service-item" key={idx}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p id={s.anchorId || undefined}>{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-snapshot">
          <img src={about.image} alt={about.imageAlt || ''} className="about-img" />
          <div className="about-content">
            <h2>{about.heading}</h2>
            <p>{about.text}</p>
          </div>
        </section>

        <section className="testimonials">
          <h2>{testimonials.heading}</h2>
          <div className="testimonial-list">
            {testimonials.items.map((t, idx) => (
              <div className="testimonial-item" key={idx}>
                <img src={t.image} alt={t.alt || `Пациент ${idx + 1}`} />
                <blockquote>{t.quote}</blockquote>
                <cite>- {t.author}</cite>
              </div>
            ))}
          </div>
        </section>
        {externalProviers.formId !== "" &&
          <section className='contact-form'>
            <ContactForm formId={externalProviers.formId}></ContactForm>
          </section>}

        <footer className="footer" id="contact">
          <div className="footer-content">
            <h4>{contact.heading}</h4>
            <p>{contact.address}</p>
            <p>📞 {contact.phone}</p>
            <p>✉️ {contact.email}</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
