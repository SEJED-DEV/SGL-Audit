'use client'

import { motion } from 'framer-motion'
import { Store, Users, Heart, Building2, Palette, Stethoscope, Laptop, Coffee } from 'lucide-react'
import { cn } from '@/lib/utils'

const industriesData = {
  fr: [
    { icon: Store, label: 'Restauration & Hôtellerie', color: 'from-orange-500 to-red-500' },
    { icon: Heart, label: 'Services à la personne', color: 'from-pink-500 to-rose-500' },
    { icon: Building2, label: 'Association & ONG', color: 'from-emerald-500 to-teal-500' },
    { icon: Laptop, label: 'Start-up & Freelance', color: 'from-blue-500 to-cyan-500' },
    { icon: Stethoscope, label: 'Professions de santé', color: 'from-teal-500 to-green-500' },
    { icon: Palette, label: 'Art & Culture', color: 'from-purple-500 to-violet-500' },
    { icon: Coffee, label: 'Commerce & Distribution', color: 'from-amber-500 to-yellow-500' },
    { icon: Users, label: 'Auto-entrepreneur & TPE', color: 'from-indigo-500 to-blue-500' },
  ],
  en: [
    { icon: Store, label: 'Restaurant & Hospitality', color: 'from-orange-500 to-red-500' },
    { icon: Heart, label: 'Personal Services', color: 'from-pink-500 to-rose-500' },
    { icon: Building2, label: 'Association & NGO', color: 'from-emerald-500 to-teal-500' },
    { icon: Laptop, label: 'Startup & Freelance', color: 'from-blue-500 to-cyan-500' },
    { icon: Stethoscope, label: 'Health Professionals', color: 'from-teal-500 to-green-500' },
    { icon: Palette, label: 'Art & Culture', color: 'from-purple-500 to-violet-500' },
    { icon: Coffee, label: 'Trade & Distribution', color: 'from-amber-500 to-yellow-500' },
    { icon: Users, label: 'Self-employed & VSE', color: 'from-indigo-500 to-blue-500' },
  ]
}

export function IndustriesSection({ lang }: { lang?: string }) {
  const isFr = lang === 'fr'
  const industries = industriesData[isFr ? 'fr' : 'en']

  return (
    <section className="relative py-32 bg-slate-50 dark:bg-zinc-950 overflow-hidden">
      <div className="absolute top-1/2 right-0 translate-x-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {isFr ? 'Nous accompagnons tous les secteurs' : 'We support all sectors'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {isFr
              ? 'Une expertise sectorielle reconnue pour répondre aux spécificités de chaque activité en Tunisie.'
              : 'Recognized sector expertise to meet the specific needs of each activity in Tunisia.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative"
            >
              <div className={cn(
                "absolute -inset-px bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500",
                industry.color
              )} />
              <div className="relative p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex flex-col items-center text-center gap-3 h-full cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  <industry.icon className="w-7 h-7" />
                </div>
                <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">{industry.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
