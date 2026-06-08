'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Home, FileText, Briefcase, BookOpen, MessageCircle, Search } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function RootNotFound() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1]
  const isFr = lang === 'fr'
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const suggestions = [
    { href: `/${lang}/nos-expertises`, label: isFr ? 'Nos Expertises' : 'Our Expertise', icon: Briefcase },
    { href: `/${lang}/nos-missions`, label: isFr ? 'Nos Missions' : 'Our Missions', icon: FileText },
    { href: `/${lang}/blogs`, label: isFr ? 'Blog' : 'Blog', icon: BookOpen },
    { href: `/${lang}/contact`, label: isFr ? 'Contact' : 'Contact', icon: MessageCircle },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.04),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="text-center px-4 max-w-lg relative z-10">
        <div className="relative mb-8 inline-block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-blue-500/5 animate-ping" style={{ animationDuration: '3s' }} />
          </div>
          <div className="relative flex items-center justify-center w-40 h-40 mx-auto">
            <div className="absolute inset-0 rounded-full border border-blue-500/10 animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="text-[7rem] md:text-[9rem] font-black leading-none text-blue-600/15 dark:text-blue-600/20 select-none tracking-tight">
              404
            </div>
          </div>
        </div>

        <div className="h-0.5 w-12 bg-blue-600 rounded-full mx-auto mb-8" />

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          {isFr ? 'Page introuvable' : 'Page not found'}
        </h1>

        <p className="text-slate-500 dark:text-slate-400 mb-3 leading-relaxed text-lg">
          {isFr
            ? "La page que vous recherchez n'existe pas ou a été déplacée."
            : "The page you're looking for doesn't exist or has been moved."}
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-lg bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <code className="text-xs text-slate-500 dark:text-slate-500 font-mono">{pathname}</code>
          <button
            onClick={() => navigator.clipboard?.writeText(window.location.href)}
            className="text-slate-400 hover:text-blue-600 transition-colors"
            title={isFr ? 'Copier le lien' : 'Copy link'}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <Link
            href={`/${lang || 'fr'}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <Home className="w-4 h-4" />
            {isFr ? "Retour à l'accueil" : 'Back to home'}
          </Link>
          <Link
            href={`/${lang || 'fr'}/contact`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-zinc-900 text-slate-700 dark:text-slate-300 font-semibold rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            {isFr ? 'Nous contacter' : 'Contact us'}
          </Link>
        </div>

        {mounted && (
          <div className="border-t border-slate-100 dark:border-zinc-800 pt-8">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-5">
              {isFr ? 'Ces pages pourraient vous intéresser' : 'You might be looking for'}
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {suggestions.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-zinc-900/80 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-100 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {item.label}
                    <ArrowLeft className="w-3 h-3 ml-0.5 -rotate-180 opacity-0 -mr-3 group-hover:opacity-100 group-hover:mr-0 transition-all" />
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
