import { useEffect } from 'react'
import './App.css'
import getConfig from './configResolvers/whitelabelResolver'
import { applyTheme } from './configResolvers/themePicker'
import ContactForm from './contact-form/contactForm'

function App() {
  const config = getConfig(window.location)
  const { brand, navigation, hero, services, about, contact, theme, externalProviers } = config

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

          <div className="about-content">
            <h2>{about.heading}</h2>
            <p>{about.text}</p>
          </div>
        </section>
        {externalProviers.formId !== "" &&
          <section className='contact-form'>
            <ContactForm formId={externalProviers.formId}></ContactForm>
          </section>}

        <section className='prices-table'>
          <table id="prices">
            <thead>
              <tr>
                <th>Вид занятие</th>
                <th>Продължителност</th>
                <th>Цена за урок</th>
                <th>Месечна такса (4 занятия)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Присъствено – Индивидуално</td>
                <td>1 ч. 30 мин.</td>
                <td>70 лв / 35.78 €</td>
                <td>280 лв / 143.13 €</td>
              </tr>
              <tr>
                <td>Присъствено – Групово (2–6 уч.)</td>
                <td>1 ч. 30 мин.</td>
                <td>40 лв / 20.47 €</td>
                <td>160 лв / 81.81 €</td>
              </tr>
              <tr>
                <td>Онлайн – Индивидуално</td>
                <td>1 ч. 30 мин.</td>
                <td>50 лв / 25.59 €</td>
                <td>200 лв / 102.36 €</td>
              </tr>
            </tbody>
          </table>

        </section>

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
