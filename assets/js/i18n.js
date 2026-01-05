/**
 * Internationalization (i18n) System
 * Supports French (fr) and English (en)
 */

const translations = {
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      about: "À propos",
      resume: "CV",
      portfolio: "Portfolio",
      services: "Services",
      contact: "Contact"
    },
    // Hero Section
    hero: {
      title: "Je suis",
      subtitle: "Développeur Full-Stack"
    },
    // About Section
    about: {
      title: "À propos",
      description: "Passionné par le développement d'applications et titulaire d'un Master of Science de l'École Supérieure des Technologies Industrielles Avancées (ESTIA) de l'Université de Bordeaux, en partenariat avec IT University. J'ai une expertise approfondie dans la conception, le développement et le déploiement d'applications.",
      subtitle: "Développeur Web Full-Stack.",
      birthday: "Date de naissance",
      website: "Site web",
      phone: "Téléphone",
      city: "Localisation",
      age: "Âge",
      degree: "Diplôme",
      email: "Email",
      status: "Statut"
    },
    // Stats Section
    stats: {
      happyClients: "Clients satisfaits",
      happyClientsDesc: "clients & entreprises satisfaits",
      projects: "Projets",
      projectsDesc: "applications prêtes pour la production",
      yearsExperience: "Années d'expérience",
      yearsExperienceDesc: "années de développement professionnel",
      productionApps: "Applications en production",
      productionAppsDesc: "applications déployées & en utilisation"
    },
    // Skills Section
    skills: {
      title: "Compétences",
      description: "Mon expertise en développement full-stack, IA et gestion de bases de données.",
      technicalSkills: "Compétences techniques",
      softSkills: "Compétences comportementales",
      languages: "Langues"
    },
    // Resume Section
    resume: {
      title: "CV",
      description: "Développeur Full Stack Web & Mobile à distance avec plus de 4 ans d'expérience dans la livraison d'applications prêtes pour la production utilisées par de vrais utilisateurs. Expertise solide en Vue.js, Nuxt.js, Next.js, NestJS, Symfony, FlutterFlow, PostgreSQL, Prisma, Docker et Firebase. La plupart des projets livrés dans des environnements de production, avec une capacité prouvée à gérer le développement de bout en bout dans des équipes entièrement distantes.",
      summary: "Résumé",
      education: "Formation",
      professionalExperience: "Expérience professionnelle"
    },
    // Portfolio Section
    portfolio: {
      title: "Portfolio",
      description: "Voici quelques projets clés que j'ai développés:",
      all: "Tous",
      app: "Applications",
      product: "Applications Business & E-commerce",
      branding: "Solutions IA & Data-Driven",
      books: "Développement Web pour ONG & Secteur Public"
    },
    // Services Section
    services: {
      title: "Services",
      description: "Transformez vos idées en solutions numériques puissantes. Du concept au déploiement, je livre des applications de pointe qui stimulent la croissance des entreprises et améliorent les expériences utilisateur."
    },
    // Contact Section
    contact: {
      title: "Contact",
      address: "Adresse",
      callUs: "Appelez-nous",
      emailUs: "Envoyez-nous un email",
      yourName: "Votre nom",
      yourEmail: "Votre email",
      phone: "Téléphone",
      message: "Message",
      sendMessage: "Envoyer le message"
    },
    // Footer
    footer: {
      copyright: "© Copyright",
      allRightsReserved: "Tous droits réservés"
    },
    // Modal
    modal: {
      restrictedAccess: "Accès Restreint",
      message: "Pour des raisons de confidentialité, l'accès direct à cette application n'est pas autorisé.",
      submessage: "Si vous souhaitez accéder à cette application, veuillez me contacter directement.",
      contactMe: "Me Contacter"
    }
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      resume: "Resume",
      portfolio: "Portfolio",
      services: "Services",
      contact: "Contact"
    },
    // Hero Section
    hero: {
      title: "I'm",
      subtitle: "Full-Stack Developer"
    },
    // About Section
    about: {
      title: "About",
      description: "Passionate about application development and holder of a Master of Science from the École Supérieure des Technologies Industrielles Avancées (ESTIA) from the University of Bordeaux, in partnership with IT University. I have in-depth expertise in application design, development and deployment.",
      subtitle: "Full-Stack Web Developer.",
      birthday: "Birthday",
      website: "Website",
      phone: "Phone",
      city: "Location",
      age: "Age",
      degree: "Degree",
      email: "Email",
      status: "Status"
    },
    // Stats Section
    stats: {
      happyClients: "Happy Clients",
      happyClientsDesc: "satisfied clients & companies",
      projects: "Projects",
      projectsDesc: "production-ready applications",
      yearsExperience: "Years Experience",
      yearsExperienceDesc: "years of professional development",
      productionApps: "Production Apps",
      productionAppsDesc: "applications deployed & in use"
    },
    // Skills Section
    skills: {
      title: "Skills",
      description: "My expertise in full-stack development, AI, and database management.",
      technicalSkills: "Technical Skills",
      softSkills: "Soft Skills",
      languages: "Languages"
    },
    // Resume Section
    resume: {
      title: "Resume",
      description: "Remote Full Stack Web & Mobile Developer with 4+ years of experience delivering production-ready applications used by real users. Strong expertise in Vue.js, Nuxt.js, Next.js, NestJS, Symfony, FlutterFlow, PostgreSQL, Prisma, Docker, and Firebase. Most projects delivered to production environments, with proven ability to manage end-to-end development in fully remote teams.",
      summary: "Summary",
      education: "Education",
      professionalExperience: "Professional Experience"
    },
    // Portfolio Section
    portfolio: {
      title: "Portfolio",
      description: "Here are some key projects I have developed:",
      all: "All",
      app: "App",
      product: "Business & E-commerce Applications",
      branding: "AI & Data-Driven Solutions",
      books: "Web Development for NGOs & Public Sector"
    },
    // Services Section
    services: {
      title: "Services",
      description: "Transform your ideas into powerful digital solutions. From concept to deployment, I deliver cutting-edge applications that drive business growth and enhance user experiences."
    },
    // Contact Section
    contact: {
      title: "Contact",
      address: "Address",
      callUs: "Call Us",
      emailUs: "Email Us",
      yourName: "Your Name",
      yourEmail: "Your Email",
      phone: "Phone",
      message: "Message",
      sendMessage: "Send Message"
    },
    // Footer
    footer: {
      copyright: "© Copyright",
      allRightsReserved: "All Rights Reserved"
    },
    // Modal
    modal: {
      restrictedAccess: "Restricted Access",
      message: "For confidentiality reasons, direct access to this application is not authorized.",
      submessage: "If you wish to access this application, please contact me directly.",
      contactMe: "Contact Me"
    }
  }
};

// Current language (default: French)
let currentLang = localStorage.getItem('language') || 'fr';

// Function to set language
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  translatePage();
  updateLanguageSelector();
}

// Function to translate page
function translatePage() {
  const t = translations[currentLang];
  
  // Translate elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = t;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (value !== undefined) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = value;
      } else if (element.tagName === 'LABEL') {
        element.textContent = value;
      } else if (element.tagName === 'BUTTON') {
        element.textContent = value;
      } else if (element.hasAttribute('data-i18n-html')) {
        element.innerHTML = value;
      } else {
        // Preserve HTML structure (like icons) for navigation
        const icon = element.querySelector('i');
        if (icon && element.tagName === 'A') {
          element.innerHTML = icon.outerHTML + ' ' + value;
        } else {
          element.textContent = value;
        }
      }
    }
  });
  
  // Translate navigation links (preserve icons)
  const navLinks = document.querySelectorAll('#navmenu a');
  const navKeys = ['home', 'about', 'resume', 'portfolio', 'services', 'contact'];
  navLinks.forEach((link, index) => {
    if (t.nav[navKeys[index]]) {
      const icon = link.querySelector('i');
      const span = link.querySelector('span[data-i18n]');
      if (span) {
        span.textContent = t.nav[navKeys[index]];
      } else if (icon) {
        link.innerHTML = icon.outerHTML + ' ' + t.nav[navKeys[index]];
      }
    }
  });
  
  // Translate hero section
  const heroTitle = document.querySelector('#hero h2');
  if (heroTitle && t.hero.title) {
    const titleSpan = heroTitle.querySelector('span[data-i18n="hero.title"]');
    if (titleSpan) {
      titleSpan.textContent = t.hero.title;
    }
  }
  
  // Update typed.js items based on language
  const typedElement = document.querySelector('.typed');
  if (typedElement) {
    if (currentLang === 'fr') {
      typedElement.setAttribute('data-typed-items', 'Développeur Full-Stack, Développeur Web, Développeur Mobile, Freelance');
    } else {
      typedElement.setAttribute('data-typed-items', 'Full-Stack Developer, Web Developer, Mobile Developer, Freelancer');
    }
    // Reinitialize typed.js if it exists
    if (window.Typed && typedElement._typed) {
      typedElement._typed.destroy();
      setTimeout(() => {
        new Typed('.typed', {
          strings: typedElement.getAttribute('data-typed-items').split(', '),
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        });
      }, 100);
    }
  }
}

// Function to update language selector
function updateLanguageSelector() {
  const langButtons = document.querySelectorAll('.lang-switcher button');
  langButtons.forEach(btn => {
    if (btn.dataset.lang === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Set initial language
  document.documentElement.lang = currentLang;
  translatePage();
  updateLanguageSelector();
  
  // Language switcher event listeners
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.addEventListener('click', function() {
      setLanguage(this.dataset.lang);
    });
  });
  
  // Reinitialize typed.js after language change (with delay to ensure DOM is ready)
  setTimeout(() => {
    const typedElement = document.querySelector('.typed');
    if (typedElement && !typedElement._typed) {
      // Wait for main.js to initialize typed.js first
      const checkTyped = setInterval(() => {
        if (window.Typed) {
          clearInterval(checkTyped);
          // Typed.js will be initialized by main.js
        }
      }, 100);
    }
  }, 500);
});

// Export for use in other scripts
window.i18n = {
  setLanguage,
  translatePage,
  currentLang: () => currentLang,
  t: (key) => {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  }
};

