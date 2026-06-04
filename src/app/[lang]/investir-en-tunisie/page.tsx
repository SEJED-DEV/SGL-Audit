import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { Building2, Globe, UserPlus, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react'

export const metadata = {
  title: `Investir en Tunisie - ${siteConfig.name}`,
  description: "Création d'entreprise, acquisition de société et services pour non-résidents en Tunisie.",
}

const features = [
  {
    icon: Building2,
    title: "Création d'entreprise à Tunis",
    href: "/nos-expertises/expertise-comptable",
    description: "Choisissez le type d'entreprise adapté à votre projet. Nous guidons chaque étape, de la formalisation juridique à l'immatriculation.",
    points: [
      "SASU, SAS, SARL, EURL, micro-entreprise",
      "Entreprise individuelle (EI)",
      "Immatriculation rapide et sécurisée",
      "Accompagnement business plan",
    ]
  },
  {
    icon: Globe,
    title: "Acquérir une entreprise existante",
    href: "/nos-expertises/juridique-fiscal",
    description: "Explorez les options pour acheter une société étagère (Shelf Company), reprendre une entreprise déjà établie ou acquérir un fonds de commerce.",
    points: [
      "Société étagère (Shelf Company)",
      "Reprise d'entreprise déjà établie",
      "Acquisition d'un fonds de commerce",
      "Due diligence et audit d'acquisition",
    ]
  },
  {
    icon: UserPlus,
    title: "Services pour non-résidents",
    href: "/formalites",
    description: "Si vous êtes étranger, nous proposons des services spécifiques adaptés à votre situation.",
    points: [
      "Création d'entreprise en Tunisie",
      "Domiciliation à Tunis",
      "Représentation fiscale",
      "Accompagnement résidence et séjour",
    ]
  }
]

export default async function InvestirEnTunisiePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">
      {/* Hero */}
      <section className="min-h-[100dvh] flex items-center pt-24 pb-20 bg-gradient-to-br from-slate-900 to-blue-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=60')] bg-cover bg-center opacity-10" />
        <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-8">
            <Globe className="w-4 h-4" />
            Investissement & Implantation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Investir en Tunisie
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Cette section est dédiée aux investisseurs souhaitant s'implanter ou investir en Tunisie. Vous y trouverez toutes les options pour créer ou reprendre une entreprise à Tunis, ainsi que les services spécialisés pour les non-résidents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 rounded-full font-semibold transition-all hover:-translate-y-0.5 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Discuter par WhatsApp
            </a>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-semibold transition-all hover:-translate-y-0.5"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800 overflow-hidden flex flex-col">
                <div className="p-8 flex-1">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 pb-8">
                  <Link
                    href={`/${lang}${feature.href}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Prêt à démarrer votre activité en Tunisie ?</h2>
          <p className="text-blue-100 mb-8 text-lg">Contactez-nous pour un accompagnement personnalisé.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-slate-50 transition-colors shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Discuter par WhatsApp
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-full font-bold hover:bg-blue-800 transition-colors"
            >
              Contactez-nous par Email
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
