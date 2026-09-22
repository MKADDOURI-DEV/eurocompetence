export type FormationFormat = 'Présentiel' | 'Distanciel' | 'Hybride';
export type FormationStatus = 'Disponible' | 'Complet' | 'Bientôt';

export interface Formation {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  format: FormationFormat;
  location: string;
  nextDate: string;
  price: string;
  ofpptFinancing: boolean;
  status: FormationStatus;
  level: string;
  targetAudience: string;
  objectives: string[];
  program: { module: string; topics: string[] }[];
  prerequisites: string;
  maxParticipants: number;
  currentParticipants: number;
  instructor: string;
}

export const formations: Formation[] = [
  {
    id: 'form-001',
    title: 'Management & Leadership Opérationnel',
    category: 'Management',
    shortDescription: 'Développez vos compétences en management d\'équipe et en leadership pour piloter efficacement vos collaborateurs.',
    fullDescription: 'Cette formation intensive vous permettra d\'acquérir les outils et techniques du management moderne pour devenir un leader efficace et inspirant. Vous apprendrez à motiver, déléguer, gérer les conflits et développer les compétences de votre équipe.',
    duration: '3 jours (21h)',
    format: 'Présentiel',
    location: 'Casablanca',
    nextDate: '15 oct. 2025',
    price: 'Sur devis',
    ofpptFinancing: true,
    status: 'Disponible',
    level: 'Intermédiaire',
    targetAudience: 'Managers, chefs d\'équipe, responsables de service',
    objectives: [
      'Maîtriser les styles de management adaptés à chaque situation',
      'Développer son leadership et son autorité naturelle',
      'Motiver et fédérer une équipe autour d\'objectifs communs',
      'Gérer les situations difficiles et les conflits',
      'Conduire des entretiens managériaux efficaces',
    ],
    program: [
      { module: 'Jour 1 — Fondamentaux du management', topics: ['Les styles de management', 'Diagnostic de son style', 'Adapter son management', 'Délégation efficace'] },
      { module: 'Jour 2 — Leadership et motivation', topics: ['Théories de la motivation', 'Développer son leadership', 'Communication managériale', 'Feedback constructif'] },
      { module: 'Jour 3 — Situations complexes', topics: ['Gestion des conflits', 'Entretiens difficiles', 'Management à distance', 'Plan d\'action personnel'] },
    ],
    prerequisites: 'Avoir une expérience en management ou être nouvellement promu manager',
    maxParticipants: 12,
    currentParticipants: 8,
    instructor: 'Formateur certifié SFORHET',
  },
  {
    id: 'form-002',
    title: 'Communication Professionnelle & Prise de Parole',
    category: 'Communication professionnelle',
    shortDescription: 'Améliorez votre communication orale et écrite pour gagner en impact dans votre environnement professionnel.',
    fullDescription: 'Maîtrisez les techniques de communication professionnelle pour vous exprimer avec clarté et conviction, rédiger des documents impactants et gérer votre image professionnelle.',
    duration: '2 jours (14h)',
    format: 'Présentiel',
    location: 'Casablanca',
    nextDate: '22 oct. 2025',
    price: 'Sur devis',
    ofpptFinancing: true,
    status: 'Disponible',
    level: 'Tous niveaux',
    targetAudience: 'Tout professionnel souhaitant améliorer sa communication',
    objectives: [
      'Structurer et présenter ses idées avec clarté',
      'Maîtriser la communication non verbale',
      'Rédiger des emails et rapports professionnels efficaces',
      'Gérer le stress et les émotions en situation de communication',
    ],
    program: [
      { module: 'Jour 1 — Communication orale', topics: ['Les fondamentaux', 'Prise de parole en public', 'Communication non verbale', 'Écoute active'] },
      { module: 'Jour 2 — Communication écrite & assertivité', topics: ['Rédaction professionnelle', 'Email et rapports', 'Communication assertive', 'Mise en pratique'] },
    ],
    prerequisites: 'Aucun prérequis',
    maxParticipants: 15,
    currentParticipants: 11,
    instructor: 'Formatrice certifiée en communication',
  },
  {
    id: 'form-003',
    title: 'Anglais Professionnel — Niveau Intermédiaire',
    category: 'Langues',
    shortDescription: 'Renforcez votre anglais professionnel pour les réunions, négociations et correspondances d\'affaires.',
    fullDescription: 'Programme intensif d\'anglais des affaires conçu pour les professionnels ayant une base en anglais et souhaitant progresser rapidement dans un contexte professionnel.',
    duration: '4 semaines (40h)',
    format: 'Hybride',
    location: 'Casablanca / En ligne',
    nextDate: '06 oct. 2025',
    price: 'Sur devis',
    ofpptFinancing: true,
    status: 'Disponible',
    level: 'Intermédiaire (B1-B2)',
    targetAudience: 'Professionnels ayant besoin de l\'anglais dans leur travail',
    objectives: [
      'Conduire des réunions et présentations en anglais',
      'Rédiger des emails et rapports professionnels',
      'Maîtriser le vocabulaire sectoriel',
      'Gagner en aisance à l\'oral',
    ],
    program: [
      { module: 'Semaine 1-2 — Oral professionnel', topics: ['Réunions et présentations', 'Négociation', 'Téléphone et visioconférence'] },
      { module: 'Semaine 3-4 — Écrit et approfondissement', topics: ['Rédaction professionnelle', 'Vocabulaire sectoriel', 'Simulation d\'entretiens'] },
    ],
    prerequisites: 'Niveau A2 minimum en anglais',
    maxParticipants: 10,
    currentParticipants: 10,
    instructor: 'Formateur natif certifié',
  },
  {
    id: 'form-004',
    title: 'QHSE — Qualité, Hygiène, Sécurité & Environnement',
    category: 'QHSE',
    shortDescription: 'Maîtrisez les normes QHSE et leur mise en œuvre opérationnelle dans votre entreprise.',
    fullDescription: 'Formation complète sur les référentiels QHSE (ISO 9001, ISO 14001, ISO 45001) et leur application pratique en entreprise. Idéale pour les responsables QHSE et les auditeurs internes.',
    duration: '3 jours (21h)',
    format: 'Présentiel',
    location: 'Casablanca',
    nextDate: '20 oct. 2025',
    price: 'Sur devis',
    ofpptFinancing: true,
    status: 'Disponible',
    level: 'Intermédiaire à avancé',
    targetAudience: 'Responsables QHSE, auditeurs internes, directeurs de production',
    objectives: [
      'Comprendre les exigences des normes ISO 9001, 14001 et 45001',
      'Mettre en place un système de management intégré',
      'Réaliser des audits internes',
      'Gérer les non-conformités et les actions correctives',
    ],
    program: [
      { module: 'Jour 1 — Fondamentaux QHSE', topics: ['Référentiels et normes', 'SMQ, SME, SMS', 'Analyse des risques'] },
      { module: 'Jour 2 — Mise en œuvre', topics: ['Documentation', 'Processus et procédures', 'Indicateurs de performance'] },
      { module: 'Jour 3 — Audit et amélioration', topics: ['Techniques d\'audit', 'Gestion des non-conformités', 'Amélioration continue'] },
    ],
    prerequisites: 'Connaissance de base en management de la qualité souhaitée',
    maxParticipants: 12,
    currentParticipants: 5,
    instructor: 'Auditeur IRCA certifié',
  },
  {
    id: 'form-005',
    title: 'Soft Skills — Intelligence Émotionnelle & Gestion du Stress',
    category: 'Soft Skills',
    shortDescription: 'Développez votre intelligence émotionnelle et apprenez à gérer le stress pour une performance durable.',
    fullDescription: 'Cette formation vous aide à mieux vous connaître, gérer vos émotions et celles des autres, et développer des stratégies efficaces face au stress professionnel.',
    duration: '2 jours (14h)',
    format: 'Présentiel',
    location: 'Casablanca',
    nextDate: '28 oct. 2025',
    price: 'Sur devis',
    ofpptFinancing: true,
    status: 'Disponible',
    level: 'Tous niveaux',
    targetAudience: 'Tout professionnel souhaitant développer ses soft skills',
    objectives: [
      'Comprendre et développer son intelligence émotionnelle',
      'Identifier ses sources de stress et y répondre efficacement',
      'Améliorer ses relations professionnelles',
      'Maintenir une performance durable sous pression',
    ],
    program: [
      { module: 'Jour 1 — Intelligence émotionnelle', topics: ['Les 4 composantes de l\'IE', 'Connaissance de soi', 'Empathie et relations', 'Gestion des émotions'] },
      { module: 'Jour 2 — Gestion du stress', topics: ['Mécanismes du stress', 'Techniques de relaxation', 'Résilience professionnelle', 'Plan d\'action'] },
    ],
    prerequisites: 'Aucun prérequis',
    maxParticipants: 15,
    currentParticipants: 7,
    instructor: 'Coach certifié ICF',
  },
  {
    id: 'form-006',
    title: 'Revenue Management Hôtelier',
    category: 'Formations métiers',
    shortDescription: 'Maîtrisez les techniques de Revenue Management pour optimiser le revenu de votre établissement hôtelier.',
    fullDescription: 'Programme spécialisé destiné aux professionnels de l\'hôtellerie pour maîtriser les outils et stratégies du Revenue Management. Formation développée en partenariat avec les acteurs du secteur touristique marocain.',
    duration: '2 jours (16h)',
    format: 'Présentiel',
    location: 'Casablanca',
    nextDate: '10 oct. 2025',
    price: 'Sur devis',
    ofpptFinancing: true,
    status: 'Disponible',
    level: 'Intermédiaire',
    targetAudience: 'Directeurs hôteliers, Revenue Managers, chefs de réception',
    objectives: [
      'Comprendre les fondamentaux du Revenue Management',
      'Analyser les données de performance hôtelière (RevPAR, ADR, taux d\'occupation)',
      'Mettre en place une stratégie tarifaire dynamique',
      'Utiliser les OTA et les canaux de distribution',
    ],
    program: [
      { module: 'Jour 1 — Fondamentaux', topics: ['Indicateurs clés (KPI)', 'Segmentation client', 'Stratégie tarifaire', 'Outils de RM'] },
      { module: 'Jour 2 — Application pratique', topics: ['Cas pratiques', 'OTA et distribution', 'Prévisions et budgets', 'Simulation'] },
    ],
    prerequisites: 'Expérience dans le secteur hôtelier recommandée',
    maxParticipants: 10,
    currentParticipants: 8,
    instructor: 'Expert Revenue Management — Partenaire SFORHET',
  },
  {
    id: 'form-007',
    title: 'Techniques de Vente & Négociation Commerciale',
    category: 'Commerce & Vente',
    shortDescription: 'Perfectionnez vos techniques de vente et de négociation pour atteindre et dépasser vos objectifs commerciaux.',
    fullDescription: 'Formation pratique et intensive sur les meilleures techniques de vente et de négociation. Vous repartirez avec une boîte à outils complète pour conclure plus de ventes et fidéliser vos clients.',
    duration: '2 jours (14h)',
    format: 'Présentiel',
    location: 'Casablanca',
    nextDate: '03 nov. 2025',
    price: 'Sur devis',
    ofpptFinancing: true,
    status: 'Bientôt',
    level: 'Tous niveaux',
    targetAudience: 'Commerciaux, chargés d\'affaires, account managers',
    objectives: [
      'Maîtriser les étapes du cycle de vente',
      'Développer des techniques de négociation efficaces',
      'Traiter les objections avec assertivité',
      'Fidéliser sa clientèle et développer son portefeuille',
    ],
    program: [
      { module: 'Jour 1 — Techniques de vente', topics: ['Prospection et qualification', 'Découverte des besoins', 'Argumentation', 'Traitement des objections'] },
      { module: 'Jour 2 — Négociation', topics: ['Stratégies de négociation', 'Techniques de closing', 'Gestion de la relation client', 'Jeux de rôle'] },
    ],
    prerequisites: 'Une expérience commerciale est un plus',
    maxParticipants: 12,
    currentParticipants: 2,
    instructor: 'Formateur expert en vente B2B/B2C',
  },
  {
    id: 'form-008',
    title: 'Bureautique Avancée — Excel & PowerPoint',
    category: 'Bureautique',
    shortDescription: 'Maîtrisez les fonctionnalités avancées d\'Excel et PowerPoint pour gagner en productivité.',
    fullDescription: 'Formation pratique sur les outils bureautiques Microsoft les plus utilisés en entreprise. Apprenez à créer des tableaux de bord Excel dynamiques et des présentations PowerPoint percutantes.',
    duration: '2 jours (14h)',
    format: 'Présentiel',
    location: 'Casablanca',
    nextDate: '17 nov. 2025',
    price: 'Sur devis',
    ofpptFinancing: true,
    status: 'Bientôt',
    level: 'Intermédiaire',
    targetAudience: 'Tout professionnel utilisant Excel et PowerPoint',
    objectives: [
      'Créer des tableaux de bord et des graphiques avancés sous Excel',
      'Maîtriser les formules complexes et les tableaux croisés dynamiques',
      'Concevoir des présentations PowerPoint professionnelles',
      'Automatiser des tâches répétitives',
    ],
    program: [
      { module: 'Jour 1 — Excel avancé', topics: ['Formules avancées', 'Tableaux croisés dynamiques', 'Graphiques et dashboards', 'Macros de base'] },
      { module: 'Jour 2 — PowerPoint professionnel', topics: ['Design et mise en page', 'Animations et transitions', 'Infographies', 'Présentation impactante'] },
    ],
    prerequisites: 'Maîtrise des bases d\'Excel et PowerPoint',
    maxParticipants: 12,
    currentParticipants: 4,
    instructor: 'Expert Microsoft Office certifié',
  },
];

export const categories = ['Toutes les catégories', 'Management', 'Communication professionnelle', 'Soft Skills', 'Langues', 'Commerce & Vente', 'QHSE', 'Bureautique', 'Formations métiers'];
export const formats: FormationFormat[] = ['Présentiel', 'Distanciel', 'Hybride'];