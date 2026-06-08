'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { siteConfig } from '@/config/site'
import { Mail, Phone, MapPin, ArrowRight, Globe, ChevronUp, MessageCircle } from 'lucide-react'

interface FooterProps {
  lang: string
  dict: any
}

export function Footer({ lang, dict }: FooterProps) {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const websiteDisplay = siteConfig.website.replace(/^https?:\/\//, '').replace(/\/$/, '')

  return (
    <footer className="relative bg-slate-950 text-slate-300 dark:bg-black pt-20 pb-6 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
      <div className="absolute top-0 left-[30%] w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-[10%] w-60 h-60 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 mb-14">
          <div className="md:col-span-12 lg:col-span-4">
            <Link href={`/${lang}`} className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt={`${siteConfig.name} Logo`}
                width={160}
                height={53}
                loading="lazy"
                className="h-12 w-auto object-contain bg-white rounded-xl p-1.5 shadow-sm"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed mb-3 max-w-sm text-sm">
              {siteConfig.description}
            </p>
            <p className="text-slate-500 text-xs leading-relaxed mb-7 max-w-sm">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-3">
              <a href={siteConfig.social?.linkedin || '#'} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href={siteConfig.social?.facebook || '#'} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300">
                <span className="sr-only">WhatsApp</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-white font-semibold mb-5 tracking-wide uppercase text-xs">{lang === 'fr' ? 'Navigation' : 'Navigation'}</h3>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={`/${lang}${item.href}`}
                    className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.name[lang as keyof typeof item.name] || item.name['fr']}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-white font-semibold mb-5 tracking-wide uppercase text-xs">{lang === 'fr' ? 'Nos Expertises' : 'Our Expertise'}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}/nos-expertises/expertise-comptable`} className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center group text-sm">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  {lang === 'fr' ? 'Expertise Comptable' : 'Accounting'}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/nos-expertises/paie-social`} className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center group text-sm">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  {lang === 'fr' ? 'Paie & Social' : 'Payroll & Social'}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/nos-expertises/juridique-fiscal`} className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center group text-sm">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  {lang === 'fr' ? 'Juridique & Fiscal' : 'Legal & Tax'}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/investir-en-tunisie`} className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center group text-sm">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  {lang === 'fr' ? "Création d'entreprise" : 'Business Creation'}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-white font-semibold mb-5 tracking-wide uppercase text-xs">{lang === 'fr' ? 'Contact' : 'Contact'}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center flex-shrink-0 text-blue-400 mt-0.5">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">{lang === 'fr' ? 'Email' : 'Email'}</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center flex-shrink-0 text-blue-400 mt-0.5">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">{lang === 'fr' ? 'Site web' : 'Website'}</span>
                  <a href={siteConfig.website} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                    {websiteDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center flex-shrink-0 text-blue-400 mt-0.5">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">{lang === 'fr' ? 'Téléphone' : 'Phone'}</span>
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                    {siteConfig.contact.phone}
                  </a>
                  <a href={`tel:${siteConfig.contact.phone2.replace(/\s+/g, '')}`} className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                    {siteConfig.contact.phone2}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center flex-shrink-0 text-blue-400 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">{lang === 'fr' ? 'Adresse' : 'Address'}</span>
                  <a href={siteConfig.location.googleMapsLink} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors text-sm leading-relaxed">
                    {siteConfig.location.address}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-10 p-4 rounded-2xl bg-gradient-to-r from-green-600/10 to-emerald-600/5 border border-green-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-200">{lang === 'fr' ? 'Contactez-nous sur WhatsApp' : 'Contact us on WhatsApp'}</p>
              <p className="text-xs text-slate-500">{siteConfig.contact.whatsapp}</p>
            </div>
          </div>
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold rounded-xl transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            {lang === 'fr' ? 'Discuter maintenant' : 'Chat now'}
          </a>
        </div>

        <div className="pt-6 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-slate-500">
            <span>&copy; {new Date().getFullYear()} {siteConfig.name}. {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</span>
            <span className="hidden sm:inline text-slate-700">·</span>
            <span>
              {lang === 'fr' ? 'Réalisé par' : 'Made by'}{' '}
              <a href={siteConfig.credits.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">
                {siteConfig.credits.madeBy}
              </a>
            </span>
          </div>
          <div className="flex items-center gap-5 text-xs">
            <Link href={`/${lang}/mentions-legales`} className="text-slate-500 hover:text-slate-300 transition-colors">
              {lang === 'fr' ? 'Mentions légales' : 'Legal notices'}
            </Link>
            <span className="text-slate-700">·</span>
            <Link href={`/${lang}/politique-confidentialite`} className="text-slate-500 hover:text-slate-300 transition-colors">
              {lang === 'fr' ? 'Politique de confidentialité' : 'Privacy policy'}
            </Link>
          </div>
        </div>
      </div>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:bg-blue-500 transition-all hover:scale-110 active:scale-95"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  )
}
