export type ContractType = 'CDI' | 'CDD' | 'Intérim' | 'Freelance' | 'Stage';
export type ExperienceLevel = 'Débutant' | '1-3 ans' | '3-5 ans' | '5+ ans';

export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  city: string;
  region: string;
  sector: string;
  contract: ContractType;
  experience: ExperienceLevel;
  education: string;
  salary?: string;
  postedDate: string;
  deadline: string;
  description: string;
  mission: string[];
  profile: string[];
  skills: string[];
  languages: string[];
  benefits: string[];
  featured: boolean;
}

export const jobs: Job[] = [
  {
    id: 'job-001',
    title: 'Responsable Ressources Humaines',
    company: 'Groupe Saham',
    city: 'Casablanca',
    region: 'Grand Casablanca',
    sector: 'Assurance & Finance',
    contract: 'CDI',
    experience: '5+ ans',
    education: 'Bac+5 RH ou équivalent',
    salary: 'À négocier',
    postedDate: '20 sept. 2025',
    deadline: '20 oct. 2025',
    description: "Nous recherchons un(e) Responsable RH expérimenté(e) pour piloter la stratégie ressources humaines du groupe.",
    mission: [
      'Définir et mettre en œuvre la politique RH du groupe',
      'Piloter le recrutement des profils cadres et dirigeants',
      'Développer les plans de formation et de développement des compétences',
      'Assurer la gestion administrative du personnel et la paie',
      'Accompagner les managers dans la gestion de leurs équipes',
    ],
    profile: [
      'Bac+5 en Ressources Humaines, Droit du travail ou équivalent',
      "Minimum 5 ans d'expérience en gestion RH, dont 2 ans en management",
      'Maîtrise du droit du travail marocain',
      'Capacité à travailler dans un environnement multiculturel',
    ],
    skills: ['SIRH', 'Paie', 'Recrutement', 'Formation', 'Relations sociales', 'Droit du travail'],
    languages: ['Français (courant)', 'Arabe (courant)', 'Anglais (professionnel)'],
    benefits: ['Assurance maladie', 'Voiture de fonction', 'Formation continue', 'Tickets restaurant'],
    featured: true,
  },
  {
    id: 'job-002',
    title: 'Chargé de Formation & Développement',
    company: 'Banque Centrale Populaire',
    city: 'Casablanca',
    region: 'Grand Casablanca',
    sector: 'Banque & Finance',
    contract: 'CDI',
    experience: '3-5 ans',
    education: 'Bac+4/5 Formation ou Pédagogie',
    salary: '12 000 – 16 000 MAD',
    postedDate: '18 sept. 2025',
    deadline: '18 oct. 2025',
    description: "Dans le cadre du développement de notre académie interne, nous recrutons un(e) Chargé(e) de Formation.",
    mission: [
      'Analyser les besoins en formation des différentes directions',
      'Concevoir et déployer des plans de formation adaptés',
      'Sélectionner et coordonner les prestataires de formation',
      "Évaluer l'efficacité des actions de formation",
      'Assurer le suivi budgétaire du plan de formation',
    ],
    profile: [
      "Bac+4/5 en Sciences de l'Éducation, Formation ou RH",
      "3 à 5 ans d'expérience dans un poste similaire",
      "Maîtrise de l'ingénierie pédagogique",
      'Excellentes capacités de communication',
    ],
    skills: ['Ingénierie de formation', 'E-learning', 'Gestion de projet', 'Évaluation', 'OFPPT'],
    languages: ['Français (courant)', 'Arabe (courant)'],
    benefits: ['Assurance maladie', 'Prime annuelle', 'Formation continue'],
    featured: false,
  },
  {
    id: 'job-003',
    title: 'Manager Hôtelier — F&B',
    company: 'Kenzi Hotels Group',
    city: 'Marrakech',
    region: 'Marrakech-Safi',
    sector: 'Hôtellerie & Tourisme',
    contract: 'CDI',
    experience: '3-5 ans',
    education: 'Bac+3 Hôtellerie ou équivalent',
    salary: 'Selon profil',
    postedDate: '17 sept. 2025',
    deadline: '17 oct. 2025',
    description: "Kenzi Hotels Group recrute un(e) Manager F&B pour l'un de ses établissements 5 étoiles à Marrakech.",
    mission: [
      "Superviser l'ensemble des opérations Food & Beverage",
      'Manager et former les équipes de restauration',
      'Garantir la qualité du service et la satisfaction client',
      'Optimiser les coûts et les marges F&B',
      'Développer les offres de restauration',
    ],
    profile: [
      'Formation en hôtellerie-restauration (Bac+3 minimum)',
      "Expérience de 3 à 5 ans en management F&B dans un établissement haut de gamme",
      'Leadership et sens du service client',
    ],
    skills: ['F&B Management', 'Revenue Management', "Gestion d'équipe", 'HACCP', 'Luxe'],
    languages: ['Français (courant)', 'Anglais (courant)', 'Arabe (souhaité)'],
    benefits: ['Hébergement', 'Restauration', 'Assurance maladie', 'Prime de performance'],
    featured: true,
  },
  {
    id: 'job-004',
    title: 'Conseiller Commercial Entreprises',
    company: 'Maroc Telecom',
    city: 'Rabat',
    region: 'Rabat-Salé-Kénitra',
    sector: 'Télécom & IT',
    contract: 'CDI',
    experience: '1-3 ans',
    education: 'Bac+3 Commerce ou Marketing',
    salary: 'Fixe + variable',
    postedDate: '15 sept. 2025',
    deadline: '15 oct. 2025',
    description: 'Rejoignez notre équipe commerciale B2B pour développer notre portefeuille clients entreprises.',
    mission: [
      'Prospecter et développer un portefeuille clients B2B',
      'Proposer des solutions télécoms adaptées aux besoins des entreprises',
      'Assurer le suivi et la fidélisation des clients',
      'Atteindre les objectifs commerciaux fixés',
    ],
    profile: [
      'Bac+3 en Commerce, Marketing ou Gestion',
      "1 à 3 ans d'expérience en vente B2B",
      'Excellent relationnel et sens de la négociation',
    ],
    skills: ['Prospection', 'Négociation', 'CRM', 'B2B', 'Télécom'],
    languages: ['Français (courant)', 'Arabe (courant)'],
    benefits: ['Variable attractif', 'Voiture de fonction', 'Téléphone', 'Mutuelle'],
    featured: false,
  },
  {
    id: 'job-005',
    title: 'Formateur QHSE',
    company: 'SFORHET',
    city: 'Casablanca',
    region: 'Grand Casablanca',
    sector: 'Formation & Conseil',
    contract: 'Freelance',
    experience: '3-5 ans',
    education: 'Bac+4/5 QHSE ou Ingénieur',
    salary: 'À négocier / journée',
    postedDate: '14 sept. 2025',
    deadline: '30 oct. 2025',
    description: 'SFORHET recherche un formateur QHSE expérimenté pour animer des sessions de formation inter et intra-entreprises.',
    mission: [
      'Concevoir et animer des formations QHSE',
      "Adapter les contenus aux secteurs d'activité des clients",
      'Évaluer les acquis des participants',
      "Contribuer à l'ingénierie pédagogique",
    ],
    profile: [
      'Ingénieur ou Bac+4/5 spécialisé QHSE',
      "3 à 5 ans d'expérience terrain en QHSE",
      'Expérience en animation de formation souhaitée',
    ],
    skills: ['ISO 9001', 'ISO 14001', 'OHSAS 18001', 'Animation', 'Pédagogie'],
    languages: ['Français (courant)', 'Arabe (courant)'],
    benefits: ['Tarif journalier compétitif', 'Flexibilité', 'Missions variées'],
    featured: false,
  },
  {
    id: 'job-006',
    title: 'Responsable Logistique',
    company: 'Renault Maroc',
    city: 'Casablanca',
    region: 'Grand Casablanca',
    sector: 'Industrie & Automobile',
    contract: 'CDI',
    experience: '5+ ans',
    education: 'Bac+5 Supply Chain ou Ingénieur',
    salary: '18 000 – 25 000 MAD',
    postedDate: '12 sept. 2025',
    deadline: '12 oct. 2025',
    description: "Renault Maroc recrute un(e) Responsable Logistique pour piloter la chaîne d'approvisionnement.",
    mission: [
      'Piloter et optimiser la chaîne logistique',
      'Manager une équipe de 15 personnes',
      'Gérer les relations avec les fournisseurs et transporteurs',
      'Mettre en place des indicateurs de performance',
    ],
    profile: [
      'Ingénieur ou Bac+5 Supply Chain / Logistique',
      'Minimum 5 ans en management logistique',
      'Maîtrise des outils ERP (SAP souhaité)',
    ],
    skills: ['Supply Chain', 'SAP', 'Management', 'Lean', 'KPI'],
    languages: ['Français (courant)', 'Anglais (professionnel)'],
    benefits: ['Assurance maladie', 'Intéressement', 'Formation', 'Véhicule'],
    featured: false,
  },
  {
    id: 'job-007',
    title: 'Psychologue du Travail',
    company: 'Office Chérifien des Phosphates',
    city: 'Khouribga',
    region: 'Béni Mellal-Khénifra',
    sector: 'Industrie minière',
    contract: 'CDI',
    experience: '3-5 ans',
    education: 'Bac+5 Psychologie du travail',
    salary: 'Selon grille OCP',
    postedDate: '10 sept. 2025',
    deadline: '10 oct. 2025',
    description: "L'OCP recrute un(e) Psychologue du Travail pour accompagner ses collaborateurs.",
    mission: [
      "Conduire des bilans de compétences et d'orientation",
      'Accompagner les collaborateurs en difficulté',
      'Contribuer aux programmes de bien-être au travail',
      'Former les managers à la gestion des RPS',
    ],
    profile: [
      'Master en Psychologie du Travail et des Organisations',
      "3 à 5 ans d'expérience en entreprise",
      'Empathie, confidentialité et éthique professionnelle',
    ],
    skills: ['Bilan de compétences', 'Coaching', 'RPS', 'Évaluation', 'Médiation'],
    languages: ['Français (courant)', 'Arabe (courant)'],
    benefits: ['Logement de fonction', 'Assurance', 'Avantages OCP'],
    featured: false,
  },
  {
    id: 'job-008',
    title: 'Directeur Adjoint Hôtel',
    company: 'Sofitel Casablanca Tour Blanche',
    city: 'Casablanca',
    region: 'Grand Casablanca',
    sector: 'Hôtellerie & Tourisme',
    contract: 'CDI',
    experience: '5+ ans',
    education: 'Bac+4/5 Hôtellerie ou Management',
    salary: 'Selon profil + avantages',
    postedDate: '08 sept. 2025',
    deadline: '08 oct. 2025',
    description: "Le Sofitel Casablanca Tour Blanche recherche son/sa Directeur(trice) Adjoint(e) pour accompagner la direction générale.",
    mission: [
      'Seconder le Directeur Général dans toutes ses fonctions',
      'Superviser les départements opérationnels',
      'Garantir les standards de qualité Sofitel',
      'Gérer la relation client et traiter les réclamations',
      'Piloter les indicateurs de performance hôtelière',
    ],
    profile: [
      'Formation supérieure en hôtellerie ou management',
      "Minimum 5 ans en management hôtelier dans un établissement 5*",
      'Sens des responsabilités et leadership naturel',
    ],
    skills: ['Revenue Management', 'Yield Management', 'Leadership', 'Luxe', 'Opérations'],
    languages: ['Français (courant)', 'Anglais (courant)', 'Arabe (atout)'],
    benefits: ['Package compétitif', 'Avantages Accor', 'Formation internationale'],
    featured: true,
  },
];

export const sectors = ['Tous les secteurs', 'Assurance & Finance', 'Banque & Finance', 'Hôtellerie & Tourisme', 'Télécom & IT', 'Formation & Conseil', 'Industrie & Automobile', 'Industrie minière'];
export const cities = ['Toutes les villes', 'Casablanca', 'Rabat', 'Marrakech', 'Khouribga'];
export const contracts: ContractType[] = ['CDI', 'CDD', 'Intérim', 'Freelance', 'Stage'];
export const experienceLevels: ExperienceLevel[] = ['Débutant', '1-3 ans', '3-5 ans', '5+ ans'];