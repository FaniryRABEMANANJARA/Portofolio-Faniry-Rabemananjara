document.addEventListener("DOMContentLoaded", function() {
    // Dictionnaire de traductions
    const translations = {
        en: {
            heroTitle: "Faniry Rabemananjara",
            heroDesc: "I'm a Full-Stack Developer",
            aboutTitle: "About",
            aboutText: "Passionate about application development and holder of a Master of Science from ESTIA...",
            skillsTitle: "Skills",
            skillsDesc: "My expertise in full-stack development, AI, and database management.",
            contactTitle: "Contact",
            contactText: "Feel free to contact me for any inquiries.",
            servicesTitle: "Services",
            resumeTitle: "Resume",
            statsTitle: "Statistics",
            happyClients: "Happy Clients",
            successfulProjects: "Projects",
            hoursSupport: "Hours Of Support",
            hardWorkers: "Hard Workers"
        },
        fr: {
            heroTitle: "Faniry Rabemananjara",
            heroDesc: "Je suis un développeur Full-Stack",
            aboutTitle: "À propos",
            aboutText: "Passionné par le développement d'applications et titulaire d'un Master en sciences de l'ESTIA...",
            skillsTitle: "Compétences",
            skillsDesc: "Mon expertise en développement full-stack, IA et gestion de bases de données.",
            contactTitle: "Contact",
            contactText: "N'hésitez pas à me contacter pour toute demande.",
            servicesTitle: "Services",
            resumeTitle: "CV",
            statsTitle: "Statistiques",
            happyClients: "Clients Satisfaits",
            successfulProjects: "Projets Réussis",
            hoursSupport: "Heures de Support",
            hardWorkers: "Travailleurs Assidus"
        }
    };

    // Liste des éléments à traduire
    const elementsToTranslate = {
        heroTitle: document.querySelector("#hero h2"),
        heroDesc: document.querySelector("#hero p"),
        aboutTitle: document.querySelector("#about h2"),
        aboutText: document.querySelector("#about p"),
        skillsTitle: document.querySelector("#skills h2"),
        skillsDesc: document.querySelector("#skills p"),
        contactTitle: document.querySelector("#contact h2"),
        contactText: document.querySelector("#contact p"),
        servicesTitle: document.querySelector("#services h2"),
        resumeTitle: document.querySelector("#resume h2"),
        statsTitle: document.querySelector("#stats h2"),
        happyClients: document.querySelector("#stats .stats-item:nth-child(1) strong"),
        successfulProjects: document.querySelector("#stats .stats-item:nth-child(2) strong"),
        hoursSupport: document.querySelector("#stats .stats-item:nth-child(3) strong"),
        hardWorkers: document.querySelector("#stats .stats-item:nth-child(4) strong"),
    };

    // Fonction pour changer la langue
    function changeLanguage(lang) {
        Object.keys(elementsToTranslate).forEach(key => {
            if (elementsToTranslate[key]) {
                elementsToTranslate[key].innerText = translations[lang][key];
            }
        });
    }

    // Ajout d'un écouteur d'événements sur le sélecteur de langue
    document.getElementById("lang-select").addEventListener("change", function() {
        changeLanguage(this.value);
    });

    // Définir la langue par défaut sur l'anglais
    changeLanguage("en");
});