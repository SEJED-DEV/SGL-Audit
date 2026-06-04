import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSwitcher } from './LanguageSwitcher'
import { siteConfig } from '@/config/site'
import { Mail, Phone, MessageCircle } from 'lucide-react'

interface HeaderProps {
  lang: string
  dict: any
}

export function Header({ lang, dict }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full flex flex-col">
      {/* Top Bar for Contact Details */}
      <div className="hidden lg:flex items-center justify-between px-6 py-2 bg-slate-900 text-slate-200 text-xs font-medium">
        <div className="flex items-center gap-6">
          <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="h-3 w-3" />
            {siteConfig.contact.email}
          </a>
          <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="h-3 w-3" />
            {siteConfig.contact.phone}
          </a>
          <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
            <MessageCircle className="h-3 w-3" />
            {siteConfig.contact.whatsapp}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b bg-white/80 backdrop-blur-md dark:bg-black/80 dark:border-zinc-800 transition-all duration-300 shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-12">
            <Link href={`/${lang}`} className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt={`${siteConfig.name} Logo`}
                width={140}
                height={46}
                className="h-12 w-auto object-contain dark:invert transition-transform hover:scale-105"
              />
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              {siteConfig.navigation.map((item, index) => (
                <Link key={index} href={`/${lang}${item.href}`} className="text-[15px] font-semibold text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                  {item.name[lang as keyof typeof item.name] || item.name['fr']}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="lg:hidden flex items-center gap-2">
              <LanguageSwitcher />
            </div>
            <ThemeToggle />
            <Link
              href={`/${lang}#contact`}
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
            >
              {dict.hero?.cta || 'Devis gratuit'}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
