"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const segments = pathname.split('/')
  const currentLang = segments[1]

  const switchLang = (lang: string) => {
    const newPathname = pathname.replace(`/${currentLang}`, `/${lang}`)
    return newPathname
  }

  return (
    <div className="flex gap-1 text-sm font-semibold">
      <Link
        href={switchLang('fr')}
        className={`px-2.5 py-1.5 rounded-lg transition-all ${
          currentLang === 'fr'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-zinc-800'
        }`}
      >
        FR
      </Link>
      <Link
        href={switchLang('en')}
        className={`px-2.5 py-1.5 rounded-lg transition-all ${
          currentLang === 'en'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-zinc-800'
        }`}
      >
        EN
      </Link>
    </div>
  )
}
