'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, FileText } from 'lucide-react'

const articlesData = {
  fr: [
    {
      title: "Créer son entreprise en Tunisie : Guide complet 2026",
      excerpt: "Toutes les étapes pour créer votre entreprise en Tunisie : choix du statut, formalités, fiscalité et délais à respecter.",
      date: "15 Mai 2026",
      slug: "/blogs/creer-entreprise-tunisie-guide"
    },
    {
      title: "Optimisation fiscale pour les freelances en Tunisie",
      excerpt: "Découvrez les dispositifs fiscaux avantageux pour les travailleurs indépendants et freelances en Tunisie.",
      date: "2 Avril 2026",
      slug: "/blogs/optimisation-fiscale-freelance-tunisie"
    },
    {
      title: "Investir en Tunisie : opportunités pour les non-résidents",
      excerpt: "Pourquoi la Tunisie attire de plus en plus d'investisseurs étrangers et comment s'y implanter facilement.",
      date: "18 Mars 2026",
      slug: "/blogs/investir-tunisie-non-residents"
    }
  ],
  en: [
    {
      title: "Creating your company in Tunisia: Complete Guide 2026",
      excerpt: "All the steps to create your company in Tunisia: choice of legal status, formalities, taxation and deadlines.",
      date: "May 15, 2026",
      slug: "/blogs/creer-entreprise-tunisie-guide"
    },
    {
      title: "Tax optimization for freelancers in Tunisia",
      excerpt: "Discover advantageous tax provisions for self-employed workers and freelancers in Tunisia.",
      date: "April 2, 2026",
      slug: "/blogs/optimisation-fiscale-freelance-tunisie"
    },
    {
      title: "Investing in Tunisia: opportunities for non-residents",
      excerpt: "Why Tunisia is attracting more and more foreign investors and how to establish yourself easily.",
      date: "March 18, 2026",
      slug: "/blogs/investir-tunisie-non-residents"
    }
  ]
}

export function BlogSection({ lang }: { lang?: string }) {
  const isFr = lang === 'fr'
  const articles = articlesData[isFr ? 'fr' : 'en']

  return (
    <section className="relative py-32 bg-white dark:bg-black overflow-hidden">
      <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/3 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
              <FileText className="w-4 h-4" />
              {isFr ? 'Actualités' : 'News'}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
              {isFr ? 'Derniers articles' : 'Latest articles'}
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden sm:block"
          >
            <Link
              href={`/${lang}/blogs`}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 font-semibold transition-colors"
            >
              {isFr ? 'Voir tous les articles' : 'View all articles'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/${lang}${article.slug}`}
                className="group block p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-200/50 dark:border-zinc-800 hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1 text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all translate-x-[-4px] group-hover:translate-x-0">
                  {isFr ? 'Lire plus' : 'Read more'} <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center sm:hidden"
        >
          <Link
            href={`/${lang}/blogs`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 font-semibold transition-colors"
          >
            {isFr ? 'Voir tous les articles' : 'View all articles'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
