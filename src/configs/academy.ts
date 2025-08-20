import { IConfig } from "./Iconfig";

const defaultConfig: IConfig = {
    brand: { name: "Thales Academy", logo: "https://i.postimg.cc/kXTFLrwL/a0a6e49d-2597-43f4-a607-7feb4c6f6e2d.jpg", alt: "Лого" },
    navigation: [
        { label: "Начало", href: "#home" },
        { label: "Курсове", href: "#services" },
        { label: "Екип", href: "#about" },
        { label: "Контакти", href: "#contact" }
    ],
    hero: {
        title: "Овладей Математиката с Увереност",
        subtitle: "Курсове, състезателна подготовка и индивидуални уроци за 5.–12. клас",
        subtitleAnchorId: "services",
        ctas: [{ label: "Запиши се сега", href: "#contact", id: "cta_enroll", className: "btn primary" }],
        backgroundImage: "https://djgeqya1wekbj.cloudfront.net/product-images/600-600/Mathematics-IGCSE-1200x600.jpg.webp"
    },
    services: {
        heading: "Нашите Курсове",
        items: [
            { icon: "📚", title: "Индивидуални Уроци", description: "Персонализирани уроци, съобразени с вашето ниво и цели." },
            { icon: "👥", title: "Групови Занятия", description: "Малки групи с фокус върху разбиране, а не зазубряне." },
            { icon: "🏆", title: "Състезателна Подготовка", description: "Интензивна подготовка за математически състезания и олимпиади." },
            { icon: "🎓", title: "НВО, ДЗИ и Прием", description: "Подготовка за НВО, ДЗИ и прием в елитни гимназии.", anchorId: "about" }
        ]
    },
    about: {
        image: "https://via.placeholder.com/1200x800?text=Thales+Academy",
        imageAlt: "Снимка на учебна зала",
        heading: "За Академията",
        text: "В Thales Academy вярваме, че всеки ученик може да разгърне потенциала си по математика. Нашият екип от опитни преподаватели предлага ясни обяснения, систематични стратегии за решаване и подкрепа, насочена към резултати."
    },
    testimonials: {
        heading: "Отзиви на Ученици и Родители",
        items: [
            { image: "https://images.pexels.com/photos/8499551/pexels-photo-8499551.jpeg", alt: "Ученик 1", quote: "„Повиших оценките си само за един срок — задачите вече са ми интересни.“", author: "Никола П." },
            { image: "https://images.pexels.com/photos/8363787/pexels-photo-8363787.jpeg", alt: "Родител 1", quote: "„Методиката е ясна и мотивираща — детето ми ходи с желание.“", author: "Елена Г." },
            { image: "https://images.pexels.com/photos/8617648/pexels-photo-8617648.jpeg", alt: "Ученик 2", quote: "„Благодарение на Thales Academy влязох в мечтаната гимназия.“", author: "Росица Д." }
        ]
    },
    contact: { heading: "Контакти", address: "ул. „Евклид“ 42, София", phone: "+359 88 123 4567", email: "hello@thalesacademy.bg" },
    theme: {
        colors: {
            bg: "#F8FAFC",             
            text: "#1F2937",           
            muted: "#6B7280",           
            primary: "#1E3A8A",         
            "primary-contrast": "#FFFFFF",
            accent: "#F59E0B",          
            surface: "#FFFFFF",        
            "header-bg": "#0B3D91",    
            "footer-bg": "#0B3D91",
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
