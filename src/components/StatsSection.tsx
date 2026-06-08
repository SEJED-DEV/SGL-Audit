'use client'

import { motion } from 'framer-motion'
import { Briefcase, Users, Calendar, Star } from 'lucide-react'

const statsData = {
  fr: [
    { icon: Briefcase, value: '15+', suffix: '', label: "Années d'expertise" },
    { icon: Users, value: '500+', suffix: '', label: 'Clients accompagnés' },
    { icon: Calendar, value: '98', suffix: '%', label: 'Clients satisfaits' },
    { icon: Star, value: '4.8', suffix: '/5', label: 'Avis clients' },
  ],
  en: [
    { icon: Briefcase, value: '15+', suffix: '', label: 'Years of expertise' },
    { icon: Users, value: '500+', suffix: '', label: 'Clients supported' },
    { icon: Calendar, value: '98', suffix: '%', label: 'Satisfied clients' },
    { icon: Star, value: '4.8', suffix: '/5', label: 'Client reviews' },
  ]
}

export function StatsSection({ lang }: { lang?: string }) {
  const isFr = lang === 'fr'
  const stats = statsData[isFr ? 'fr' : 'en']

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-600 to-indigo-700 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-1">
                {stat.value}<span className="text-blue-200">{stat.suffix}</span>
              </div>
              <div className="text-blue-100/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  )
}
