'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Home, FileText, Briefcase, BookOpen, MessageCircle, Search } from 'lucide-react'

export default function RootNotFound() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1]
  const isFr = lang === 'fr'

  const suggestions = [
    { href: `/${lang}/nos-expertises`, label: isFr ? 'Nos Expertises' : 'Our Expertise', icon: Briefcase },
    { href: `/${lang}/nos-missions`, label: isFr ? 'Nos Missions' : 'Our Missions', icon: FileText },
    { href: `/${lang}/blogs`, label: isFr ? 'Blog' : 'Blog', icon: BookOpen },
    { href: `/${lang}/contact`, label: isFr ? 'Contact' : 'Contact', icon: MessageCircle },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-indigo-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-500/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="text-center px-4 max-w-lg relative z-10">
        <div className="relative mb-6 inline-block">
          <div className="text-[8rem] md:text-[10rem] font-black leading-none text-blue-600/10 dark:text-blue-600/15 select-none tracking-tight">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-12 h-12 text-blue-400/30" />
          </div>
        </div>

        <div className="h-0.5 w-12 bg-blue-600 rounded-full mx-auto mb-8" />

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          {isFr ? 'Page introuvable' : 'Page not found'}
        </h1>

        <p className="text-slate-500 dark:text-slate-400 mb-2 leading-relaxed">
          {isFr
            ? "La page que vous recherchez n'existe pas ou a été déplacée."
            : "The page you're looking for doesn't exist or has been moved."}
        </p>
        <p className="text-sm text-slate-400 dark:text-slate-600 mb-10 font-mono">
          {pathname}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
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

        <div className="border-t border-slate-100 dark:border-zinc-800 pt-8">
          <p className="text-xs font-medium uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-4">
            {isFr ? 'Pages suggérées' : 'Suggested pages'}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {suggestions.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-zinc-900 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-100 dark:border-zinc-800 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
