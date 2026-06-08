'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

const breadcrumbMap: Record<string, { fr: string; en: string }> = {
  '/nos-expertises': { fr: 'Nos Expertises', en: 'Our Expertise' },
  '/nos-expertises/expertise-comptable': { fr: 'Expertise Comptable', en: 'Accounting' },
  '/nos-expertises/paie-social': { fr: 'Paie & Social', en: 'Payroll & Social' },
  '/nos-expertises/juridique-fiscal': { fr: 'Juridique & Fiscal', en: 'Legal & Tax' },
  '/investir-en-tunisie': { fr: 'Investir en Tunisie', en: 'Invest in Tunisia' },
  '/formalites': { fr: 'Formalités', en: 'Formalities' },
  '/vos-metiers': { fr: 'Vos Métiers', en: 'Your Sectors' },
  '/nos-missions': { fr: 'Nos Missions', en: 'Our Missions' },
  '/contact': { fr: 'Contact', en: 'Contact' },
  '/blogs': { fr: 'Blog', en: 'Blog' },
}

export function PageBreadcrumb({ lang }: { lang: string }) {
  const pathname = usePathname()

  const pathWithoutLang = '/' + pathname.split('/').slice(2).join('/').replace(/\/$/, '') || '/'

  if (pathWithoutLang === '/' || pathWithoutLang === '') return null

  const segments = pathWithoutLang.split('/').filter(Boolean)
  if (segments[0] === 'blogs' && segments.length > 1) return null
  const breadcrumbs: { label: string; href?: string }[] = []

  let accumulated = ''
  for (const segment of segments) {
    accumulated += '/' + segment
    const entry = breadcrumbMap[accumulated]
    if (entry) {
      breadcrumbs.push({
        label: entry[lang as 'fr' | 'en'] || entry.fr,
        href: accumulated !== pathWithoutLang ? `/${lang}${accumulated}` : undefined,
      })
    } else {
      breadcrumbs.push({
        label: segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        href: accumulated !== pathWithoutLang ? `/${lang}${accumulated}` : undefined,
      })
    }
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-slate-50 dark:bg-zinc-900/50 border-b border-slate-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-1.5 py-3 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link
              href={`/${lang}`}
              className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1"
              itemProp="item"
            >
              <Home className="w-3.5 h-3.5" />
              <span itemProp="name" className="sr-only sm:not-sr-only">{lang === 'fr' ? 'Accueil' : 'Home'}</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          {breadcrumbs.map((item, index) => {
            const position = index + 2
            return (
              <li key={index} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 inline-block -mt-0.5" />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="ml-1.5 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                ) : (
                  <span className="ml-1.5 text-slate-900 dark:text-white font-medium" itemProp="name">
                    {item.label}
                  </span>
                )}
                <meta itemProp="position" content={String(position)} />
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
