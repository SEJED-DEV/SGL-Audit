import { siteConfig } from '@/config/site'
import { Calculator, ShieldCheck, Users, Briefcase, TrendingUp } from 'lucide-react'

const services = [
  {
    id: 'accounting',
    icon: Calculator,
    title: 'Comptabilité à Tunis',
    description: 'Tenue comptable, bilan, compte de résultat et suivi de votre activité à Tunis.',
  },
  {
    id: 'tax',
    icon: ShieldCheck,
    title: 'Fiscalité et optimisation fiscale',
    description: 'Déclarations fiscales, TVA, liasse fiscale et optimisation fiscale pour entreprises et freelances.',
  },
  {
    id: 'social',
    icon: Users,
    title: 'Paie et gestion sociale',
    description: 'Bulletins de salaire, déclarations sociales et accompagnement en gestion RH.',
  },
  {
    id: 'creation',
    icon: Briefcase,
    title: 'Création d’entreprise à Tunis',
    description: 'Accompagnement complet pour créer votre société à Tunis rapidement et en toute sécurité.',
  },
  {
    id: 'consulting',
    icon: TrendingUp,
    title: 'Conseil et accompagnement stratégique',
    description: 'Analyse financière, optimisation des coûts et accompagnement pour développer votre entreprise.',
  }
]

export function Services() {
  return (
    <section id="expertises" className="py-24 bg-slate-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Nos services d’expertise comptable à Tunis pour accompagner votre activité
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
            Vous recherchez un expert-comptable à Tunis pour gérer votre comptabilité et optimiser votre fiscalité ? {siteConfig.name} accompagne les entrepreneurs, freelances et dirigeants dans toutes les étapes de leur activité : création d’entreprise, gestion comptable et conseil stratégique.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Notre objectif : vous faire gagner du temps, sécuriser votre entreprise et maximiser votre rentabilité grâce à un accompagnement personnalisé et réactif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group relative bg-white dark:bg-zinc-950 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-zinc-800 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
          
          <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-bold text-white mb-4">Prêt à démarrer ?</h3>
            <p className="text-blue-100 mb-6">Contactez-nous pour un devis gratuit et personnalisé.</p>
            <a 
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-white text-blue-600 font-semibold hover:bg-slate-50 transition-colors shadow-sm"
            >
              Discuter sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
