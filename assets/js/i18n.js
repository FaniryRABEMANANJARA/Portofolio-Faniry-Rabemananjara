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
      howIWork: "Comment je travaille",
      portfolio: "Portfolio",
      services: "Services",
      contact: "Contact"
    },
    // Hero Section
    hero: {
      title: "Je suis",
      subtitle: "Développeur Full-Stack",
      cta: "Démarrer votre projet",
      viewWork: "Voir mes réalisations"
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
      summaryDescription: "Développeur Full Stack Web & Mobile à distance avec plus de 4 ans d'expérience dans la livraison d'applications prêtes pour la production utilisées par de vrais utilisateurs. Expertise solide en Vue.js, Nuxt.js, Next.js, NestJS, Symfony, FlutterFlow, PostgreSQL, Prisma, Docker et Firebase. La plupart des projets livrés dans des environnements de production, avec une capacité prouvée à gérer le développement de bout en bout dans des équipes entièrement distantes.",
      education: "Formation",
      master2Title: "Master II – Intelligence Artificielle & Gestion des Big Data",
      master2Period: "2022 - 2023",
      master2School: "ESTIA Institute of Technology",
      master2Description: "Spécialisé en Intelligence Artificielle et Gestion des Big Data, acquérant une expertise en machine learning, analyse de données et cloud computing. Travail sur des applications basées sur l'IA et le traitement de données à grande échelle. Application de Python et SQL pour la manipulation de données et l'automatisation. Réalisation d'un projet de recherche sur les systèmes de surveillance environnementale basés sur l'IA.",
      master1Title: "Master I – Développement Mobile & Web",
      master1Period: "2021 - 2022",
      master1School: "IT University, Antananarivo, MDG",
      master1Description: "Études avancées en développement d'applications mobiles et web, axées sur les frameworks modernes, le design responsive et les solutions cross-platform.",
      bachelorTitle: "Licence – Développement d'Applications Web",
      bachelorPeriod: "2017 - 2020",
      bachelorSchool: "IT University, Antananarivo, MDG",
      bachelorDescription: "Apprentissage des fondamentaux de l'ingénierie logicielle, incluant la POO et les design patterns. Développement d'applications web dynamiques et responsives en JavaScript, PHP et MySQL. Acquisition de connaissances en développement d'API, services cloud et cybersécurité. Réalisation de plusieurs projets, incluant un site e-commerce et un système ERP.",
      professionalExperience: "Expérience professionnelle",
      ownershipBadge: "Propriété complète de A à Z",
      ownership: "Propriété complète",
      ownershipAtoZ: "Propriété complète de A à Z",
      businessImpact: "Impact Business",
      job1Title: "Consultant Ingénieur IT (Freelance)",
      job1Period: "Avr 2025 – Présent",
      job1Company: "L3M Holding | Remote",
      job1Project1: "OIKOS IMPACT – Plateforme de Gestion d'Impact (Production) : Propriété complète de A à Z - Dirigé le développement de bout en bout de la conception de l'architecture au déploiement en production. Impact Business : Plateforme activement utilisée par plusieurs organisations pour le suivi d'impact RSE, permettant la prise de décision basée sur les données et la conformité réglementaire. Frontend : Vue.js (Vue 3), Backend : NestJS, Base de données : PostgreSQL avec Prisma ORM",
      job1Project2: "NEPH – Plateforme Web Administrative (En cours) : Propriété complète - Dirige la migration complète d'un système legacy vers une architecture moderne. Impact Business : Amélioration de la stabilité du système et réduction des coûts de maintenance de 40%, permettant une évolutivité à long terme. Frontend : Vue.js, Backend : Symfony",
      job1Project3: "MyDomiil – Plateforme de Services Numériques (Production) : Propriété de bout en bout - Conçu, développé et déployé une plateforme full-stack depuis zéro. Impact Business : Plateforme servant les entreprises en Île-de-France avec des services de domiciliation, générant des revenus récurrents. Frontend : Vue.js, Backend : NestJS, Base de données : PostgreSQL avec Prisma ORM, Services dockerisés",
      job1Project4: "Plateforme d'Intermédiation Crypto P2P (Production) : Propriété complète - Construit et déployé une plateforme crypto peer-to-peer gérant des transactions réelles. Impact Business : Plateforme facilitant les transactions crypto sécurisées avec une base d'utilisateurs active, générant des revenus basés sur les transactions. Frontend : Vue.js, Nuxt.js, Base de données : PostgreSQL avec Prisma ORM, Déploiement basé sur Docker",
      job1Project5: "Plateforme de Gestion des Permis (Production) : Propriété complète de A à Z - Conçu et construit un système complet de gestion des permis du concept à la production. Impact Business : Rationalisation des processus administratifs, réduction du temps de traitement de 60% pour les demandes de permis. Full stack : Vue.js, NestJS, PostgreSQL, Prisma ORM",
      job2Title: "Développeur Full Stack Web & Mobile (Freelance)",
      job2Period: "Oct 2023 – Mar 2025",
      job2Company: "Synergie Mad | Full Remote",
      job2Project1: "Remus – Plateforme Web d'Évangélisation (Production) : Propriété de bout en bout - Développé et déployé une plateforme gérant le cycle de vie complet. Impact Business : Plateforme activement utilisée par des milliers d'utilisateurs pour les activités d'évangélisation, améliorant l'engagement communautaire et la coordination. Frontend : Next.js, Base de données : PostgreSQL",
      job2Project2: "Prytane – Plateforme Mobile Communautaire pour Églises (Production) : Propriété complète - Construit une application mobile de la conception au déploiement sur l'App Store. Impact Business : Application mobile en production servant les communautés d'églises, améliorant la communication et la gestion des événements. Mobile : FlutterFlow, Backend & authentification : Firebase",
      job2Project3: "Tiresias – Plateforme d'Apprentissage & Prédiction Crypto (Production) : Propriété complète de A à Z - Créé une plateforme éducative avec des fonctionnalités de prédiction. Impact Business : Plateforme déployée en production permettant l'apprentissage crypto et les simulations de prédiction de marché, soutenant l'apprentissage et l'engagement des utilisateurs. Frontend : Vue.js, Backend : NestJS",
      job3Title: "Stage Master – Système de Détection d'Incendie basé sur l'IA",
      job3Period: "Mai 2023 – Août 2023",
      job3Company: "Ministère de l'Environnement | Madagascar",
      job3Description: "Propriété complète - Développé un système basé sur l'IA de la recherche au déploiement. Impact Business : Système déployé pour la détection d'incendie et l'alerte précoce, contribuant à la protection de l'environnement et à la réduction des dommages liés aux incendies. Frontend : Vue.js, Backend : Python, Base de données : MySQL",
      job4Title: "Consultant Développeur Full Stack",
      job4Period: "Nov 2021 – Jan 2023",
      job4Company: "ONG CID | Madagascar",
      job4Description: "Propriété de bout en bout - Reconstruit et déployé le site web de l'ONG. Impact Business : Site web déployé en production améliorant la visibilité de l'ONG et la présentation des projets, augmentant l'engagement public et les dons. WordPress"
    },
    // Portfolio Section
    portfolio: {
      title: "Portfolio",
      description: "Voici quelques projets clés que j'ai développés:",
      all: "Tous",
      app: "Applications",
      product: "Applications Business & E-commerce",
      branding: "Solutions IA & Data-Driven",
      books: "Développement Web pour ONG & Secteur Public",
      discover: "Découvrir",
      // Projects
      ngosCidTitle: "NGOs CID",
      ngosCidDesc: "Cette application servira de vitrine dynamique pour l'ONG, permettant une meilleure interaction avec le public et le suivi des projets et initiatives.",
      healthInMotionTitle: "Health in Motion",
      healthInMotionDesc: "Cette application consiste à gérer les temps de concentration et à faire du yoga pour gérer la santé.",
      pizzaHouseFreeTitle: "Pizza House Free",
      pizzaHouseFreeDesc: "Cette application consiste à gérer un site vitrine pour un restaurant spécialisé dans la pizza.",
      assuranceDecennaleTitle: "Assurance decennale",
      assuranceDecennaleDesc: "Cette application consiste à couvrir votre entreprise avec une assurance professionnelle adaptée aux professions d'Audit, de Conseil et d'Expertise.",
      nephTitle: "NEPH - Démarche Permis Rapide",
      nephDesc: "Application web pour aider les utilisateurs à obtenir leur code NEPH, un identifiant officiel pour les examens du permis de conduire en France.",
      cryptoP2PClubTitle: "Crypto P2P Club",
      cryptoP2PClubDesc: "Plateforme éducative pour apprendre, comprendre et pratiquer le Web3 et la crypto de manière éthique. Votre chemin personnalisé vers la liberté financière grâce à l'éducation crypto éthique.",
      myDomii6LTitle: "MyDomii6L - Business Domiciliation",
      myDomii6LDesc: "Plateforme web de services de domiciliation d'entreprise en Île-de-France, offrant des adresses stratégiques, la gestion du courrier et des services administratifs.",
      csrImpactCityTitle: "CSR and Impact City",
      csrImpactCityDesc: "CSR and Impact City est une plateforme de gestion et de suivi de la performance d'une entreprise.",
      prytaneTitle: "Prytane",
      prytaneDesc: "Prytane, une application mobile pour la gestion de communauté paroissiale.",
      tiresiasTitle: "Tiresias",
      tiresiasDesc: "Tiresias, une application mobile pour le trading.",
      wildfireAlertTitle: "Wildfire Alert System",
      wildfireAlertDesc: "Un système de surveillance environnementale basé sur l'IA pour la prévention des incendies de forêt.",
      openMystTitle: "OpenMyst",
      openMystDesc: "Open Myst est une plateforme de visualisation 3D qui rassemble les données les plus fiables disponibles sur la vie de Jésus.",
      fidMaxTitle: "FidMax",
      fidMaxDesc: "Une application de programme de fidélité pour les entreprises et les clients.",
      dashTechTitle: "DashTech",
      dashTechDesc: "Une application de tableau de bord d'entreprise pour le suivi des performances en temps réel."
    },
    // How I Work Section
    howIWork: {
      title: "Comment je travaille",
      description: "Ma méthodologie éprouvée pour livrer des applications prêtes pour la production avec un impact business mesurable",
      step1Title: "Découverte & Stratégie",
      step1Desc: "Plongée approfondie dans les besoins métier, les exigences utilisateur et les contraintes techniques. Définition des métriques de succès et KPI en amont.",
      step2Title: "Architecture & Conception",
      step2Desc: "Conception d'une architecture évolutive, définition de la stack technique, création des modèles de données. Focus sur la maintenabilité et la croissance future.",
      step3Title: "Développement & Tests",
      step3Desc: "Développement avec des principes de code propre, implémentation de tests automatisés, assurance de la qualité du code et des meilleures pratiques de sécurité.",
      step4Title: "Déploiement & Optimisation",
      step4Desc: "Déploiement en production sans interruption, surveillance des performances, optimisation pour l'échelle. Support continu.",
      principlesTitle: "Principes fondamentaux",
      principle1: "Mentalité Production-First",
      principle2: "Focus Impact Business",
      principle3: "Livraison Itérative",
      principle4: "Communication Claire",
      principle5: "Meilleures Pratiques",
      cta: "Construisons quelque chose de grand ensemble",
      seniorSignalTitle: "Je ne me contente pas d'exécuter des spécifications",
      seniorSignalDesc: "J'aide à clarifier les exigences, je remets en question les hypothèses et je prends des décisions techniques pragmatiques. Je travaille directement avec les fondateurs, les équipes produit et les clients non-techniques pour livrer des solutions qui génèrent de vrais résultats business."
    },
    // Services Section
    services: {
      title: "Services",
      description: "Transformez vos idées en solutions numériques puissantes. Du concept au déploiement, je livre des applications de pointe qui stimulent la croissance des entreprises et améliorent les expériences utilisateur.",
      cta: "Prêt à démarrer votre projet ?",
      service1Title: "Développement Web & Mobile Sur Mesure",
      service1Desc: "Construisez des applications évolutives et performantes adaptées à vos besoins métier. Des applications web responsives aux solutions mobiles natives utilisant Vue3, NestJS, Flutter et des frameworks modernes.",
      service2Title: "Migration & Modernisation d'Applications",
      service2Desc: "Migrez en toute transparence les systèmes legacy vers des architectures modernes. Modernisez votre stack technologique, améliorez les performances et réduisez les coûts de maintenance sans interruption de service.",
      service3Title: "Solutions IA & Pilotées par les Données",
      service3Desc: "Exploitez l'intelligence artificielle et l'analyse de données volumineuses pour automatiser les processus, obtenir des insights et prendre des décisions basées sur les données qui renforcent votre avantage concurrentiel.",
      service4Title: "Plateformes E-commerce & Business",
      service4Desc: "Créez des boutiques en ligne et des plateformes business puissantes avec des passerelles de paiement sécurisées, une gestion d'inventaire et des expériences utilisateur fluides qui transforment les visiteurs en clients.",
      service5Title: "Conception & Optimisation de Bases de Données",
      service5Desc: "Concevez des bases de données PostgreSQL et MySQL robustes avec synchronisation en temps réel. Assurez l'intégrité des données, l'évolutivité et des performances optimales pour votre entreprise en croissance.",
      service6Title: "Sécurité & Optimisation des Performances",
      service6Desc: "Protégez vos applications avec des mesures de sécurité de niveau entreprise et optimisez les performances pour des temps de chargement ultra-rapides qui maintiennent l'engagement des utilisateurs.",
      service7Title: "Conseil & Support Technique",
      service7Desc: "Obtenez des conseils d'experts sur les choix technologiques, la conception d'architecture et les meilleures pratiques. Support continu pour garantir le succès de vos projets et leur évolution selon vos besoins.",
      service8Title: "Déploiement Cloud & DevOps",
      service8Desc: "Déployez vos applications dans le cloud avec Docker, des pipelines CI/CD et des workflows automatisés. Assurez la fiabilité, l'évolutivité et des mises à jour transparentes.",
      service9Title: "Développement API Full-Stack",
      service9Desc: "Construisez des API RESTful et GraphQL avec des services backend NestJS. Créez des intégrations fluides entre frontend et backend pour un flux de données efficace et harmonieux."
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
      sendMessage: "Envoyer le message",
      loading: "Chargement...",
      successMessage: "Votre message a été envoyé. Merci !",
      errorMessage: "Une erreur s'est produite lors de l'envoi du message."
    },
    // Footer
    footer: {
      copyright: "© Copyright",
      allRightsReserved: "Tous droits réservés",
      available: "Disponible pour du travail freelance",
      ready: "Prêt à vous aider à construire des applications prêtes pour la production"
    },
    // Freelance CTA
    freelanceCta: {
      title: "Disponible pour du travail freelance & contractuel",
      description: "Prêt à vous aider à construire des applications prêtes pour la production qui génèrent de vrais résultats business. Discutons de votre projet.",
      contactMe: "Me Contacter",
      linkedin: "LinkedIn",
      email: "Email"
    },
    // Modal
    modal: {
      restrictedAccess: "Accès Restreint",
      message: "Pour des raisons de confidentialité, l'accès direct à cette application n'est pas autorisé.",
      submessage: "Si vous souhaitez accéder à cette application, veuillez me contacter directement.",
      contactMe: "Me Contacter"
    },
    // Diploma Modal
    diploma: {
      title: "Master of Science - Intelligence Artificielle & Big Data"
    },
    // Theme Toggle
    theme: {
      light: "Clair",
      dark: "Sombre"
    }
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      resume: "Resume",
      howIWork: "How I Work",
      portfolio: "Portfolio",
      services: "Services",
      contact: "Contact"
    },
    // Hero Section
    hero: {
      title: "I'm",
      subtitle: "Full-Stack Developer",
      cta: "Start Your Project",
      viewWork: "View My Work"
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
      summaryDescription: "Remote Full Stack Web & Mobile Developer with 4+ years of experience delivering production-ready applications used by real users. Strong expertise in Vue.js, Nuxt.js, Next.js, NestJS, Symfony, FlutterFlow, PostgreSQL, Prisma, Docker, and Firebase. Most projects delivered to production environments, with proven ability to manage end-to-end development in fully remote teams.",
      education: "Education",
      master2Title: "Master II – Artificial Intelligence & Big Data Management",
      master2Period: "2022 - 2023",
      master2School: "ESTIA Institute of Technology",
      master2Description: "Specialized in Artificial Intelligence and Big Data Management, gaining expertise in machine learning, data analysis, and cloud computing. Worked on AI-driven applications and large-scale data processing. Applied Python and SQL for data manipulation and automation. Conducted a research project on AI-based environmental monitoring systems.",
      master1Title: "Master I – Mobile & Web Development",
      master1Period: "2021 - 2022",
      master1School: "IT University, Antananarivo, MDG",
      master1Description: "Advanced studies in mobile and web application development, focusing on modern frameworks, responsive design, and cross-platform solutions.",
      bachelorTitle: "Bachelor – Web Application Development",
      bachelorPeriod: "2017 - 2020",
      bachelorSchool: "IT University, Antananarivo, MDG",
      bachelorDescription: "Learned the fundamentals of software engineering, including OOP and design patterns. Developed dynamic and responsive web applications using JavaScript, PHP, and MySQL. Gained knowledge in API development, cloud services, and cybersecurity. Completed several projects, including an e-commerce website and an ERP system.",
      professionalExperience: "Professional Experience",
      ownershipBadge: "Full Ownership A to Z",
      ownership: "Full Ownership",
      ownershipAtoZ: "Full Ownership A to Z",
      businessImpact: "Business Impact",
      job1Title: "IT Engineer Consultant (Freelance)",
      job1Period: "Apr 2025 – Present",
      job1Company: "L3M Holding | Remote",
      job1Project1: "OIKOS IMPACT – Impact Management Platform (Production): Ownership A to Z - Led end-to-end development from architecture design to production deployment. Business Impact: Platform actively used by multiple organizations for CSR impact tracking, enabling data-driven decision making and compliance reporting. Frontend: Vue.js (Vue 3), Backend: NestJS, Database: PostgreSQL with Prisma ORM",
      job1Project2: "NEPH – Administrative Web Platform (In Progress): Full Ownership - Leading complete migration of legacy system to modern architecture. Business Impact: Improving system stability and reducing maintenance costs by 40%, enabling long-term scalability. Frontend: Vue.js, Backend: Symfony",
      job1Project3: "MyDomiil – Digital Services Platform (Production): End-to-End Ownership - Designed, developed and deployed full-stack platform from scratch. Business Impact: Platform serving businesses in Île-de-France with domiciliation services, generating recurring revenue. Frontend: Vue.js, Backend: NestJS, Database: PostgreSQL with Prisma ORM, Dockerized services",
      job1Project4: "Crypto P2P Intermediation Platform (Production): Complete Ownership - Built and deployed peer-to-peer crypto platform handling real transactions. Business Impact: Platform facilitating secure crypto transactions with active user base, generating transaction-based revenue. Frontend: Vue.js, Nuxt.js, Database: PostgreSQL with Prisma ORM, Docker-based deployment",
      job1Project5: "Permit Management Platform (Production): Full Ownership A to Z - Designed and built complete permit management system from concept to production. Business Impact: Streamlining administrative processes, reducing processing time by 60% for permit applications. Full stack: Vue.js, NestJS, PostgreSQL, Prisma ORM",
      job2Title: "Full Stack Web & Mobile Developer (Freelance)",
      job2Period: "Oct 2023 – Mar 2025",
      job2Company: "Synergie Mad | Full Remote",
      job2Project1: "Remus – Evangelization Web Platform (Production): End-to-End Ownership - Developed and deployed platform managing full lifecycle. Business Impact: Platform actively used by thousands of users for evangelization activities, improving community engagement and coordination. Frontend: Next.js, Database: PostgreSQL",
      job2Project2: "Prytane – Community Mobile Platform for Churches (Production): Complete Ownership - Built mobile app from design to App Store deployment. Business Impact: Mobile application live in production serving church communities, enhancing communication and event management. Mobile: FlutterFlow, Backend & authentication: Firebase",
      job2Project3: "Tiresias – Crypto Learning & Prediction Platform (Production): Full Ownership A to Z - Created educational platform with prediction features. Business Impact: Platform deployed to production enabling crypto education and market prediction simulations, supporting user learning and engagement. Frontend: Vue.js, Backend: NestJS",
      job3Title: "Master's Internship – AI-Based Fire Detection System",
      job3Period: "May 2023 – Aug 2023",
      job3Company: "Ministry of Environment | Madagascar",
      job3Description: "Complete Ownership - Developed AI-based system from research to deployment. Business Impact: System deployed for fire detection and early warning, contributing to environmental protection and reducing fire-related damages. Frontend: Vue.js, Backend: Python, Database: MySQL",
      job4Title: "Full Stack Developer Consultant",
      job4Period: "Nov 2021 – Jan 2023",
      job4Company: "ONG CID | Madagascar",
      job4Description: "End-to-End Ownership - Rebuilt and deployed NGO website. Business Impact: Website deployed to production improving NGO visibility and project showcase, increasing public engagement and donations. WordPress"
    },
    // Portfolio Section
    portfolio: {
      title: "Portfolio",
      description: "Here are some key projects I have developed:",
      all: "All",
      app: "App",
      product: "Business & E-commerce Applications",
      branding: "AI & Data-Driven Solutions",
      books: "Web Development for NGOs & Public Sector",
      discover: "Discover",
      // Projects
      ngosCidTitle: "NGOs CID",
      ngosCidDesc: "This application will serve as a dynamic showcase for the NGO, enabling better interaction with the public and tracking of projects and initiatives.",
      healthInMotionTitle: "Health in Motion",
      healthInMotionDesc: "This application consists of managing concentration times and doing yoga to manage health.",
      pizzaHouseFreeTitle: "Pizza House Free",
      pizzaHouseFreeDesc: "This application consists of managing a showcase site for a restaurant specializing in pizza.",
      assuranceDecennaleTitle: "Assurance decennale",
      assuranceDecennaleDesc: "This application consists in covering your company with professional insurance adapted to the Audit, Consulting and Expertise professions.",
      nephTitle: "NEPH - Démarche Permis Rapide",
      nephDesc: "Web application to help users obtain their NEPH code, an official identifier for driving license exams in France.",
      cryptoP2PClubTitle: "Crypto P2P Club",
      cryptoP2PClubDesc: "Educational platform to learn, understand and practice Web3 and crypto ethically. Your personalized path to financial freedom through ethical crypto education.",
      myDomii6LTitle: "MyDomii6L - Business Domiciliation",
      myDomii6LDesc: "Web platform for business domiciliation services in Île-de-France, offering strategic addresses, mail management, and administrative services.",
      csrImpactCityTitle: "CSR and Impact City",
      csrImpactCityDesc: "CSR and Impact City is a platform for managing and monitoring the performance of a company.",
      prytaneTitle: "Prytane",
      prytaneDesc: "Prytane, a mobile application for parish community management.",
      tiresiasTitle: "Tiresias",
      tiresiasDesc: "Tiresias, a mobile application for trading.",
      wildfireAlertTitle: "Wildfire Alert System",
      wildfireAlertDesc: "An AI-powered environmental monitoring system for wildfire prevention.",
      openMystTitle: "OpenMyst",
      openMystDesc: "Open Myst is a 3D visualization platform that brings together the most reliable data available on the life of Jesus.",
      fidMaxTitle: "FidMax",
      fidMaxDesc: "A loyalty program application for businesses and customers.",
      dashTechTitle: "DashTech",
      dashTechDesc: "A business dashboard application for real-time performance tracking."
    },
    // How I Work Section
    howIWork: {
      title: "How I Work",
      description: "My proven methodology for delivering production-ready applications with measurable business impact",
      step1Title: "Discovery & Strategy",
      step1Desc: "Deep dive into business needs, user requirements, and technical constraints. Define success metrics and KPIs upfront.",
      step2Title: "Architecture & Design",
      step2Desc: "Design scalable architecture, define tech stack, create data models. Focus on maintainability and future growth.",
      step3Title: "Development & Testing",
      step3Desc: "Build with clean code principles, implement automated testing, ensure code quality and security best practices.",
      step4Title: "Deployment & Optimization",
      step4Desc: "Deploy to production with zero downtime, monitor performance, optimize for scale. Provide ongoing support.",
      principlesTitle: "Core Principles",
      principle1: "Production-First Mindset",
      principle2: "Business Impact Focus",
      principle3: "Iterative Delivery",
      principle4: "Clear Communication",
      principle5: "Best Practices",
      cta: "Let's Build Something Great Together",
      seniorSignalTitle: "I don't just execute specs",
      seniorSignalDesc: "I help clarify requirements, challenge assumptions, and make pragmatic technical decisions. I work directly with founders, product teams, and non-technical clients to deliver solutions that drive real business results."
    },
    // Services Section
    services: {
      title: "Services",
      description: "Transform your ideas into powerful digital solutions. From concept to deployment, I deliver cutting-edge applications that drive business growth and enhance user experiences.",
      cta: "Ready to Start Your Project?",
      service1Title: "Custom Web & Mobile Development",
      service1Desc: "Build scalable, high-performance applications tailored to your business needs. From responsive web apps to native mobile solutions using Vue3, NestJS, Flutter, and modern frameworks.",
      service2Title: "Application Migration & Modernization",
      service2Desc: "Seamlessly migrate legacy systems to modern architectures. Upgrade your technology stack, improve performance, and reduce maintenance costs with zero downtime.",
      service3Title: "AI & Data-Driven Solutions",
      service3Desc: "Leverage artificial intelligence and big data analytics to automate processes, gain insights, and make data-driven decisions that boost your competitive advantage.",
      service4Title: "E-commerce & Business Platforms",
      service4Desc: "Create powerful online stores and business platforms with secure payment gateways, inventory management, and seamless user experiences that convert visitors into customers.",
      service5Title: "Database Design & Optimization",
      service5Desc: "Design robust PostgreSQL and MySQL databases with real-time synchronization. Ensure data integrity, scalability, and optimal performance for your growing business.",
      service6Title: "Security & Performance Optimization",
      service6Desc: "Protect your applications with enterprise-grade security measures and optimize performance for lightning-fast load times that keep users engaged.",
      service7Title: "Consulting & Technical Support",
      service7Desc: "Get expert guidance on technology choices, architecture design, and best practices. Ongoing support to ensure your projects succeed and evolve with your needs.",
      service8Title: "Cloud Deployment & DevOps",
      service8Desc: "Deploy your applications to the cloud with Docker, CI/CD pipelines, and automated workflows. Ensure reliability, scalability, and seamless updates.",
      service9Title: "Full-Stack API Development",
      service9Desc: "Build RESTful and GraphQL APIs with NestJS backend services. Create seamless integrations between frontend and backend for smooth, efficient data flow."
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
      sendMessage: "Send Message",
      loading: "Loading...",
      successMessage: "Your message has been sent. Thank you!",
      errorMessage: "An error occurred while sending the message."
    },
    // Footer
    footer: {
      copyright: "© Copyright",
      allRightsReserved: "All Rights Reserved",
      available: "Available for Freelance Work",
      ready: "Ready to help you build production-ready applications"
    },
    // Freelance CTA
    freelanceCta: {
      title: "Available for Freelance & Contract Work",
      description: "Ready to help you build production-ready applications that drive real business results. Let's discuss your project.",
      contactMe: "Contact Me",
      linkedin: "LinkedIn",
      email: "Email"
    },
    // Modal
    modal: {
      restrictedAccess: "Restricted Access",
      message: "For confidentiality reasons, direct access to this application is not authorized.",
      submessage: "If you wish to access this application, please contact me directly.",
      contactMe: "Contact Me"
    },
    // Diploma Modal
    diploma: {
      title: "Master of Science - Artificial Intelligence & Big Data"
    },
    // Theme Toggle
    theme: {
      light: "Light",
      dark: "Dark"
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
  const navKeys = ['home', 'about', 'resume', 'howIWork', 'portfolio', 'services', 'contact'];
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

