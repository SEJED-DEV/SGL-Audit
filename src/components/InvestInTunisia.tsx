import { Globe, Building2, UserPlus } from 'lucide-react'

const features = [
  {
    icon: Building2,
    title: "Création d'entreprise à Tunis",
    description: "Choisissez le type d’entreprise adapté à votre projet : SASU, SAS, SARL, EURL, micro-entreprise ou entreprise individuelle (EI). Nous guidons chaque étape, de la formalisation juridique à l’immatriculation.",
  },
  {
    icon: Globe,
    title: "Acheter une entreprise à Tunis",
    description: "Vous souhaitez acquérir une entreprise existante ? Explorez les options pour acheter une société étagère (Shelf Company), reprendre une entreprise déjà établie ou acquérir un fonds de commerce.",
  },
  {
    icon: UserPlus,
    title: "Services pour non-résidents",
    description: "Si vous êtes étranger, nous proposons des services spécifiques : création d’entreprise, domiciliation à Tunis, et représentation fiscale par un mandataire en Tunisie.",
  }
]

export function InvestInTunisia() {
  return (
    <section id="investir" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Investir en Tunisie
            </h2>
            <div className="h-1 w-20 bg-blue-600 rounded mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Cette section est dédiée aux investisseurs souhaitant s’implanter ou investir en Tunisie. Vous y trouverez toutes les options pour créer ou reprendre une entreprise à Tunis, ainsi que les services spécialisés pour les non-résidents.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
