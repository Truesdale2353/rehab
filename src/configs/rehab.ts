import { IConfig } from "./Iconfig";

const defaultConfig: IConfig = {
  brand: { name: "PhysioCare", logo: "https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png", alt: "Лого" },
  navigation: [
    { label: "Начало", href: "#home" },
    { label: "Услуги", href: "#services" },
    { label: "Екип", href: "#about" },
    { label: "Контакти", href: "#contact" }
  ],
  hero: {
    title: "Възстановете Силата и Гъвкавостта Си",
    subtitle: "Персонализирани планове за лечение за облекчаване на болката и подобряване на подвижността",
    subtitleAnchorId: "services",
    ctas: [{ label: "Запази своя час сега", href: "https://test5v9u.setmore.com", id: "Setmore_button_iframe", className: "btn primary" }],
    backgroundImage: null
  },
  services: {
    heading: "Нашите Услуги",
    items: [
      { icon: "🤲", title: "Манипулативна Терапия", description: "Практически техники за намаляване на болката и възстановяване на движението." },
      { icon: "🏋️", title: "Предписание на Упражнения", description: "Персонализирани планове за упражнения, които подпомагат вашето възстановяване." },
      { icon: "🏃", title: "Спортна Рехабилитация", description: "Върнете се в играта по-силни и по-сигурни." },
      { icon: "👶", title: "Детска Физиотерапия", description: "Специализирана грижа за развиващи се тела.", anchorId: "about" }
    ]
  },
  about: {
    image: "https://agemed.org/wp-content/uploads/Brecka-Gary-Human-Biologist_AMMG-Faculty.jpg",
    imageAlt: "Интериор на клиника",
    heading: "За Нас",
    text: "В PhysioCare нашата мисия е да ви помогнем да постигнете оптимално здраве и подвижност. С над 15 години опит, нашият отдаден екип предоставя персонализирана грижа, съобразена с вашите нужди."
  },
  testimonials: {
    heading: "Истории на Успеха",
    items: [
      { image: "https://images.pexels.com/photos/5638645/pexels-photo-5638645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Пациент 1", quote: "„Благодарение на PhysioCare болката в гърба ми изчезна и съм по-активена от всякога.“", author: "Радостина С." },
      { image: "https://images.pexels.com/photos/14438790/pexels-photo-14438790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Пациент 2", quote: "„Професионален и грижовен екип. Горещо препоръчвам!“", author: "Илияна Р." },
      { image: "https://images.pexels.com/photos/6567336/pexels-photo-6567336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Пациент 3", quote: "„Възстановяването ми след спортна травма беше безпроблемно благодарение на тяхното експертно ръководство.“", author: "Ванеса M." }
    ]
  },
  contact: { heading: "Контакти", address: "ул. „Здраве“ 123, Град Уелнес", phone: "+1 (234) 567-890", email: "info@physiocare.com" },
  theme: {
    colors: {
      bg: "#f4e9e3",
      text: "#333333",
      muted: "#333333",
      primary: "#773344",
      "primary-contrast": "#ffffff",
      accent: "#f1dcd3",
      surface: "#f2e0d7",
      "header-bg": "#ceb5a7",
      "footer-bg": "#ceb5a7",
      "footer-text-color": "#332",
      link: "#333",
      "link-hover": "#f1dcd3",
      border: "#773344",
      "hero-overlay": "rgba(0,0,0,0.4)"
    }
  },
  externalProviers: {
    formId: ""
  }
};
export default defaultConfig;
