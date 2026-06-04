import { LineChart, Lock, FileText, Globe } from 'lucide-react'

const extras = [
  {
    icon: LineChart,
    title: "Gestion de Patrimoine",
    description: "Un conseil stratégique pour optimiser vos opportunités d’investissement et planifier sereinement la transmission de votre patrimoine, tout en sécurisant vos enjeux fiscaux successoraux."
  },
  {
    icon: Lock,
    title: "Autorisation de travail, détachement et recrutement",
    description: "Une assistance complète pour sécuriser vos recrutements et détachements en Tunisie, de l'obtention des autorisations de travail à la gestion fluide de vos processus administratifs complexes."
  },
  {
    icon: FileText,
    title: "Démarches de résidence et de séjour",
    description: "Assistance et accompagnement pour les formalités de résidence et de séjour en partenariat avec notre cabinet d’avocats spécialisé en droit des étrangers."
  },
  {
    icon: Globe,
    title: "Conseil en fiscalité internationale",
    description: "Assistance en fiscalité internationale et accompagnement des associés ayant plusieurs résidences fiscales."
  }
]

export function ExtraServices() {
  return (
    <section id="formalites" className="py-24 bg-slate-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Bien plus qu’un expert-comptable : un accompagnement global pour vos projets
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {extras.map((extra, index) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row gap-6 p-8 bg-white dark:bg-zinc-950 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-zinc-800"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
                  <extra.icon className="w-7 h-7" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {extra.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {extra.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
