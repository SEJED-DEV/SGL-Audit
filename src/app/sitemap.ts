import type { MetadataRoute } from 'next'
import { blogs } from '@/config/blogs'

const BASE_URL = 'https://sglaudit.com'

const staticRoutes = [
  '',
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
  const entries: MetadataRoute.Sitemap = []

  for (const route of staticRoutes) {
    entries.push({
      url: `${BASE_URL}/fr${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : route === '/contact' ? 0.9 : 0.7,
    })
    entries.push({
      url: `${BASE_URL}/en${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 0.9 : route === '/contact' ? 0.8 : 0.6,
    })
  }

  const blogRoutes = ['/blog', '/blogs']
  for (const route of blogRoutes) {
    entries.push({
      url: `${BASE_URL}/fr${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })
    entries.push({
      url: `${BASE_URL}/en${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    })
  }

  for (const post of blogs) {
    entries.push({
      url: `${BASE_URL}/fr/blogs/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })
    entries.push({
      url: `${BASE_URL}/en/blogs/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })
  }

  return entries
}
