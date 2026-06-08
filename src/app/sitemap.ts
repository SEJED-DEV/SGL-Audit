import type { MetadataRoute } from 'next'

const BASE_URL = 'https://sglaudit.com'

const routes = [
  '',
  '/blog',
  '/blogs',
  '/contact',
  '/formalites',
  '/investir-en-tunisie',
  '/mentions-legales',
  '/nos-expertises',
  '/nos-expertises/expertise-comptable',
  '/nos-expertises/juridique-fiscal',
  '/nos-expertises/paie-social',
  '/nos-missions',
  '/politique-confidentialite',
  '/vos-metiers',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { fr: 'fr', en: 'en' }

  return routes.map((route) => ({
    url: `${BASE_URL}/fr${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/contact' ? 0.9 : 0.8,
    alternates: {
      languages: {
        fr: `${BASE_URL}/fr${route}`,
        en: `${BASE_URL}/en${route}`,
      },
    },
  }))
}
