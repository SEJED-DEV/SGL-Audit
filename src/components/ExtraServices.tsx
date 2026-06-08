'use client'

import { LineChart, Lock, FileText, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const extrasData = {
  fr: [
    {
      icon: LineChart,
      title: "Gestion de Patrimoine",
      description: "Un conseil stratégique pour optimiser vos opportunités d'investissement et planifier sereinement la transmission de votre patrimoine, tout en sécurisant vos enjeux fiscaux successoraux."
    },
    {
      icon: Lock,
      title: "Autorisation de travail, détachement et recrutement",
      description: "Une assistance complète pour sécuriser vos recrutements et détachements en Tunisie, de l'obtention des autorisations de travail à la gestion fluide de vos processus administratifs complexes."
    },
    {
      icon: FileText,
      title: "Démarches de résidence et de séjour",
      description: "Assistance et accompagnement pour les formalités de résidence et de séjour en partenariat avec notre cabinet d'avocats spécialisé en droit des étrangers."
    },
    {
      icon: Globe,
      title: "Conseil en fiscalité internationale",
      description: "Assistance en fiscalité internationale et accompagnement des associés ayant plusieurs résidences fiscales."
    }
  ],
  en: [
    {
      icon: LineChart,
      title: 'Wealth Management',
      description: 'Strategic advice to optimize your investment opportunities and calmly plan the transfer of your assets, while securing your inheritance tax issues.'
    },
    {
      icon: Lock,
      title: 'Work Permits, Secondment and Recruitment',
      description: 'Complete assistance to secure your recruitments and secondments in Tunisia, from obtaining work permits to smoothly managing your complex administrative processes.'
    },
    {
      icon: FileText,
      title: 'Residence and Stay Procedures',
      description: 'Assistance and support for residence and stay formalities in partnership with our law firm specialized in foreign nationals law.'
    },
    {
      icon: Globe,
      title: 'International Tax Advisory',
      description: 'International tax assistance and support for partners with multiple tax residences.'
    }
  ]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export function ExtraServices({ lang }: { lang?: string }) {
  const isFr = lang === 'fr'
  const extras = extrasData[isFr ? 'fr' : 'en']

  return (
    <section id="formalites" className="py-32 bg-slate-50 dark:bg-zinc-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-bold mb-8 uppercase tracking-widest"
          >
            {isFr ? 'Services additionnels' : 'Additional Services'}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight"
          >
            {isFr ? "Bien plus qu'un expert-comptable" : 'Much more than an accountant'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400"
          >
            {isFr
              ? 'Un accompagnement global pour sécuriser et accélérer tous vos projets stratégiques en Tunisie.'
              : 'Global support to secure and accelerate all your strategic projects in Tunisia.'}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {extras.map((extra, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-20 blur-lg transition duration-500" />
              
              <div className="relative flex flex-col sm:flex-row gap-8 p-10 bg-white dark:bg-zinc-950 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-xl shadow-slate-200/20 dark:shadow-none transition-transform duration-500 hover:-translate-y-2 h-full">
                
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-800 dark:to-zinc-900 border border-slate-100 dark:border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <extra.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {extra.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    {extra.description}
                  </p>
                </div>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
