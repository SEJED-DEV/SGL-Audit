import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSwitcher } from './LanguageSwitcher'

interface HeaderProps {
  lang: string
  dict: any
}

export function Header({ lang, dict }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-black/80 dark:border-zinc-800">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="SGL Audit Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain dark:invert"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href={`/${lang}#about`} className="text-sm font-medium hover:text-accent">
              {dict.navigation.about}
            </Link>
            <Link href={`/${lang}#services`} className="text-sm font-medium hover:text-accent">
              {dict.navigation.services}
            </Link>
            <Link href={`/${lang}/blogs`} className="text-sm font-medium hover:text-accent">
              {dict.navigation.blogs}
            </Link>
            <Link href={`/${lang}#contact`} className="text-sm font-medium hover:text-accent">
              {dict.navigation.contact}
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            href={`/${lang}#contact`}
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {dict.hero.cta}
          </Link>
        </div>
      </div>
    </header>
  )
}
