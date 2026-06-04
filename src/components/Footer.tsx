import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/config/site'

interface FooterProps {
  lang: string
  dict: any
}

export function Footer({ lang, dict }: FooterProps) {
  return (
    <footer className="border-t bg-slate-900 text-white dark:bg-black dark:border-zinc-800">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="col-span-1 md:col-span-2">
            <Link href={`/${lang}`} className="inline-block">
              <Image
                src="/logo.png"
                alt={`${siteConfig.name} Logo`}
                width={150}
                height={50}
                className="h-12 w-auto object-contain brightness-0 invert mb-6"
              />
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-6 uppercase text-sm tracking-wider text-slate-100">{dict.navigation.services}</h3>
            <ul className="space-y-4">
              <li><Link href={`/${lang}#expertises`} className="text-sm text-slate-400 hover:text-white transition-colors">{dict.services?.accounting || 'Expertise comptable'}</Link></li>
              <li><Link href={`/${lang}#expertises`} className="text-sm text-slate-400 hover:text-white transition-colors">{dict.services?.social || 'Social & Paie'}</Link></li>
              <li><Link href={`/${lang}#expertises`} className="text-sm text-slate-400 hover:text-white transition-colors">{dict.services?.legal || 'Juridique & Fiscal'}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6 uppercase text-sm tracking-wider text-slate-100">{dict.navigation.contact}</h3>
            <ul className="space-y-4">
              <li className="text-sm text-slate-400 flex flex-col">
                <span className="font-semibold text-slate-300">Email:</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">{siteConfig.contact.email}</a>
              </li>
              <li className="text-sm text-slate-400 flex flex-col">
                <span className="font-semibold text-slate-300">Téléphone:</span>
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">{siteConfig.contact.phone}</a>
              </li>
              <li className="text-sm text-slate-400 mt-4">
                <a href={siteConfig.location.googleMapsLink} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {siteConfig.location.address}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-800 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <div>
            Made by <a href={siteConfig.credits.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">{siteConfig.credits.madeBy}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
