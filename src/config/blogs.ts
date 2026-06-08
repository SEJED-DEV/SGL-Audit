export interface BlogPost {
  id: string
  slug: string
  title: {
    en: string
    fr: string
  }
  excerpt: {
    en: string
    fr: string
  }
  content: {
    en: string
    fr: string
  }
  date: string
  author: string
}

export const blogs: BlogPost[] = [
  {
    id: '1',
    slug: 'optimiser-fiscalite-2024',
    title: {
      fr: 'Comment optimiser votre fiscalité en Tunisie en 2024 ?',
      en: 'How to optimize your taxes in Tunisia in 2024?',
    },
    excerpt: {
      fr: 'Découvrez les meilleures stratégies pour réduire votre charge fiscale légalement en Tunisie.',
      en: 'Discover the best strategies to legally reduce your tax burden in Tunisia.',
    },
    content: {
      fr: `La fiscalité est un enjeu majeur pour toute entreprise implantée en Tunisie. En 2024, plusieurs dispositifs permettent d'optimiser votre imposition tout en restant en conformité avec la législation tunisienne.

## Déductions fiscales et abattements

La législation fiscale tunisienne prévoit plusieurs déductions et abattements pour les entreprises. Les investissements dans les zones de développement régional peuvent bénéficier d'une réduction significative de l'impôt sur les sociétés. De même, les entreprises exportatrices bénéficient d'une exonération totale de l'IS pendant les 10 premières années d'activité.

## Crédits d'impôt et incitations

La Tunisie offre divers crédits d'impôt pour encourager l'innovation et l'investissement. Le crédit d'impôt recherche permet aux entreprises de déduire une partie de leurs dépenses en R&D. Les investissements dans les technologies vertes et les énergies renouvelables ouvrent également droit à des avantages fiscaux.

## Gestion de la TVA

Une gestion optimale de la TVA est essentielle pour la trésorerie de votre entreprise. Le remboursement des crédits de TVA, notamment pour les entreprises exportatrices, peut être accéléré grâce à une comptabilité bien tenue et des déclarations conformes.

## Planification fiscale stratégique

Au-delà des dispositifs légaux, une planification fiscale stratégique permet d'anticiper et d'optimiser votre charge fiscale. Cela passe par le choix de la structure juridique adaptée, la gestion des amortissements, et l'optimisation de la rémunération des dirigeants.

Notre cabinet vous accompagne dans l'élaboration d'une stratégie fiscale sur mesure, en parfaite conformité avec la réglementation tunisienne.`,
      en: `Taxation is a major issue for any business established in Tunisia. In 2024, several mechanisms allow you to optimize your taxation while remaining compliant with Tunisian legislation.

## Tax Deductions and Allowances

Tunisian tax law provides several deductions and allowances for businesses. Investments in regional development zones can benefit from a significant reduction in corporate tax. Similarly, exporting companies benefit from a total exemption from corporate tax for the first 10 years of activity.

## Tax Credits and Incentives

Tunisia offers various tax credits to encourage innovation and investment. The research tax credit allows companies to deduct part of their R&D expenses. Investments in green technologies and renewable energy also qualify for tax benefits.

## VAT Management

Optimal VAT management is essential for your company's cash flow. VAT credit refunds, particularly for exporting companies, can be accelerated through well-maintained accounting and compliant declarations.

## Strategic Tax Planning

Beyond legal mechanisms, strategic tax planning allows you to anticipate and optimize your tax burden. This involves choosing the appropriate legal structure, managing depreciation, and optimizing executive compensation.

Our firm assists you in developing a tailored tax strategy, in full compliance with Tunisian regulations.`,
    },
    date: '2024-05-15',
    author: 'SGL Audit Team',
  },
  {
    id: '2',
    slug: 'digitalisation-comptable',
    title: {
      fr: 'La digitalisation de la comptabilité en Tunisie : un levier de croissance',
      en: 'Digitalization of accounting in Tunisia: a growth lever',
    },
    excerpt: {
      fr: 'Pourquoi et comment passer au tout-numérique pour votre gestion comptable en Tunisie.',
      en: 'Why and how to go all-digital for your accounting management in Tunisia.',
    },
    content: {
      fr: `La transformation numérique de la comptabilité n'est plus une option mais une nécessité pour les entreprises tunisiennes qui souhaitent gagner en productivité et en compétitivité.

## Les avantages du numérique

La digitalisation comptable permet un gain de temps considérable dans la saisie et le traitement des données. Grâce aux outils modernes, vos factures, relevés bancaires et pièces comptables sont automatiquement importés et classés. Fini la saisie manuelle et les erreurs de transcription.

## Conformité et sécurité

Les solutions numériques garantissent une meilleure conformité avec les obligations fiscales tunisiennes. La télé-déclaration et le paiement en ligne des impôts sont désormais obligatoires pour de nombreuses entreprises. Nos outils assurent la sécurisation et la sauvegarde de vos données comptables.

## Pilotage en temps réel

L'un des principaux avantages de la digitalisation est la possibilité de suivre votre activité en temps réel. Tableaux de bord, indicateurs de performance, prévisions de trésorerie : vous disposez d'une vision claire et actualisée de la santé financière de votre entreprise.

## Accompagnement sur mesure

Notre cabinet vous aide à choisir et déployer les outils digitaux adaptés à votre activité. Nous formons vos équipes et assurons une transition en douceur vers le tout-numérique, avec un accompagnement personnalisé à chaque étape.

La digitalisation comptable est un investissement rentable qui vous permet de vous concentrer sur l'essentiel : le développement de votre activité.`,
      en: `The digital transformation of accounting is no longer an option but a necessity for Tunisian companies wishing to gain productivity and competitiveness.

## Benefits of Digitalization

Digital accounting saves considerable time in data entry and processing. With modern tools, your invoices, bank statements and accounting documents are automatically imported and classified. No more manual entry and transcription errors.

## Compliance and Security

Digital solutions ensure better compliance with Tunisian tax obligations. E-filing and online payment of taxes are now mandatory for many companies. Our tools ensure the security and backup of your accounting data.

## Real-time Monitoring

One of the main advantages of digitalization is the ability to track your activity in real time. Dashboards, performance indicators, cash flow forecasts: you have a clear and up-to-date view of your company's financial health.

## Tailored Support

Our firm helps you choose and deploy the digital tools adapted to your activity. We train your teams and ensure a smooth transition to all-digital, with personalized support at every stage.

Digital accounting is a profitable investment that allows you to focus on what matters: growing your business.`,
    },
    date: '2024-04-20',
    author: 'SGL Audit Team',
  },
  {
    id: '3',
    slug: 'creer-entreprise-tunisie-guide',
    title: {
      fr: 'Créer son entreprise en Tunisie : Guide complet 2025',
      en: 'Creating your company in Tunisia: Complete Guide 2025',
    },
    excerpt: {
      fr: 'Toutes les étapes pour créer votre entreprise en Tunisie : choix du statut, formalités, fiscalité et délais.',
      en: 'All the steps to create your company in Tunisia: choice of legal status, formalities, taxation and deadlines.',
    },
    content: {
      fr: `Créer une entreprise en Tunisie est une démarche accessible mais qui nécessite une bonne préparation. Voici un guide complet des étapes à suivre.

## Choisir le statut juridique adapté

Le choix du statut juridique est la première décision stratégique. En Tunisie, les formes les plus courantes sont :
- SARL (Société à Responsabilité Limitée) : idéale pour les PME, capital minimum de 1 000 TND
- SARL Unipersonnelle : parfaite pour les entrepreneurs individuels
- SA (Société Anonyme) : adaptée aux grandes entreprises, capital minimum de 5 000 TND
- Société Individuelle : pour les auto-entrepreneurs et professions libérales

## Les formalités de création

Les étapes administratives comprennent :
- La rédaction des statuts par un notaire ou un expert-comptable
- Le dépôt du capital social dans une banque
- L'immatriculation au registre du commerce (RNE)
- L'obtention de la carte d'identification fiscale
- L'affiliation à la CNSS pour le gérant et les employés

## Régime fiscal applicable

Le régime fiscal dépend de la forme juridique choisie. Les entreprises exportatrices bénéficient d'exonérations totales d'IS pendant 10 ans. Les entreprises totalement exportatrices sont également exonérées de TVA et de droits de douane sur les équipements importés.

## Accompagnement par notre cabinet

Notre cabinet vous accompagne de A à Z dans la création de votre entreprise à Tunis, depuis l'étude de faisabilité jusqu'à l'immatriculation finale, en passant par le choix de la structure optimale et l'optimisation fiscale.`,
      en: `Creating a company in Tunisia is an accessible process but requires good preparation. Here is a complete guide to the steps to follow.

## Choose the Right Legal Status

Choosing the legal status is the first strategic decision. In Tunisia, the most common forms are:
- LLC (Limited Liability Company): ideal for SMEs, minimum capital of 1,000 TND
- Single-member LLC: perfect for individual entrepreneurs
- Corporation (SA): suitable for large companies, minimum capital of 5,000 TND
- Individual Enterprise: for self-employed and liberal professions

## Incorporation Formalities

The administrative steps include:
- Drafting the articles of association by a notary or accountant
- Deposit of share capital in a bank
- Registration with the commercial register (RNE)
- Obtaining a tax identification card
- CNSS registration for the manager and employees

## Applicable Tax Regime

The tax regime depends on the chosen legal form. Exporting companies benefit from full corporate tax exemptions for 10 years. Fully exporting companies are also exempt from VAT and customs duties on imported equipment.

## Support from Our Firm

Our firm accompanies you from A to Z in creating your company in Tunis, from the feasibility study to final registration, including choosing the optimal structure and tax optimization.`,
    },
    date: '2025-01-15',
    author: 'SGL Audit Team',
  },
  {
    id: '4',
    slug: 'optimisation-fiscale-freelance-tunisie',
    title: {
      fr: 'Optimisation fiscale pour les freelances en Tunisie',
      en: 'Tax optimization for freelancers in Tunisia',
    },
    excerpt: {
      fr: 'Découvrez les dispositifs fiscaux avantageux pour les travailleurs indépendants et freelances en Tunisie.',
      en: 'Discover advantageous tax provisions for self-employed workers and freelancers in Tunisia.',
    },
    content: {
      fr: `Le statut de freelance ou de travailleur indépendant connaît un essor considérable en Tunisie. Une bonne optimisation fiscale permet de maximiser vos revenus tout en restant en conformité.

## Régimes fiscaux pour les indépendants

En Tunisie, les freelances peuvent opter pour différents régimes fiscaux :
- Le régime forfaitaire : simplifié, basé sur un chiffre d'affaires estimé
- Le régime réel : basé sur la comptabilité réelle, permet de déduire l'ensemble des charges professionnelles
- Le régime des bénéfices non commerciaux (BNC) : pour les professions libérales

## Charges déductibles

Les principales charges déductibles pour un freelance incluent :
- Les frais de formation professionnelle
- Les achats de matériel et équipements
- Les frais de déplacement et de représentation
- Les abonnements internet et téléphone
- Les frais de location de bureau ou d'espace de coworking
- Les cotisations à la CNSS et aux assurances

## TVA et déclarations

Les freelances dont le chiffre d'affaires dépasse 75 000 TND par an pour les prestations de services doivent collecter et déclarer la TVA. Une comptabilité rigoureuse est essentielle pour gérer ces obligations.

## Conseils d'expert

Notre cabinet vous aide à structurer votre activité freelance de manière optimale, à choisir le régime fiscal le plus avantageux et à tenir une comptabilité conforme tout en minimisant votre charge fiscale.`,
      en: `The freelance or self-employed status is experiencing considerable growth in Tunisia. Good tax optimization allows you to maximize your income while remaining compliant.

## Tax Regimes for Self-employed

In Tunisia, freelancers can opt for different tax regimes:
- The flat-rate regime: simplified, based on estimated turnover
- The actual regime: based on actual accounting, allows deduction of all professional expenses
- The non-commercial profits regime (BNC): for liberal professions

## Deductible Expenses

Main deductible expenses for a freelancer include:
- Professional training costs
- Equipment and supply purchases
- Travel and representation expenses
- Internet and telephone subscriptions
- Office or coworking space rental
- CNSS and insurance contributions

## VAT and Declarations

Freelancers whose turnover exceeds 75,000 TND per year for service providers must collect and declare VAT. Rigorous accounting is essential to manage these obligations.

## Expert Advice

Our firm helps you structure your freelance activity optimally, choose the most advantageous tax regime, and maintain compliant accounting while minimizing your tax burden.`,
    },
    date: '2025-02-20',
    author: 'SGL Audit Team',
  },
  {
    id: '5',
    slug: 'investir-tunisie-non-residents',
    title: {
      fr: 'Investir en Tunisie : opportunités pour les non-résidents',
      en: 'Investing in Tunisia: opportunities for non-residents',
    },
    excerpt: {
      fr: "Pourquoi la Tunisie attire de plus en plus d'investisseurs étrangers et comment s'y implanter facilement.",
      en: 'Why Tunisia is attracting more and more foreign investors and how to establish yourself easily.',
    },
    content: {
      fr: `La Tunisie offre un environnement attractif pour les investisseurs étrangers grâce à sa position géographique stratégique, sa main-d'œuvre qualifiée et ses incitations fiscales.

## Pourquoi investir en Tunisie ?

La Tunisie présente plusieurs atouts majeurs pour les investisseurs étrangers :
- Une position géographique privilégiée au cœur de la Méditerranée
- Une main-d'œuvre qualifiée et compétitive
- Des accords de libre-échange avec l'Union Européenne
- Un cadre incitatif pour les investissements étrangers
- Un coût de la vie et des affaires compétitif

## Dispositifs d'incitation

Le Code d'Incitation aux Investissements prévoit :
- Des avantages fiscaux pour les investissements dans les zones de développement régional
- Des primes à l'investissement prises en charge par l'État
- Des exonérations douanières sur les équipements importés
- Un régime fiscal préférentiel pour les entreprises exportatrices

## Création d'entreprise pour non-résidents

Les investisseurs étrangers peuvent créer une entreprise en Tunisie sans limitation de capital, sous réserve d'obtenir les autorisations nécessaires selon le secteur d'activité. La procédure est simplifiée grâce au guichet unique des formalités des entreprises.

## Accompagnement personnalisé

Notre cabinet propose un accompagnement complet pour les investisseurs non-résidents, de la création d'entreprise à la domiciliation, en passant par la représentation fiscale et la gestion comptable courante.`,
      en: `Tunisia offers an attractive environment for foreign investors thanks to its strategic geographic position, skilled workforce and tax incentives.

## Why Invest in Tunisia?

Tunisia has several major assets for foreign investors:
- A privileged geographical position in the heart of the Mediterranean
- A skilled and competitive workforce
- Free trade agreements with the European Union
- An incentive framework for foreign investment
- A competitive cost of living and doing business

## Incentive Mechanisms

The Investment Incentives Code provides for:
- Tax benefits for investments in regional development zones
- Investment subsidies covered by the State
- Customs exemptions on imported equipment
- Preferential tax regime for exporting companies

## Business Creation for Non-Residents

Foreign investors can create a company in Tunisia without capital limitation, subject to obtaining the necessary authorizations depending on the sector of activity. The procedure is simplified thanks to the one-stop shop for business formalities.

## Personalized Support

Our firm offers complete support for non-resident investors, from company creation to domiciliation, including tax representation and day-to-day accounting management.`,
    },
    date: '2025-03-18',
    author: 'SGL Audit Team',
  },
]
