'use client'

import { siteConfig } from '@/config/site'
import { Calculator, ShieldCheck, Users, Briefcase, TrendingUp, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const servicesData = {
  fr: [
    {
      id: 'accounting',
      icon: Calculator,
      title: 'Comptabilité à Tunis',
      description: 'Tenue comptable, bilan, compte de résultat et suivi de votre activité à Tunis.',
      href: '/nos-expertises/expertise-comptable',
      className: 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-white to-slate-50 dark:from-zinc-900 dark:to-zinc-950',
    },
    {
      id: 'tax',
      icon: ShieldCheck,
      title: 'Fiscalité & Optimisation',
      description: 'Déclarations fiscales, TVA, liasse fiscale et optimisation fiscale pour entreprises et freelances.',
      href: '/nos-expertises/juridique-fiscal',
      className: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 'social',
      icon: Users,
      title: 'Paie & Gestion sociale',
      description: 'Bulletins de salaire, déclarations sociales et accompagnement en gestion RH.',
      href: '/nos-expertises/paie-social',
      className: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 'creation',
      icon: Briefcase,
      title: "Création d'entreprise",
      description: 'Accompagnement complet pour créer votre société à Tunis rapidement.',
      href: '/investir-en-tunisie',
      className: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 'consulting',
      icon: TrendingUp,
      title: 'Conseil Stratégique',
      description: 'Analyse financière, optimisation des coûts et accompagnement.',
      href: '/vos-metiers',
      className: 'md:col-span-1 md:row-span-1',
    }
  ],
  en: [
    {
      id: 'accounting',
      icon: Calculator,
      title: 'Accounting in Tunis',
      description: 'Bookkeeping, balance sheet, income statement and monitoring of your activity in Tunis.',
      href: '/nos-expertises/expertise-comptable',
      className: 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-white to-slate-50 dark:from-zinc-900 dark:to-zinc-950',
    },
    {
      id: 'tax',
      icon: ShieldCheck,
      title: 'Tax & Optimization',
      description: 'Tax returns, VAT, tax package and tax optimization for companies and freelancers.',
      href: '/nos-expertises/juridique-fiscal',
      className: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 'social',
      icon: Users,
      title: 'Payroll & Social Management',
      description: 'Pay slips, social declarations and HR management support.',
      href: '/nos-expertises/paie-social',
      className: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 'creation',
      icon: Briefcase,
      title: 'Business Creation',
      description: 'Complete support to create your company in Tunis quickly.',
      href: '/investir-en-tunisie',
      className: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 'consulting',
      icon: TrendingUp,
      title: 'Strategic Consulting',
      description: 'Financial analysis, cost optimization and support.',
      href: '/vos-metiers',
      className: 'md:col-span-1 md:row-span-1',
    }
  ]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export function Services({ lang }: { lang?: string }) {
  const isFr = lang === 'fr'
  const services = servicesData[isFr ? 'fr' : 'en']

  return (
    <section id="expertises" className="py-24 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
          >
            {isFr ? 'Nos expertises pour propulser votre réussite' : 'Our expertise to drive your success'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            {isFr
              ? 'Un accompagnement sur-mesure combinant rigueur comptable et vision stratégique pour les entrepreneurs, freelances et dirigeants à Tunis.'
              : 'Tailored support combining accounting rigor and strategic vision for entrepreneurs, freelancers and business leaders in Tunis.'}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className={cn(
                "group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900/50 border border-slate-200/50 dark:border-white/5",
                "shadow-[0_2px_20px_rgb(0,0,0,0.04)] dark:shadow-none",
                "hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-500",
                service.className
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-50/50 group-hover:to-blue-100/50 dark:group-hover:from-blue-500/5 dark:group-hover:to-blue-500/10 transition-colors duration-500" />
              
              <Link href={`/${lang}${service.href}`} className="absolute inset-0 z-10">
                <span className="sr-only">{service.title}</span>
              </Link>

              <div className={cn(
                "relative h-full flex flex-col p-8",
                index === 0 ? "justify-end" : ""
              )}>
                <div className={cn(
                  "rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110",
                  index === 0 
                    ? "w-16 h-16 bg-blue-600 text-white shadow-lg shadow-blue-600/30 mb-8" 
                    : "w-12 h-12 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400"
                )}>
                  <service.icon className={index === 0 ? "w-8 h-8" : "w-6 h-6"} />
                </div>
                
                <h3 className={cn(
                  "font-bold text-slate-900 dark:text-white mb-3",
                  index === 0 ? "text-3xl" : "text-xl"
                )}>
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 flex-1">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-blue-600 font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  {isFr ? 'En savoir plus' : 'Learn more'} <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1 md:row-span-1 group relative rounded-3xl bg-blue-600 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
            <div className="relative h-full p-8 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                {isFr ? 'Prêt à démarrer ?' : 'Ready to start?'}
              </h3>
              <p className="text-blue-100 mb-6 font-medium">
                {isFr ? 'Obtenez une réponse rapide en quelques clics.' : 'Get a quick response in just a few clicks.'}
              </p>
              <a 
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white text-blue-600 font-bold hover:bg-slate-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                {isFr ? 'Discuter sur WhatsApp' : 'Chat on WhatsApp'}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
