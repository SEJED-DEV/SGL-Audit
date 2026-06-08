import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  lang: string
}

export function Breadcrumb({ items, lang }: BreadcrumbProps) {
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
          {items.map((item, index) => (
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
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
