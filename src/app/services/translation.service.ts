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
    title: 'Full Stack Engineer',
    subtitle:
      'Full Stack Engineer with experience shipping AI-powered platforms, cloud-native apps, and DevOps pipelines across France, Canada, and Tunisia. AWS Certified Solutions Architect.',
    downloadCv: 'Download CV',
    contactMe: 'Contact Me',
  },
  about: {
    sectionTitle: 'About Me',
    sectionSubtitle: 'Get to know me better',
    bio1:
      "I'm Hana Ben Amor, a Full Stack Engineer with 1 year of experience shipping AI-powered platforms, cloud-native applications, and DevOps pipelines across France, Canada, and Tunisia.",
    bio2:
      'I contributed to production systems at EDF serving 5,000+ internal users and am currently delivering remote freelance projects for an international Canadian client. AWS Certified Solutions Architect.',
    bio3:
      'I thrive in international, fast-paced environments and am actively seeking opportunities in Full Stack, AI, or Cloud engineering.',
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
        role: 'Full Stack Engineer (Freelance)',
        company: 'Mode Elite Import',
        period: '2025 – Present',
        location: 'Remote · Quebec, Canada',
        description:
          'Shipped 10+ full-cycle features for a Canadian e-commerce platform, reducing manual processing time by ~30% through automated backend workflows. Engineered RESTful APIs consumed by a reactive Angular frontend, cutting average page load time by ~25%. Collaborated asynchronously with a distributed team across 2 time zones using Agile sprints.',
        tech: ['Angular', 'Spring Boot', 'PostgreSQL', 'REST API', 'Git'],
      },
      {
        role: 'Full Stack Engineer (Internship)',
        company: 'EDF – Électricité de France',
        period: 'May 2025 – Oct 2025',
        location: 'Lyon, France',
        description:
          'Contributed to TRAIL, an AI monitoring tool tracking usage for 5,000+ internal EDF users. Architected and maintained 15+ REST API endpoints. Established an observability stack (Grafana, Prometheus, Elasticsearch) reducing incident detection time by 40%. Containerized 8 microservices on AWS with Docker and Kubernetes, cutting deployment time by 50%.',
        tech: ['Spring Boot', 'Angular', 'Jenkins', 'GitLab', 'Nexus', 'PostgreSQL', 'Elasticsearch', 'JUnit', 'Docker', 'Grafana', 'Prometheus', 'AWS', 'Kubernetes'],
      },
      {
        role: 'DevOps / Cloud Engineer (Internship)',
        company: 'VERMEG',
        period: 'Jul 2024 – Sep 2024',
        location: 'Tunis, Tunisia',
        description:
          'Automated provisioning of 3 VM types (Linux, Windows, RHEL) reducing manual setup from 4 hours to under 15 minutes. Implemented cloud-ready infrastructure on AWS via Terraform across 3 target stages. Established CI/CD pipelines with Inspec compliance checks achieving 100% policy-compliant image deployments.',
        tech: ['Packer', 'AWS', 'Terraform', 'Jenkins', 'Inspec', 'Git', 'OVF/OVA', 'QEMU', 'VirtualBox', 'VMware'],
      },
      {
        role: 'Full Stack Engineer (Internship)',
        company: 'MEDIANET',
        period: 'Jun 2023 – Aug 2023',
        location: 'Tunis, Tunisia',
        description:
          'Launched BookSphere, a full-featured e-commerce and blog platform serving 500+ test users within a 3-month Scrum cycle. Secured the application with Spring Security implementing role-based access control across 4 distinct user roles.',
        tech: ['Spring Boot', 'Spring Security', 'AngularJS', 'Swagger', 'GitLab CI/CD'],
      },
    ],
  },
  projects: {
    sectionTitle: 'Projects',
    sectionSubtitle: 'Things I have built',
    viewCode: 'View Code',
    items: [
      {
        title: 'Wattwise — AI Energy Compliance Platform',
        description:
          'End-to-end AI platform helping French landlords comply with Loi Climat et Résilience, targeting 5M+ affected properties. Integrated Llama API to generate personalised renovation plans with cost estimates in under 10 seconds. Automated financial aid calculation (MaPrimeRénov, CEE, Éco-PTZ) covering up to €70,000 per property. Indexed millions of DPE records from the national ADEME database for instant compliance checks.',
        tech: ['Spring Boot', 'Angular 19', 'PostgreSQL', 'TailwindCSS v4', 'Llama API', 'JWT', 'ADEME API', 'Python'],
        date: 'November 2025',
      },
      {
        title: 'FinFlow — Smart Financial Tracking Platform',
        description:
          'Financial tracking platform with real-time expense categorisation across 10+ categories and automated monthly budget forecasting. Reduced manual data entry by 80% through smart transaction parsing and an interactive Angular dashboard with live chart updates.',
        tech: ['Angular', 'Spring Boot', 'MySQL'],
        date: 'March 2026',
      },
      {
        title: 'Renter App — Property Rental Platform',
        description:
          'Airbnb-inspired platform supporting end-to-end listings, search, booking, and Stripe payment processing with a sub-2s checkout flow.',
        tech: ['.NET', 'MySQL', 'Stripe API', 'HTML/CSS/JS'],
        date: 'December 2024',
      },
      {
        title: 'NovaUniversity — University Management Platform',
        description:
          'University system covering 6 modules (enrollment, scheduling, grades, diploma generation) with AI-powered scheduling that cut conflicts by 90%.',
        tech: ['Spring Boot', 'Angular', 'Docker', 'MySQL', 'AI'],
        date: 'May 2024',
      },
    ],
  },
  skills: {
    sectionTitle: 'Skills',
    sectionSubtitle: 'My technical expertise',
    devops: 'DevOps',
    cloud: 'Cloud & IaC',
    languages: 'Backend & Languages',
    web: 'Frontend & Databases',
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
    location: 'Monastir, Tunisia'
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
    title: 'Ingénieure Full Stack',
    subtitle:
      'Ingénieure Full Stack avec une expérience dans la livraison de plateformes IA, d\'applications cloud-native et de pipelines DevOps en France, au Canada et en Tunisie. AWS Certified Solutions Architect.',
    downloadCv: 'Télécharger CV',
    contactMe: 'Me Contacter',
  },
  about: {
    sectionTitle: 'À Propos',
    sectionSubtitle: 'Apprenez à me connaître',
    bio1:
      'Je suis Hana Ben Amor, Ingénieure Full Stack avec 1 an d\'expérience dans la livraison de plateformes IA, d\'applications cloud-native et de pipelines DevOps en France, au Canada et en Tunisie.',
    bio2:
      'J\'ai contribué aux systèmes de production d\'EDF au service de 5 000+ utilisateurs internes et livre actuellement des projets freelance à distance pour un client canadien international. AWS Certified Solutions Architect.',
    bio3:
      'Je m\'épanouis dans des environnements internationaux dynamiques et recherche activement des opportunités en ingénierie Full Stack, IA ou Cloud.',
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
        role: 'Ingénieure Full Stack (Freelance)',
        company: 'Mode Elite Import',
        period: '2025 – Présent',
        location: 'Télétravail · Québec, Canada',
        description:
          'Livraison de 10+ fonctionnalités complètes pour une plateforme e-commerce canadienne, réduisant le traitement manuel de ~30% grâce à des workflows automatisés. APIs RESTful consommées par un frontend Angular réactif, réduisant le temps de chargement moyen de ~25%. Collaboration asynchrone avec une équipe distribuée sur 2 fuseaux horaires via des sprints Agile.',
        tech: ['Angular', 'Spring Boot', 'PostgreSQL', 'REST API', 'Git'],
      },
      {
        role: 'Ingénieure Full Stack (Stage)',
        company: 'EDF – Électricité de France',
        period: 'Mai 2025 – Oct 2025',
        location: 'Lyon, France',
        description:
          'Contribution à TRAIL, un outil de monitoring IA pour 5 000+ utilisateurs EDF. Conception et maintenance de 15+ endpoints REST API. Mise en place d\'un stack d\'observabilité (Grafana, Prometheus, Elasticsearch) réduisant le temps de détection des incidents de 40%. Conteneurisation de 8 microservices sur AWS réduisant le temps de déploiement de 50%.',
        tech: ['Spring Boot', 'Angular', 'Jenkins', 'GitLab', 'Nexus', 'PostgreSQL', 'Elasticsearch', 'JUnit', 'Docker', 'Grafana', 'Prometheus', 'AWS', 'Kubernetes'],
      },
      {
        role: 'Ingénieure DevOps / Cloud (Stage)',
        company: 'VERMEG',
        period: 'Juil. 2024 – Sept. 2024',
        location: 'Tunis, Tunisie',
        description:
          'Automatisation du provisionnement de 3 types de VM réduisant la configuration manuelle de 4h à moins de 15 min. Infrastructure cloud sur AWS via Terraform sur 3 environnements cibles. Pipelines CI/CD avec contrôles de conformité Inspec — 100% de déploiements conformes.',
        tech: ['Packer', 'AWS', 'Terraform', 'Jenkins', 'Inspec', 'Git', 'OVF/OVA', 'QEMU', 'VirtualBox', 'VMware'],
      },
      {
        role: 'Ingénieure Full Stack (Stage)',
        company: 'MEDIANET',
        period: 'Juin 2023 – Août 2023',
        location: 'Tunis, Tunisie',
        description:
          'Lancement de BookSphere, une plateforme e-commerce complète avec blog pour 500+ utilisateurs en 3 mois (cycle Scrum). Sécurisation avec Spring Security et contrôle d\'accès basé sur les rôles pour 4 types d\'utilisateurs.',
        tech: ['Spring Boot', 'Spring Security', 'AngularJS', 'Swagger', 'GitLab CI/CD'],
      },
    ],
  },
  projects: {
    sectionTitle: 'Projets',
    sectionSubtitle: 'Ce que j\'ai réalisé',
    viewCode: 'Voir le Code',
    items: [
      {
        title: 'Wattwise — Plateforme IA de Conformité Énergétique',
        description:
          'Plateforme IA aidant les propriétaires français à se conformer à la Loi Climat et Résilience, ciblant 5M+ de propriétés. Llama API génère des plans de rénovation personnalisés en moins de 10 secondes. Calcul automatisé des aides financières (MaPrimeRénov, CEE, Éco-PTZ) jusqu\'à 70 000€ par propriété. Indexation de millions de DPE depuis la base ADEME pour des vérifications instantanées.',
        tech: ['Spring Boot', 'Angular 19', 'PostgreSQL', 'TailwindCSS v4', 'Llama API', 'JWT', 'ADEME API', 'Python'],
        date: 'Novembre 2025',
      },
      {
        title: 'FinFlow — Plateforme de Suivi Financier',
        description:
          'Plateforme de suivi financier avec catégorisation des dépenses en temps réel sur 10+ catégories et prévisions budgétaires mensuelles automatisées. Réduction de la saisie manuelle de 80% grâce au parsing intelligent des transactions.',
        tech: ['Angular', 'Spring Boot', 'MySQL'],
        date: 'Mars 2026',
      },
      {
        title: 'Renter App — Plateforme de Location Immobilière',
        description:
          'Plateforme inspirée d\'Airbnb supportant annonces, recherche, réservation et paiement Stripe avec un checkout en moins de 2 secondes.',
        tech: ['.NET', 'MySQL', 'Stripe API', 'HTML/CSS/JS'],
        date: 'Décembre 2024',
      },
      {
        title: 'NovaUniversity — Plateforme de Gestion Universitaire',
        description:
          'Système universitaire couvrant 6 modules (inscription, planification, notes, génération de diplômes) avec une planification IA réduisant les conflits de 90%.',
        tech: ['Spring Boot', 'Angular', 'Docker', 'MySQL', 'IA'],
        date: 'Mai 2024',
      },
    ],
  },
  skills: {
    sectionTitle: 'Compétences',
    sectionSubtitle: 'Mon expertise technique',
    devops: 'DevOps',
    cloud: 'Cloud & IaC',
    languages: 'Backend & Langages',
    web: 'Frontend & Bases de Données',
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
    location: 'Monastir, Tunisie'  },
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
