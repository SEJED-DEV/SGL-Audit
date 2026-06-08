import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { Mail, Phone, MapPin, ArrowRight, Globe } from 'lucide-react'

interface FooterProps {
  lang: string
  dict: any
}

export function Footer({ lang, dict }: FooterProps) {
  return (
    <footer className="relative bg-slate-950 text-slate-300 dark:bg-black pt-20 pb-10 overflow-hidden">
      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-12 lg:col-span-4">
            <Link href={`/${lang}`} className="inline-block mb-8">
              <Image
                src="/logo.png"
                alt={`${siteConfig.name} Logo`}
                width={160}
                height={53}
                className="h-14 w-auto object-contain bg-white rounded-2xl p-2 shadow-sm"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed mb-2 max-w-sm">
              {siteConfig.description}
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.social?.linkedin || '#'} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Navigation</h3>
            <ul className="space-y-4">
              {siteConfig.navigation.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={`/${lang}${item.href}`} 
                    className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.name[lang as keyof typeof item.name] || item.name['fr']}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Expertise Links */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Nos Expertises</h3>
            <ul className="space-y-4">
              <li>
                <Link href={`/${lang}/nos-expertises/expertise-comptable`} className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Expertise Comptable
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/nos-expertises/paie-social`} className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Paie & Social
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/nos-expertises/juridique-fiscal`} className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Juridique & Fiscal
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/investir-en-tunisie`} className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Création d'entreprise
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Col */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 text-blue-500">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs text-slate-500 uppercase tracking-wider mb-1">Email</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 text-blue-500">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs text-slate-500 uppercase tracking-wider mb-1">Site web</span>
                  <a href={siteConfig.website} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                    sglaudit.tn
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 text-blue-500">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs text-slate-500 uppercase tracking-wider mb-1">Téléphone / WhatsApp</span>
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                    {siteConfig.contact.phone}
                  </a>
                  <a href={`tel:${siteConfig.contact.phone2.replace(/\s+/g, '')}`} className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                    {siteConfig.contact.phone2}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 text-blue-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs text-slate-500 uppercase tracking-wider mb-1">Adresse</span>
                  <a href={siteConfig.location.googleMapsLink} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors text-sm leading-relaxed">
                    {siteConfig.location.address}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <Link href={`/${lang}/mentions-legales`} className="hover:text-slate-300 transition-colors">Mentions légales</Link>
            <Link href={`/${lang}/politique-confidentialite`} className="hover:text-slate-300 transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
        
      </div>
    </footer>
  )
}
