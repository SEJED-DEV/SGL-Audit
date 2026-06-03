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
      fr: 'Comment optimiser votre fiscalité en 2024 ?',
      en: 'How to optimize your taxes in 2024?',
    },
    excerpt: {
      fr: 'Découvrez les meilleures stratégies pour réduire votre charge fiscale légalement cette année.',
      en: 'Discover the best strategies to legally reduce your tax burden this year.',
    },
    content: {
      fr: 'La fiscalité est un enjeu majeur pour toute entreprise. En 2024, plusieurs dispositifs permettent d\'optimiser votre imposition...',
      en: 'Taxation is a major issue for any business. In 2024, several mechanisms allow you to optimize your taxation...',
    },
    date: '2024-05-15',
    author: 'SGL Audit Team',
  },
  {
    id: '2',
    slug: 'digitalisation-comptable',
    title: {
      fr: 'La digitalisation de la comptabilité : un levier de croissance',
      en: 'Digitalization of accounting: a growth lever',
    },
    excerpt: {
      fr: 'Pourquoi et comment passer au tout-numérique pour votre gestion comptable.',
      en: 'Why and how to go all-digital for your accounting management.',
    },
    content: {
      fr: 'Le passage au numérique n\'est plus une option mais une nécessité pour gagner en productivité et en visibilité...',
      en: 'The transition to digital is no longer an option but a necessity to gain productivity and visibility...',
    },
    date: '2024-04-20',
    author: 'SGL Audit Team',
  },
]
