'use client'

import { motion } from 'framer-motion'
import { Award, Users, Target, Shield } from 'lucide-react'

const content = {
  fr: {
    title: 'À propos de SGL Audit',
    subtitle: "Expert-comptable à Tunis — Membre de l'Ordre des Experts Comptables de Tunisie",
    description: [
      "SGL Audit est un cabinet d'expertise comptable basé à Tunis — Bab Khadhra, inscrit au tableau de l'Ordre des Experts Comptables de Tunisie (OECT). Notre cabinet attache une grande importance à l'éthique professionnelle et à la qualité du travail à travers une structure bien organisée, composée de collaborateurs compétents, expérimentés et dynamiques.",
      "Outre l'assistance aux obligations comptables, fiscales et sociales, notre cabinet vous apporte son expertise, ses conseils et son savoir-faire pour vous permettre de développer votre activité en toute sérénité. Nous intervenons dans toute la Tunisie et répondons à toutes les demandes des entrepreneurs à travers nos différents services."
    ],
    values: [
      { icon: Award, title: 'Expertise & Compétence', description: 'Une équipe de professionnels qualifiés et expérimentés au service de votre réussite.' },
      { icon: Users, title: 'Accompagnement Personnalisé', description: 'Un interlocuteur dédié qui connaît parfaitement votre dossier et vos enjeux.' },
      { icon: Target, title: 'Réactivité & Proximité', description: "Des réponses rapides à vos problématiques quotidiennes et une présence à vos côtés." },
      { icon: Shield, title: 'Conformité & Sécurité', description: 'Respect des normes comptables et fiscales en vigueur en Tunisie pour une gestion sereine.' },
    ]
  },
  en: {
    title: 'About SGL Audit',
    subtitle: 'Chartered Accountant in Tunis — Member of the Order of Chartered Accountants of Tunisia',
    description: [
      'SGL Audit is an accounting firm based in Tunis — Bab Khadhra, registered with the Order of Chartered Accountants of Tunisia (OECT). Our firm places great importance on professional ethics and work quality through a well-organized structure composed of competent, experienced and dynamic collaborators.',
      "Beyond assistance with accounting, tax and social obligations, our firm brings you its expertise, advice and know-how to help you develop your business with peace of mind. We operate throughout Tunisia and respond to all entrepreneurs' requests through our various services."
    ],
    values: [
      { icon: Award, title: 'Expertise & Competence', description: 'A team of qualified and experienced professionals dedicated to your success.' },
      { icon: Users, title: 'Personalized Support', description: 'A dedicated contact who knows your file and your challenges perfectly.' },
      { icon: Target, title: 'Responsiveness & Proximity', description: 'Quick answers to your daily issues and a presence by your side.' },
      { icon: Shield, title: 'Compliance & Security', description: 'Compliance with accounting and tax standards in force in Tunisia for peace of mind.' },
    ]
  }
}

export function AboutSection({ lang }: { lang?: string }) {
  const isFr = lang === 'fr'
  const c = content[isFr ? 'fr' : 'en']

  return (
    <section className="relative py-32 bg-white dark:bg-black overflow-hidden">
      <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              {isFr ? 'Qui sommes-nous ?' : 'Who are we?'}
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {c.title}
            </h2>
            
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-8">
              {c.subtitle}
            </p>

            {c.description.map((paragraph, i) => (
              <p key={i} className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {c.values.map((value, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-200/50 dark:border-zinc-800 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{value.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
