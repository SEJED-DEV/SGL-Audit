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
    <div className="flex gap-2 text-sm font-medium">
      <Link
        href={switchLang('fr')}
        className={`px-2 py-1 rounded ${
          currentLang === 'fr' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent/20'
        }`}
      >
        FR
      </Link>
      <Link
        href={switchLang('en')}
        className={`px-2 py-1 rounded ${
          currentLang === 'en' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent/20'
        }`}
      >
        EN
      </Link>
    </div>
  )
}
