import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

export type Language = 'en' | 'fr';

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    downloadCv: string;
    contactMe: string;
  };
  about: {
    sectionTitle: string;
    sectionSubtitle: string;
    bio1: string;
    bio2: string;
    bio3: string;
    education: string;
    degree1Title: string;
    degree1School: string;
    degree1Period: string;
    degree2Title: string;
    degree2School: string;
    degree2Period: string;
    languages: string;
    certifications: string;
  };
  experience: {
    sectionTitle: string;
    sectionSubtitle: string;
    present: string;
    items: Array<{
      role: string;
      company: string;
      period: string;
      location: string;
      description: string;
      tech: string[];
    }>;
  };
  projects: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewCode: string;
    items: Array<{
      title: string;
      description: string;
      tech: string[];
      date?: string;
    }>;
  };
  skills: {
    sectionTitle: string;
    sectionSubtitle: string;
    devops: string;
    cloud: string;
    languages: string;
    web: string;
  };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    successMessage: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    infoTitle: string;
    location: string;
    phone: string;
  };
  footer: {
    rights: string;
    madeWith: string;
  };
}

const EN: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    title: 'Software Engineer',
    subtitle:
      'Passionate about building scalable web applications and cloud solutions. Based in Monastir, Tunisia.',
    downloadCv: 'Download CV',
    contactMe: 'Contact Me',
  },
  about: {
    sectionTitle: 'About Me',
    sectionSubtitle: 'Get to know me better',
    bio1:
      "I'm Hana Ben Amor, a Software Engineering graduate from the Higher Institute of Applied Sciences and Technology of Sousse, Tunisia. I'm passionate about crafting robust, scalable applications that solve real-world problems.",
    bio2:
      'With hands-on experience in Full Stack development, DevOps, and Cloud engineering, I have worked with leading companies including EDF in France and VERMEG in Tunisia. I thrive in collaborative environments and embrace modern engineering practices.',
    bio3:
      'Currently working remotely as a Full Stack Engineer for Mode Elite Import (Canada, Quebec), I continue to grow my expertise in the latest technologies and cloud-native architectures.',
    education: 'Education',
    degree1Title: 'Engineering Degree in Software Engineering',
    degree1School: 'Higher Institute of Applied Sciences and Technology of Sousse',
    degree1Period: 'Sept 2022 – Oct 2025',
    degree2Title: 'Preparatory Cycle – Mathematics, Physics & Computer Science',
    degree2School: 'Higher Institute of Applied Sciences and Technology of Sousse',
    degree2Period: 'Sept 2020 – June 2022',
    languages: 'Languages',
    certifications: 'Certifications',
  },
  experience: {
    sectionTitle: 'Experience',
    sectionSubtitle: 'My professional journey',
    present: 'Present',
    items: [
      {
        role: 'Full Stack Engineer',
        company: 'Mode Elite Import',
        period: '2025 – Present',
        location: 'Remote · Quebec, Canada',
        description:
          'Working remotely as a Full Stack Engineer, developing and maintaining modern web applications for a Canadian client.',
        tech: [],
      },
      {
        role: 'Full Stack Engineer',
        company: 'EDF – Électricité de France',
        period: 'May 2025 – Oct 2025',
        location: 'Lyon, France',
        description:
          'Participated in development of the TRAIL application, an AI monitoring tool used to track application usage at EDF and manage user satisfaction campaigns.',
        tech: ['Spring Boot', 'Angular', 'Jenkins', 'GitLab', 'Nexus', 'PostgreSQL', 'Elasticsearch', 'JUnit', 'Docker', 'Grafana', 'Prometheus', 'AWS', 'Kubernetes'],
      },
      {
        role: 'DevOps / Cloud Engineer',
        company: 'VERMEG',
        period: 'July 2024 – Sept 2024',
        location: 'Tunis, Tunisia',
        description:
          "Worked on Mola's VM Solutions project to automate provisioning and deployment of secure virtual machines.",
        tech: ['Packer', 'AWS', 'Jenkins', 'Inspec', 'Git', 'OVF/OVA', 'QEMU', 'VirtualBox', 'VMware'],
      },
      {
        role: 'Full Stack Engineer',
        company: 'MEDIANET',
        period: 'June 2023 – Aug 2023',
        location: 'Tunis, Tunisia',
        description:
          'Developed BookSphere web application — an online bookstore platform with integrated blog space.',
        tech: ['Spring Boot', 'Spring Security', 'AngularJS', 'Swagger', 'GitLab CI/CD', 'Scrum'],
      },
    ],
  },
  projects: {
    sectionTitle: 'Projects',
    sectionSubtitle: 'Things I have built',
    viewCode: 'View Code',
    items: [
      {
        title: 'Ben Amor Collection',
        description:
          'An elegant online boutique for clothing and accessories with integrated payment processing.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      },
      {
        title: 'FinFlow',
        description:
          'A smart financial tracking and management platform for personal and business finances.',
        tech: ['Angular', 'Spring Boot', 'MySQL'],
      },
      {
        title: 'Renter App',
        description:
          'Web application inspired by Airbnb for property rentals with secure payment integration.',
        tech: ['.NET', 'MySQL', 'Stripe API', 'HTML/CSS/JS'],
        date: 'December 2024',
      },
      {
        title: 'NovaUniversity',
        description:
          'Full university management system from enrollment to diploma generation with AI-powered schedule generation.',
        tech: ['Spring Boot', 'Angular', 'Docker', 'MySQL', 'AI'],
        date: 'May 2024',
      },
      {
        title: 'Inventory Management',
        description:
          'Modular inventory system based on microservices architecture with real-time monitoring.',
        tech: ['Spring Boot', 'WebFlux', 'Kafka', 'MySQL', 'Docker', 'Eureka', 'Prometheus', 'Grafana'],
        date: 'April 2024',
      },
      {
        title: 'BookSphere',
        description:
          'E-commerce web application for selling books online with integrated blog space.',
        tech: ['Spring Boot', 'Angular', 'MySQL', 'Spring Security'],
        date: 'June 2023',
      },
      {
        title: 'AmazonHer',
        description:
          'Clothing e-commerce platform inspired by Amazon, built with the MERN stack.',
        tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        date: 'September 2022',
      },
    ],
  },
  skills: {
    sectionTitle: 'Skills',
    sectionSubtitle: 'My technical expertise',
    devops: 'DevOps',
    cloud: 'Cloud',
    languages: 'Programming Languages',
    web: 'Web & Frameworks',
  },
  contact: {
    sectionTitle: 'Contact',
    sectionSubtitle: "Let's work together",
    name: 'Full Name',
    email: 'Email Address',
    message: 'Message',
    send: 'Send Message',
    sending: 'Sending…',
    successMessage: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
    namePlaceholder: 'John Doe',
    emailPlaceholder: 'john@example.com',
    messagePlaceholder: 'Tell me about your project…',
    infoTitle: 'Get in touch',
    location: 'Monastir, Tunisia',
    phone: '+(216) 99963900',
  },
  footer: {
    rights: 'All rights reserved.',
    madeWith: 'Made with ❤️ by Hana Ben Amor',
  },
};

const FR: Translations = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    experience: 'Expérience',
    projects: 'Projets',
    skills: 'Compétences',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Bonjour, je suis',
    title: 'Ingénieure Logiciel',
    subtitle:
      'Passionnée par la création d\'applications web scalables et de solutions cloud. Basée à Monastir, Tunisie.',
    downloadCv: 'Télécharger CV',
    contactMe: 'Me Contacter',
  },
  about: {
    sectionTitle: 'À Propos',
    sectionSubtitle: 'Apprenez à me connaître',
    bio1:
      'Je suis Hana Ben Amor, diplômée en Génie Logiciel de l\'Institut Supérieur des Sciences Appliquées et de Technologie de Sousse, Tunisie. Je suis passionnée par la création d\'applications robustes et évolutives.',
    bio2:
      'Avec une expérience pratique en développement Full Stack, DevOps et Cloud engineering, j\'ai travaillé avec des entreprises de renom dont EDF en France et VERMEG en Tunisie.',
    bio3:
      'Actuellement en télétravail en tant qu\'Ingénieure Full Stack pour Mode Elite Import (Canada, Québec), je continue de développer mon expertise dans les dernières technologies.',
    education: 'Formation',
    degree1Title: 'Diplôme d\'Ingénieur en Génie Logiciel',
    degree1School: 'Institut Supérieur des Sciences Appliquées et de Technologie de Sousse',
    degree1Period: 'Sept 2022 – Oct 2025',
    degree2Title: 'Cycle Préparatoire – Mathématiques, Physique & Informatique',
    degree2School: 'Institut Supérieur des Sciences Appliquées et de Technologie de Sousse',
    degree2Period: 'Sept 2020 – Juin 2022',
    languages: 'Langues',
    certifications: 'Certifications',
  },
  experience: {
    sectionTitle: 'Expérience',
    sectionSubtitle: 'Mon parcours professionnel',
    present: 'Présent',
    items: [
      {
        role: 'Ingénieure Full Stack',
        company: 'Mode Elite Import',
        period: '2025 – Présent',
        location: 'Télétravail · Québec, Canada',
        description:
          'Travail en télétravail en tant qu\'Ingénieure Full Stack, développement et maintenance d\'applications web modernes pour un client canadien.',
        tech: [],
      },
      {
        role: 'Ingénieure Full Stack',
        company: 'EDF – Électricité de France',
        period: 'Mai 2025 – Oct 2025',
        location: 'Lyon, France',
        description:
          'Participation au développement de l\'application TRAIL, un outil de monitoring IA pour suivre l\'utilisation des applications à EDF et gérer les campagnes de satisfaction utilisateur.',
        tech: ['Spring Boot', 'Angular', 'Jenkins', 'GitLab', 'Nexus', 'PostgreSQL', 'Elasticsearch', 'JUnit', 'Docker', 'Grafana', 'Prometheus', 'AWS', 'Kubernetes'],
      },
      {
        role: 'Ingénieure DevOps / Cloud',
        company: 'VERMEG',
        period: 'Juil. 2024 – Sept. 2024',
        location: 'Tunis, Tunisie',
        description:
          'Travail sur le projet Mola\'s VM Solutions pour automatiser le provisionnement et le déploiement de machines virtuelles sécurisées.',
        tech: ['Packer', 'AWS', 'Jenkins', 'Inspec', 'Git', 'OVF/OVA', 'QEMU', 'VirtualBox', 'VMware'],
      },
      {
        role: 'Ingénieure Full Stack',
        company: 'MEDIANET',
        period: 'Juin 2023 – Août 2023',
        location: 'Tunis, Tunisie',
        description:
          'Développement de l\'application web BookSphere — une librairie en ligne avec espace blog intégré.',
        tech: ['Spring Boot', 'Spring Security', 'AngularJS', 'Swagger', 'GitLab CI/CD', 'Scrum'],
      },
    ],
  },
  projects: {
    sectionTitle: 'Projets',
    sectionSubtitle: 'Ce que j\'ai réalisé',
    viewCode: 'Voir le Code',
    items: [
      {
        title: 'Ben Amor Collection',
        description:
          'Une boutique en ligne élégante pour vêtements et accessoires avec paiement intégré.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      },
      {
        title: 'FinFlow',
        description:
          'Une plateforme intelligente de suivi et de gestion financière pour particuliers et entreprises.',
        tech: ['Angular', 'Spring Boot', 'MySQL'],
      },
      {
        title: 'Renter App',
        description:
          'Application web inspirée d\'Airbnb pour la location de propriétés avec paiement sécurisé.',
        tech: ['.NET', 'MySQL', 'Stripe API', 'HTML/CSS/JS'],
        date: 'Décembre 2024',
      },
      {
        title: 'NovaUniversity',
        description:
          'Système de gestion universitaire complet de l\'inscription à la génération de diplômes avec IA.',
        tech: ['Spring Boot', 'Angular', 'Docker', 'MySQL', 'IA'],
        date: 'Mai 2024',
      },
      {
        title: 'Gestion des Stocks',
        description:
          'Système de gestion des stocks modulaire basé sur une architecture microservices avec monitoring temps réel.',
        tech: ['Spring Boot', 'WebFlux', 'Kafka', 'MySQL', 'Docker', 'Eureka', 'Prometheus', 'Grafana'],
        date: 'Avril 2024',
      },
      {
        title: 'BookSphere',
        description:
          'Application web e-commerce pour la vente de livres en ligne avec espace blog intégré.',
        tech: ['Spring Boot', 'Angular', 'MySQL', 'Spring Security'],
        date: 'Juin 2023',
      },
      {
        title: 'AmazonHer',
        description:
          'Plateforme e-commerce de vêtements inspirée d\'Amazon, développée avec la stack MERN.',
        tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        date: 'Septembre 2022',
      },
    ],
  },
  skills: {
    sectionTitle: 'Compétences',
    sectionSubtitle: 'Mon expertise technique',
    devops: 'DevOps',
    cloud: 'Cloud',
    languages: 'Langages de Programmation',
    web: 'Web & Frameworks',
  },
  contact: {
    sectionTitle: 'Contact',
    sectionSubtitle: 'Travaillons ensemble',
    name: 'Nom Complet',
    email: 'Adresse Email',
    message: 'Message',
    send: 'Envoyer',
    sending: 'Envoi…',
    successMessage: 'Merci ! Votre message a été envoyé avec succès. Je vous répondrai bientôt.',
    namePlaceholder: 'Jean Dupont',
    emailPlaceholder: 'jean@exemple.com',
    messagePlaceholder: 'Parlez-moi de votre projet…',
    infoTitle: 'Entrer en contact',
    location: 'Monastir, Tunisie',
    phone: '+(216) 99963900',
  },
  footer: {
    rights: 'Tous droits réservés.',
    madeWith: 'Fait avec ❤️ par Hana Ben Amor',
  },
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private langSubject = new BehaviorSubject<Language>('en');
  currentLang$ = this.langSubject.asObservable();

  translations$ = this.currentLang$.pipe(
    map((lang) => (lang === 'en' ? EN : FR))
  );

  get currentLang(): Language {
    return this.langSubject.value;
  }

  toggleLanguage(): void {
    this.langSubject.next(this.langSubject.value === 'en' ? 'fr' : 'en');
  }

  setLanguage(lang: Language): void {
    this.langSubject.next(lang);
  }
}
