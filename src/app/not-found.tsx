'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function RootNotFound() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1]
  const isFr = lang === 'fr'

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-zinc-950 dark:to-zinc-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center px-4 max-w-lg relative z-10">
        <div className="text-[10rem] md:text-[12rem] font-black leading-none text-blue-600/10 dark:text-blue-600/15 mb-4 select-none tracking-tight">
          404
        </div>
        <div className="h-1 w-16 bg-blue-600 rounded-full mx-auto mb-8" />
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          {isFr ? 'Page introuvable' : 'Page not found'}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
          {isFr
            ? "La page que vous recherchez n'existe pas ou a été déplacée."
            : "The page you're looking for doesn't exist or has been moved."}
        </p>
        <p className="text-base text-slate-500 dark:text-slate-500 mb-10">
          Error 404
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${lang || 'fr'}`}
            className="inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 hover:shadow-xl hover:-translate-y-0.5"
          >
            {isFr ? "Retour à l'accueil" : 'Back to home'}
          </Link>
          <Link
            href={`/${lang || 'fr'}/contact`}
            className="inline-flex items-center justify-center px-6 py-3.5 bg-white dark:bg-zinc-900 text-slate-700 dark:text-slate-300 font-semibold rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm"
          >
            {isFr ? 'Nous contacter' : 'Contact us'}
          </Link>
        </div>
        <div className="mt-10 text-xs text-slate-400 dark:text-slate-600">
          Error 404
        </div>
      </div>
    </main>
  )
}
