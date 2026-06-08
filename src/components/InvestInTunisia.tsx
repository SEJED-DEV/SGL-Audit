'use client'

import Link from 'next/link'
import { Globe, Building2, UserPlus, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const featuresData = {
  fr: [
    {
      icon: Building2,
      title: "Création d'entreprise à Tunis",
      description: "Choisissez le type d'entreprise adapté à votre projet : SARL, SARL Unipersonnelle, SA, SNC ou entreprise individuelle. Nous guidons chaque étape, de la formalisation juridique à l'immatriculation.",
      color: "from-blue-500 to-indigo-500",
      href: "/formalites"
    },
    {
      icon: Globe,
      title: "Acheter une entreprise à Tunis",
      description: "Vous souhaitez acquérir une entreprise existante ? Explorez les options pour acheter une société étagère (Shelf Company), reprendre une entreprise déjà établie ou acquérir un fonds de commerce.",
      color: "from-indigo-500 to-purple-500",
      href: "/investir-en-tunisie"
    },
    {
      icon: UserPlus,
      title: "Services pour non-résidents",
      description: "Si vous êtes étranger, nous proposons des services spécifiques : création d'entreprise, domiciliation à Tunis, et représentation fiscale par un mandataire en Tunisie.",
      color: "from-purple-500 to-pink-500",
      href: "/investir-en-tunisie"
    }
  ],
  en: [
    {
      icon: Building2,
      title: 'Business Creation in Tunis',
      description: "Choose the type of company that suits your project: LLC, Sole Proprietorship, Corporation, Partnership or Individual Enterprise. We guide each step from legal formalization to registration.",
      color: "from-blue-500 to-indigo-500",
      href: "/formalites"
    },
    {
      icon: Globe,
      title: 'Buy a Business in Tunis',
      description: 'Want to acquire an existing business? Explore options to buy a shelf company, take over an established business or acquire goodwill.',
      color: "from-indigo-500 to-purple-500",
      href: "/investir-en-tunisie"
    },
    {
      icon: UserPlus,
      title: 'Services for Non-Residents',
      description: 'If you are a foreigner, we offer specific services: company creation, domiciliation in Tunis, and tax representation through a tax agent in Tunisia.',
      color: "from-purple-500 to-pink-500",
      href: "/investir-en-tunisie"
    }
  ]
}

export function InvestInTunisia({ lang }: { lang?: string }) {
  const isFr = lang === 'fr'
  const features = featuresData[isFr ? 'fr' : 'en']

  return (
    <section id="investir" className="relative py-32 bg-slate-50 dark:bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          <div className="lg:w-5/12 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
                <Globe className="w-4 h-4" />
                {isFr ? 'Développement International' : 'International Development'}
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                {isFr ? 'Investir en' : 'Invest in'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{isFr ? 'Tunisie' : 'Tunisia'}</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
                {isFr
                  ? "Saisissez les opportunités d'un marché dynamique. Nous sécurisons votre implantation et optimisons vos investissements à Tunis."
                  : 'Seize the opportunities of a dynamic market. We secure your establishment and optimize your investments in Tunis.'}
              </p>
              
              <div className="hidden lg:block space-y-6">
                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center border border-slate-100 dark:border-zinc-800">
                    <span className="font-bold text-blue-600">1</span>
                  </div>
                  <span className="font-semibold text-lg">
                    {isFr ? "Stratégie d'implantation" : 'Establishment Strategy'}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center border border-slate-100 dark:border-zinc-800">
                    <span className="font-bold text-indigo-600">2</span>
                  </div>
                  <span className="font-semibold text-lg">
                    {isFr ? 'Structuration juridique' : 'Legal Structuring'}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center border border-slate-100 dark:border-zinc-800">
                    <span className="font-bold text-purple-600">3</span>
                  </div>
                  <span className="font-semibold text-lg">
                    {isFr ? 'Gestion au quotidien' : 'Daily Management'}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-7/12 flex flex-col gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                
                <Link href={`/${lang}${feature.href}`} className="relative block p-8 md:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xl shadow-slate-200/20 dark:shadow-none h-full overflow-hidden">
                  
                  <div className={cn("absolute top-0 left-0 right-0 h-1 bg-gradient-to-r", feature.color)} />

                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner",
                    "bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-800 dark:to-zinc-900",
                    "group-hover:scale-110 transition-transform duration-500"
                  )}>
                    <feature.icon className="w-8 h-8 text-slate-800 dark:text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-8">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                    {isFr ? "Découvrir l'accompagnement" : 'Explore support'} <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
