'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = {
  fr: [
    {
      name: 'Ahmed B.',
      role: 'Gérant de SARL',
      text: "Un cabinet compétent et réactif. Grâce à SGL Audit, j'ai pu lancer mon entreprise en toute sérénité. La création a été rapide et le suivi comptable est irréprochable.",
      rating: 5,
    },
    {
      name: 'Sarra K.',
      role: 'Freelance en marketing',
      text: 'Je recommande vivement SGL Audit pour leur professionnalisme et leur écoute. Ils ont su simplifier ma comptabilité et optimiser ma fiscalité. Un gain de temps considérable !',
      rating: 5,
    },
    {
      name: 'Mehdi T.',
      role: 'Investisseur étranger',
      text: "Service exceptionnel pour les non-résidents. L'équipe m'a accompagné dans toutes les démarches de création et de domiciliation à Tunis. Un partenaire de confiance.",
      rating: 5,
    },
    {
      name: 'Fatma L.',
      role: 'Dirigeante de PME',
      text: "Un accompagnement sur-mesure et des conseils stratégiques précieux. SGL Audit est bien plus qu'un expert-comptable, c'est un véritable partenaire pour la croissance de mon entreprise.",
      rating: 5,
    }
  ],
  en: [
    {
      name: 'Ahmed B.',
      role: 'LLC Manager',
      text: "A competent and responsive firm. Thanks to SGL Audit, I was able to launch my business with peace of mind. The setup was fast and the accounting follow-up is flawless.",
      rating: 5,
    },
    {
      name: 'Sarra K.',
      role: 'Marketing Freelancer',
      text: 'I highly recommend SGL Audit for their professionalism and attentiveness. They simplified my accounting and optimized my taxes. A considerable time saver!',
      rating: 5,
    },
    {
      name: 'Mehdi T.',
      role: 'Foreign Investor',
      text: "Exceptional service for non-residents. The team assisted me through all the creation and domiciliation procedures in Tunis. A trusted partner.",
      rating: 5,
    },
    {
      name: 'Fatma L.',
      role: 'SME Director',
      text: "Tailored support and valuable strategic advice. SGL Audit is much more than an accountant, it's a true partner for my company's growth.",
      rating: 5,
    }
  ]
}

export function Testimonials({ lang }: { lang?: string }) {
  const isFr = lang === 'fr'
  const items = testimonials[isFr ? 'fr' : 'en']
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? items.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === items.length - 1 ? 0 : c + 1))

  return (
    <section className="relative py-32 bg-slate-50 dark:bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {isFr ? 'Ce que disent nos clients' : 'What our clients say'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {isFr ? 'La satisfaction de nos clients est notre meilleure recommandation.' : 'Our clients\' satisfaction is our best recommendation.'}
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-10 shadow-xl shadow-slate-200/20 dark:shadow-none"
            >
              <Quote className="absolute top-6 left-6 w-10 h-10 text-blue-100 dark:text-blue-900/30" />
              
              <div className="flex gap-1 mb-6">
                {Array.from({ length: items[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 italic">
                "{items[current].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  {items[current].name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{items[current].name}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{items[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:border-blue-300 transition-all shadow-sm"
              aria-label={isFr ? 'Précédent' : 'Previous'}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    i === current ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 dark:bg-zinc-700'
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:border-blue-300 transition-all shadow-sm"
              aria-label={isFr ? 'Suivant' : 'Next'}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
