import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { Briefcase, MessageCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: `Vos Métiers - ${siteConfig.name}`,
  description: "Notre cabinet accompagne tous les secteurs d'activité : startups, associations, professions libérales, restauration, commerce et plus.",
}

const sectors = [
  {
    title: "Services à la personne",
    description: "Comptabilité et gestion sociale pour les entreprises de services à domicile, aide à la personne et maintien à domicile.",
    icon: "🏠",
  },
  {
    title: "Startups & Innovation",
    description: "Accompagnement dédié aux jeunes entreprises innovantes : levée de fonds, fiscal avantageux, structuration juridique.",
    icon: "🚀",
  },
  {
    title: "Associations",
    description: "Comptabilité spécifique aux associations loi 1901 : comptes de résultat, bilan, déclarations et subventions.",
    icon: "🤝",
  },
  {
    title: "Auto-entrepreneurs & Freelances",
    description: "Accompagnement des micro-entrepreneurs : charges sociales, TVA, optimisation du statut et déclarations.",
    icon: "💼",
  },
  {
    title: "Professions de santé",
    description: "Expertise comptable pour médecins, dentistes, kinésithérapeutes, pharmaciens et autres professionnels de santé.",
    icon: "⚕️",
  },
  {
    title: "Artisans & PME",
    description: "Gestion comptable et fiscale adaptée aux petites et moyennes entreprises de l'artisanat et du commerce.",
    icon: "🔧",
  },
  {
    title: "Secteur artistique & culturel",
    description: "Accompagnement des artistes, intermittents du spectacle, galeries et associations culturelles.",
    icon: "🎨",
  },
  {
    title: "Restauration & Hôtellerie",
    description: "Spécialistes de la comptabilité des restaurants, hôtels, cafés et établissements de restauration rapide.",
    icon: "🍽️",
  },
  {
    title: "Commerce & Distribution",
    description: "Gestion comptable, TVA et stock pour les commerçants, grossistes et acteurs de la grande distribution.",
    icon: "🛒",
  },
]

export default async function VosMetiersPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">
      {/* Hero */}
      <section className="min-h-[100dvh] flex items-center pt-24 pb-20 bg-gradient-to-br from-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="w-16 h-16 rounded-2xl bg-teal-600/30 border border-teal-400/30 flex items-center justify-center mx-auto mb-8">
            <Briefcase className="w-8 h-8 text-teal-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Vos Métiers</h1>
          <div className="h-1 w-24 bg-teal-400 rounded mx-auto mb-8" />
          <p className="text-xl text-slate-300 leading-relaxed">
            Nous nous sommes spécialisés dans de nombreux secteurs d'activité pour vous offrir un accompagnement expert adapté aux réalités de votre métier.
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Notre cabinet accompagne tous les secteurs d'activité
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Quelle que soit votre activité, nous avons l'expertise et les outils pour vous accompagner efficacement dans votre développement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, i) => (
              <div
                key={i}
                className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{sector.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {sector.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Votre secteur n'est pas listé ?</h2>
          <p className="text-teal-100 mb-8">Nous accompagnons tous types d'entreprises. Contactez-nous pour discuter de votre situation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 rounded-full font-bold hover:bg-slate-50 transition-colors shadow-md">
              <MessageCircle className="w-5 h-5" />
              Discuter par WhatsApp
            </a>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-teal-800 text-white rounded-full font-bold hover:bg-teal-900 transition-colors group">
              Contactez-nous
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
