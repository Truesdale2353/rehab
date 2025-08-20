export interface IConfig {
    brand: {
      name: string;
      logo: string;
      alt: string;
    };
    navigation: {
      label: string;
      href: string;
    }[];
    hero: {
      title: string;
      subtitle: string;
      subtitleAnchorId: string;
      ctas: {
        label: string;
        href: string;
        id: string;
        className: string;
      }[];
      backgroundImage: string | null;
    };
    services: {
      heading: string;
      items: {
        icon: string;
        title: string;
        description: string;
        anchorId?: string;
      }[];
    };
    about: {
      image: string;
      imageAlt: string;
      heading: string;
      text: string;
    };
    testimonials: {
      heading: string;
      items: {
        image: string;
        alt: string;
        quote: string;
        author: string;
      }[];
    };
    contact: {
      heading: string;
      address: string;
      phone: string;
      email: string;
    };
    theme: {
      colors: {
        bg: string;
        text: string;
        muted: string;
        primary: string;
        "primary-contrast": string;
        accent: string;
        surface: string;
        "header-bg": string;
        "footer-bg": string;
        "footer-text-color": string;
        link: string;
        "link-hover": string;
        border: string;
        "hero-overlay": string;
      };
    };
    externalProviers: {
      formId: string;
    };
  }
  