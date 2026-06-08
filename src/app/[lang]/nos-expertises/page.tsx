import { siteConfig } from '@/config/site'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Calculator, Users, Scale, ArrowRight, MessageCircle } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const title = lang === 'fr' ? 'Nos Expertises Comptables, Sociales & Fiscales à Tunis' : 'Our Accounting, Social & Tax Expertise in Tunis'
  const description = lang === 'fr'
    ? "Expertise comptable, gestion de paie, conseil juridique et fiscal à Tunis. Un accompagnement 360° pour votre entreprise par SGL Audit."
    : "Accounting expertise, payroll management, legal and tax consulting in Tunis. 360° support for your business by SGL Audit."
  return {
    title,
    description,
    alternates: {
      canonical: `https://sglaudit.com/${lang}/nos-expertises`,
    },
    openGraph: { title, description },
  }
}

const expertisesData = {
  fr: [
    {
      icon: Calculator,
      title: "Expertise Comptable & Conseil en Gestion",
      slug: "expertise-comptable",
      color: "blue",
      description: "La clarté financière pour piloter votre activité en toute sérénité.",
      services: [
        "Tenue de comptabilité",
        "Révision comptable",
        "Établissement des comptes annuels",
        "Déclarations fiscales",
        "Tableaux de bord et reporting",
        "Prévisionnel financier",
        "Accompagnement à la création d'entreprise",
        "Conseil en gestion",
      ]
    },
    {
      icon: Users,
      title: "Pôle Social & Gestion de la Paie",
      slug: "paie-social",
      color: "indigo",
      description: "La sécurité juridique et la valorisation de votre capital humain.",
      services: [
        "Gestion de la paie",
        "Déclarations sociales",
        "Gestion administrative du personnel",
        "Rédaction des contrats de travail",
        "Conseil en droit social",
        "Gestion des entrées et sorties de salariés",
        "Audit social",
      ]
    },
    {
      icon: Scale,
      title: "Expertise Juridique & Fiscale",
      slug: "juridique-fiscal",
      color: "purple",
      description: "Optimiser votre fiscalité et sécuriser la structure de votre société.",
      services: [
        "Secrétariat juridique",
        "Création de société",
        "Modification de société",
        "Dissolution et liquidation",
        "Conseil fiscal",
        "Déclarations fiscales",
        "Audit fiscal",
      ]
    }
  ],
  en: [
    {
      icon: Calculator,
      title: "Accounting & Management Consulting",
      slug: "expertise-comptable",
      color: "blue",
      description: "Financial clarity to steer your business with complete peace of mind.",
      services: [
        "Bookkeeping",
        "Accounting review",
        "Preparation of annual accounts",
        "Tax declarations",
        "Dashboards and reporting",
        "Financial forecasting",
        "Business creation support",
        "Management consulting",
      ]
    },
    {
      icon: Users,
      title: "Payroll & Social Management",
      slug: "paie-social",
      color: "indigo",
      description: "Legal security and enhancement of your human capital.",
      services: [
        "Payroll management",
        "Social declarations",
        "HR administrative management",
        "Employment contract drafting",
        "Social law consulting",
        "Employee entry and exit management",
        "Social audit",
      ]
    },
    {
      icon: Scale,
      title: "Legal & Tax Expertise",
      slug: "juridique-fiscal",
      color: "purple",
      description: "Optimize your taxation and secure your company structure.",
      services: [
        "Corporate secretarial",
        "Company formation",
        "Company modification",
        "Dissolution and liquidation",
        "Tax consulting",
        "Tax declarations",
        "Tax audit",
      ]
    }
  ]
}

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600",
  indigo: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600",
  purple: "bg-purple-50 dark:bg-purple-900/20 text-purple-600",
}

const borderMap: Record<string, string> = {
  blue: "border-blue-200 dark:border-blue-800/50",
  indigo: "border-indigo-200 dark:border-indigo-800/50",
  purple: "border-purple-200 dark:border-purple-800/50",
}

export default async function NosExpertisesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const isFr = lang === 'fr'

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">
      {/* Hero */}
      <section className="min-h-[100dvh] flex items-center pt-24 pb-20 bg-gradient-to-br from-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554200876-56c2f25224fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isFr ? 'Nos Expertises : Un Accompagnement à 360° pour votre Entreprise' : 'Our Expertise: 360° Support for Your Business'}
          </h1>
          <div className="h-1 w-24 bg-blue-400 rounded mx-auto mb-8" />
          <p className="text-xl text-slate-300 mb-4 font-medium">
            {isFr ? "Simplifiez votre gestion, sécurisez votre croissance et concentrez-vous sur l'essentiel : votre métier." : "Simplify your management, secure your growth, and focus on what matters: your business."}
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            {isFr ? "En tant que partenaire de confiance, notre cabinet d'expertise comptable accompagne les entrepreneurs et dirigeants dans toutes les étapes de la vie de leur entreprise. Nous combinons rigueur technique et conseil stratégique pour transformer vos obligations réglementaires en véritables leviers de performance." : "As a trusted partner, our accounting firm supports entrepreneurs and managers at every stage of their business life. We combine technical rigor and strategic advice to turn your regulatory obligations into real performance drivers."}
          </p>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {expertisesData[isFr ? 'fr' : 'en'].map((exp) => (
              <div
                key={exp.slug}
                className={`bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border-2 ${borderMap[exp.color]} overflow-hidden flex flex-col hover:shadow-lg transition-shadow`}
              >
                <div className="p-8 flex-1">
                  <div className={`w-14 h-14 rounded-xl ${colorMap[exp.color]} flex items-center justify-center mb-6`}>
                    <exp.icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{exp.title}</h2>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-6 italic">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.services.map((s, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 pb-8">
                  <Link
                    href={`/${lang}/nos-expertises/${exp.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:opacity-90 transition-opacity group"
                  >
                    {isFr ? 'En savoir plus' : 'Learn more'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us section */}
      <section className="py-16 bg-white dark:bg-zinc-900 border-t border-slate-100 dark:border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{isFr ? `Pourquoi choisir ${siteConfig.name} ?` : `Why choose ${siteConfig.name}?`}</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">{isFr ? 'Un interlocuteur dédié, des outils modernes et une réactivité à toute épreuve.' : 'A dedicated contact, modern tools, and unwavering responsiveness.'}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full font-semibold transition-colors shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              {isFr ? 'Discuter par WhatsApp' : 'Chat on WhatsApp'}
            </a>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors shadow-md"
            >
              {isFr ? 'Contactez-nous' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
