import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 flex items-center justify-center">
      <div className="text-center px-4 max-w-lg">
        <div className="text-9xl font-black text-blue-600/10 dark:text-blue-600/20 mb-4 select-none">
          404
        </div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Page introuvable
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <p className="text-base text-slate-500 dark:text-slate-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-white dark:bg-zinc-900 text-slate-700 dark:text-slate-300 font-semibold rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-blue-300 transition-colors"
          >
            Nous contacter / Contact us
          </Link>
        </div>
      </div>
    </main>
  )
}
