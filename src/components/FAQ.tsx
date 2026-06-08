'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqData = {
  fr: [
    {
      q: "Quels sont les avantages de faire appel à un expert-comptable à Tunis ?",
      a: "Faire appel à SGL Audit, expert-comptable à Tunis, vous garantit une conformité totale avec la législation tunisienne tout en optimisant votre situation fiscale. Notre accompagnement personnalisé vous permet de piloter efficacement votre activité et de prendre les meilleures décisions stratégiques."
    },
    {
      q: "Quels sont les différents types de sociétés que je peux créer en Tunisie ?",
      a: "Vous pouvez créer une SARL, SARL Unipersonnelle, SA, SNC ou entreprise individuelle. Le choix dépend de votre projet, de votre budget et de vos objectifs. Nous vous guidons dans le choix de la structure la plus adaptée."
    },
    {
      q: "Un étranger peut-il créer une entreprise en Tunisie ?",
      a: "Oui, un entrepreneur étranger peut créer une entreprise en Tunisie. Des services spécifiques sont disponibles : création d'entreprise, domiciliation à Tunis, et représentation fiscale par un mandataire en Tunisie pour faciliter vos démarches."
    },
    {
      q: "Quelles sont les formalités pour créer une entreprise à Tunis ?",
      a: "Les formalités incluent le choix du statut juridique, la domiciliation, l'ouverture d'un compte bancaire professionnel, l'immatriculation au registre du commerce et l'obtention de la carte d'identification fiscale. Notre cabinet vous accompagne dans toutes ces étapes."
    },
    {
      q: "Qu'est-ce qu'une société étagère (Shelf Company) ?",
      a: "Une société étagère est une société déjà constituée et immatriculée, restée inactive, prête à être reprise immédiatement. Cette solution permet de gagner du temps administratif et de démarrer votre activité sans délai."
    },
    {
      q: "Comment se déroule la gestion de la paie externalisée ?",
      a: "Nous prenons en charge l'édition des bulletins de salaire, les déclarations sociales (CNSS), la gestion des entrées et sorties du personnel et le conseil en droit social. Vous n'avez plus qu'à vous concentrer sur votre cœur de métier."
    }
  ],
  en: [
    {
      q: "What are the benefits of using an accountant in Tunis?",
      a: "Using SGL Audit, an accountant in Tunis, guarantees full compliance with Tunisian legislation while optimizing your tax situation. Our personalized support allows you to effectively manage your activity and make the best strategic decisions."
    },
    {
      q: "What types of companies can I create in Tunisia?",
      a: "You can create an LLC, Sole Proprietorship LLC, Corporation, Partnership or Individual Enterprise. The choice depends on your project, budget and objectives. We guide you in choosing the most suitable structure."
    },
    {
      q: "Can a foreigner create a company in Tunisia?",
      a: "Yes, a foreign entrepreneur can create a company in Tunisia. Specific services are available: company creation, domiciliation in Tunis, and tax representation through a tax agent in Tunisia to facilitate your procedures."
    },
    {
      q: "What are the formalities for creating a company in Tunis?",
      a: "Formalities include choosing the legal status, domiciliation, opening a professional bank account, registering with the commercial register and obtaining a tax identification card. Our firm supports you through all these steps."
    },
    {
      q: "What is a Shelf Company?",
      a: "A shelf company is an already incorporated and registered company that has remained inactive, ready to be taken over immediately. This solution saves administrative time and allows you to start your activity without delay."
    },
    {
      q: "How does outsourced payroll management work?",
      a: "We handle the preparation of pay slips, social declarations (CNSS), management of employee entries and departures, and social law advice. You can focus entirely on your core business."
    }
  ]
}

export function FAQ({ lang }: { lang?: string }) {
  const isFr = lang === 'fr'
  const faqs = faqData[isFr ? 'fr' : 'en']
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-32 bg-white dark:bg-black overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-4/12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {isFr ? 'Questions fréquentes' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {isFr
                ? 'Vous avez une question ? Consultez nos réponses aux questions les plus courantes.'
                : 'Have a question? Check our answers to the most common questions.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-8/12 space-y-3"
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 dark:border-zinc-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left bg-slate-50 dark:bg-zinc-900/50 hover:bg-slate-100 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 dark:text-white text-sm leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="p-5 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
