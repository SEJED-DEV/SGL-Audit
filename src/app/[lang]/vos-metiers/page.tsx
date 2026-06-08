import { siteConfig } from '@/config/site'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Briefcase, MessageCircle, ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const title = lang === 'fr' ? 'Expertise Comptable par Secteur d\'Activité à Tunis' : 'Accounting Expertise by Business Sector in Tunis'
  const description = lang === 'fr'
    ? "SGL Audit accompagne tous les secteurs à Tunis : startups, associations, freelances, professions de santé, artisans, restauration, commerce et plus."
    : "SGL Audit supports all sectors in Tunis: startups, associations, freelancers, healthcare professionals, craftsmen, restaurants, retail and more."
  return {
    title,
    description,
    alternates: {
      canonical: `https://sglaudit.com/${lang}/vos-metiers`,
    },
    openGraph: { title, description },
  }
}

const sectorsData = {
  fr: [
    { title: "Services à la personne", description: "Comptabilité et gestion sociale pour les entreprises de services à domicile, aide à la personne et maintien à domicile.", icon: "🏠" },
    { title: "Startups & Innovation", description: "Accompagnement dédié aux jeunes entreprises innovantes : levée de fonds, fiscal avantageux, structuration juridique.", icon: "🚀" },
    { title: "Associations", description: "Comptabilité spécifique aux associations loi 1901 : comptes de résultat, bilan, déclarations et subventions.", icon: "🤝" },
    { title: "Auto-entrepreneurs & Freelances", description: "Accompagnement des micro-entrepreneurs : charges sociales, TVA, optimisation du statut et déclarations.", icon: "💼" },
    { title: "Professions de santé", description: "Expertise comptable pour médecins, dentistes, kinésithérapeutes, pharmaciens et autres professionnels de santé.", icon: "⚕️" },
    { title: "Artisans & PME", description: "Gestion comptable et fiscale adaptée aux petites et moyennes entreprises de l'artisanat et du commerce.", icon: "🔧" },
    { title: "Secteur artistique & culturel", description: "Accompagnement des artistes, intermittents du spectacle, galeries et associations culturelles.", icon: "🎨" },
    { title: "Restauration & Hôtellerie", description: "Spécialistes de la comptabilité des restaurants, hôtels, cafés et établissements de restauration rapide.", icon: "🍽️" },
    { title: "Commerce & Distribution", description: "Gestion comptable, TVA et stock pour les commerçants, grossistes et acteurs de la grande distribution.", icon: "🛒" },
  ],
  en: [
    { title: "Personal Services", description: "Accounting and social management for home service companies, personal assistance and home care.", icon: "🏠" },
    { title: "Startups & Innovation", description: "Dedicated support for innovative young companies: fundraising, favorable tax regime, legal structuring.", icon: "🚀" },
    { title: "Associations", description: "Specific accounting for non-profit organizations: income statements, balance sheets, declarations and grants.", icon: "🤝" },
    { title: "Self-Employed & Freelancers", description: "Support for micro-entrepreneurs: social charges, VAT, status optimization and declarations.", icon: "💼" },
    { title: "Health Professionals", description: "Accounting expertise for doctors, dentists, physiotherapists, pharmacists and other health professionals.", icon: "⚕️" },
    { title: "Craftsmen & SMEs", description: "Accounting and tax management adapted to small and medium-sized craft and retail businesses.", icon: "🔧" },
    { title: "Arts & Culture", description: "Support for artists, performers, galleries and cultural associations.", icon: "🎨" },
    { title: "Restaurant & Hospitality", description: "Specialists in accounting for restaurants, hotels, cafés and fast-food establishments.", icon: "🍽️" },
    { title: "Retail & Distribution", description: "Accounting management, VAT and stock for retailers, wholesalers and distribution players.", icon: "🛒" },
  ]
}

export default async function VosMetiersPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const isFr = lang === 'fr'
  const sectors = sectorsData[isFr ? 'fr' : 'en']

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">
      {/* Hero */}
      <section className="min-h-[100dvh] flex items-center pt-24 pb-20 bg-gradient-to-br from-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="w-16 h-16 rounded-2xl bg-teal-600/30 border border-teal-400/30 flex items-center justify-center mx-auto mb-8">
            <Briefcase className="w-8 h-8 text-teal-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{isFr ? 'Vos Métiers' : 'Your Industries'}</h1>
          <div className="h-1 w-24 bg-teal-400 rounded mx-auto mb-8" />
          <p className="text-xl text-slate-300 leading-relaxed">
            {isFr ? "Nous nous sommes spécialisés dans de nombreux secteurs d'activité pour vous offrir un accompagnement expert adapté aux réalités de votre métier." : "We have specialized in many business sectors to offer you expert support tailored to the realities of your profession."}
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {isFr ? "Notre cabinet accompagne tous les secteurs d'activité" : 'Our firm supports all business sectors'}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              {isFr ? 'Quelle que soit votre activité, nous avons l\'expertise et les outils pour vous accompagner efficacement dans votre développement.' : 'Whatever your activity, we have the expertise and tools to support you effectively in your development.'}
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
          <h2 className="text-3xl font-bold mb-4">{isFr ? "Votre secteur n'est pas listé ?" : "Your sector isn't listed?"}</h2>
          <p className="text-teal-100 mb-8">{isFr ? 'Nous accompagnons tous types d\'entreprises. Contactez-nous pour discuter de votre situation.' : 'We support all types of businesses. Contact us to discuss your situation.'}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 rounded-full font-bold hover:bg-slate-50 transition-colors shadow-md">
              <MessageCircle className="w-5 h-5" />
              {isFr ? 'Discuter par WhatsApp' : 'Chat on WhatsApp'}
            </a>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-teal-800 text-white rounded-full font-bold hover:bg-teal-900 transition-colors group">
              {isFr ? 'Contactez-nous' : 'Contact Us'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
