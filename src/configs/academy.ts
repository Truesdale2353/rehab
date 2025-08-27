import { IConfig } from "./Iconfig";

const defaultConfig: IConfig = {
    brand: { name: "Thales Academy", logo: "https://i.postimg.cc/KvC268gj/logo.jpg", alt: "Лого" },
    navigation: [
        { label: "Начало", href: "#home" },
        { label: "Курсове", href: "#services" },
        { label: "Екип", href: "#about" },
         { label: "Цени", href: "#prices" },
        { label: "Контакти", href: "#contact" }
    ],
    hero: {
        title: "Овладей Математиката с Увереност",
        subtitle: "Курсове и индивидуални уроци за 5.–12. клас",
        subtitleAnchorId: "services",
        ctas: [{ label: "Запиши се сега", href: "#contact", id: "cta_enroll", className: "btn primary" }],
        backgroundImage: "https://djgeqya1wekbj.cloudfront.net/product-images/600-600/Mathematics-IGCSE-1200x600.jpg.webp"
    },
    services: {
        heading: "Нашите Курсове",
        items: [
            { icon: "📚", title: "Индивидуални Уроци", description: "Персонализирани уроци, съобразени с вашето ниво и цели." },
            { icon: "👥", title: "Групови Занятия", description: "Малки групи с фокус върху разбиране." },
            { icon: "🎓", title: "НВО, ДЗИ и Прием", description: "Подготовка за НВО, ДЗИ и прием в елитни гимназии.", anchorId: "about" }
        ]
    },
    about: {
        image: "https://img.freepik.com/free-photo/happy-kids-elementary-school_53876-138141.jpg",
        imageAlt: "Снимка на учебна зала",
        heading: "За Нас",
        text: "Ние сме екип от млади и опитни преподаватели - студенти по  математика и информатика в Софийски университет “Св. Климент Охридски” с педагогическа подготовка. Обединява ни мотивацията да спомогнем за развитието на логическото и критичното мислене на бъдещото поколение."
    },
    testimonials: {
        heading: "Отзиви на Ученици и Родители",
        items: [
            { image: "https://images.pexels.com/photos/8499551/pexels-photo-8499551.jpeg", alt: "Ученик 1", quote: "„Повиших оценките си само за един срок — задачите вече са ми интересни.“", author: "Никола П." },
            { image: "https://images.pexels.com/photos/8363787/pexels-photo-8363787.jpeg", alt: "Родител 1", quote: "„Методиката е ясна и мотивираща — детето ми ходи с желание.“", author: "Елена Г." },
            { image: "https://images.pexels.com/photos/8617648/pexels-photo-8617648.jpeg", alt: "Ученик 2", quote: "„Благодарение на Thales Academy влязох в мечтаната гимназия.“", author: "Росица Д." }
        ]
    },
    contact: { heading: "Контакти", address: "гр. София, бул. Витоша 104", phone: "+359 88 585 5735", email: "contact@thalesacademy.bg" },
    theme: {
        colors: {
            bg: "#F8FAFC",             
            text: "#1F2937",           
            muted: "#6B7280",           
            primary: "#272361",         
            "primary-contrast": "#FFFFFF",
            accent: "#F59E0B",          
            surface: "#FFFFFF",        
            "header-bg": "#272361",    
            "footer-bg": "#272361",
            "footer-text-color": "#fff",
            link: "#FFFFFF",            
            "link-hover": "#0EA5E9",    
            border: "#E5E7EB",          
            "hero-overlay": "rgba(0,0,0,0.35)" 
        }
    },
    externalProviers: {
        formId: "meoznbjv",

    }
};

export default defaultConfig;
