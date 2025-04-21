import './App.css'

function App() {

  return (
    <>
     <div className="homepage">
      {/* Sticky Header */}
      <header className="header sticky">
        <div className="nav-container">
        <img src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png" alt="Лого" className="logo" />
          <nav className="nav">
            <ul>
              <li><a href="#home">Начало</a></li>
              <li><a href="#services">Услуги</a></li>
              <li><a href="#team">Екип</a></li>
              <li><a href="#contact">Контакти</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-overlay">
          <h1>Възстановете Силата и Гъвкавостта Си</h1>
          <p>Персонализирани планове за лечение за облекчаване на болката и подобряване на подвижността</p>
          <div className="hero-ctas">
          <a href="https://test5v9u.setmore.com" id="Setmore_button_iframe" className="btn primary">Запази час</a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services" id="services">
        <h2>Нашите Услуги</h2>
        <div className="service-list">
          <div className="service-item">
            <div className="service-icon">🤲</div>
            <h3>Манипулативна Терапия</h3>
            <p>Практически техники за намаляване на болката и възстановяване на движението.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">🏋️</div>
            <h3>Предписание на Упражнения</h3>
            <p>Персонализирани планове за упражнения, които подпомагат вашето възстановяване.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">🏃</div>
            <h3>Спортна Рехабилитация</h3>
            <p>Върнете се в играта по-силни и по-сигурни.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">👶</div>
            <h3>Детска Физиотерапия</h3>
            <p>Специализирана грижа за развиващи се тела.</p>
          </div>
        </div>
      </section>

      {/* About Us Snapshot */}
      <section className="about-snapshot" id="about">
        <img src="https://static.partyking.org/fit-in/1300x0/products/original/papperstallrikar-batman-94968-1.jpg" alt="Интериор на клиника" className="about-img" />
        <div className="about-content">
          <h2>За Нас</h2>
          <p>В PhysioCare нашата мисия е да ви помогнем да постигнете оптимално здраве и подвижност. С над 15 години опит, нашият отдаден екип предоставя персонализирана грижа, съобразена с вашите нужди.</p>
        </div>
      </section>

      {/* Testimonials / Success Stories */}
      <section className="testimonials">
        <h2>Истории на Успеха</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <img src="https://static.partyking.org/fit-in/1300x0/products/original/peter-griffin-pappmask-1.jpg" alt="Пациент 1" />
            <blockquote>„Благодарение на PhysioCare болката в гърба ми изчезна и съм по-активен от всякога.“</blockquote>
            <cite>- Alex P.</cite>
          </div>
          <div className="testimonial-item">
            <img src="https://static.partyking.org/fit-in/1300x0/products/original/batman-masker-i-papp-1.jpg" alt="Пациент 2" />
            <blockquote>„Професионален и грижовен екип. Горещо препоръчвам!“</blockquote>
            <cite>- Jamie L.</cite>
          </div>
          <div className="testimonial-item">
            <img src="https://static.partyking.org/fit-in/1300x0/products/original/papperstallrikar-batman-94968-1.jpg" alt="Пациент 3" />
            <blockquote>„Възстановяването ми след спортна травма беше безпроблемно благодарение на тяхното експертно ръководство.“</blockquote>
            <cite>- Chris M.</cite>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
            <h4>Контакти</h4>
            <p>ул. „Здраве“ 123, Град Уелнес</p>
            <p>📞 +1 (234) 567-890</p>
            <p>✉️ info@physiocare.com</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App;