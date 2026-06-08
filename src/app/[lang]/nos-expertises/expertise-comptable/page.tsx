import { siteConfig } from '@/config/site'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Calculator, CheckCircle2, MessageCircle, ArrowLeft } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const title = lang === 'fr' ? 'Expertise Comptable à Tunis - Tenue & Révision' : 'Accounting Expertise in Tunis - Bookkeeping & Audit'
  const description = lang === 'fr'
    ? "Tenue de comptabilité, révision, bilan, déclarations fiscales et reporting à Tunis. Externalisez votre comptabilité avec SGL Audit, expert-comptable inscrit à l'Ordre."
    : "Bookkeeping, audit, financial statements, tax returns and reporting in Tunis. Outsource your accounting with SGL Audit."
  return {
    title,
    description,
    alternates: {
      canonical: `https://sglaudit.tn/${lang}/nos-expertises/expertise-comptable`,
    },
    openGraph: { title, description },
  }
}

export default async function ExpertiseComptablePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">
      {/* Hero */}
      <section className="min-h-[100dvh] flex items-center pt-24 pb-20 bg-gradient-to-br from-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <Link href={`/${lang}/nos-expertises`} className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 text-sm mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Nos Expertises
          </Link>
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center">
              <Calculator className="w-7 h-7 text-blue-300" />
            </div>
            <div className="h-1 w-16 bg-blue-400 rounded" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Expertise Comptable & Conseil en Gestion
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            La clarté financière pour piloter votre activité en toute sérénité.
          </p>
        </div>
      </section>

      {/* Tenue de Comptabilité */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Tenue de Comptabilité : Une Gestion Financière Fiable et Conforme</h2>
          <div className="h-1 w-16 bg-blue-600 rounded mb-8" />
          <div className="prose dark:prose-invert prose-slate max-w-none text-slate-600 dark:text-slate-400 space-y-4 text-lg leading-relaxed mb-10">
            <p>La tenue de comptabilité est un élément essentiel pour assurer la bonne gestion et la pérennité de votre entreprise. Elle consiste à enregistrer de manière rigoureuse et chronologique l'ensemble des opérations financières : achats, ventes, mouvements bancaires et dépenses.</p>
            <p>Au-delà d'une simple obligation légale, une comptabilité bien tenue vous permet de piloter votre activité en temps réel, d'anticiper vos décisions stratégiques et de garantir votre conformité auprès de l'administration fiscale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 dark:bg-zinc-950 p-8 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Pourquoi la tenue de comptabilité est-elle indispensable ?</h3>
              <ul className="space-y-3">
                {[
                  { title: "Obligation légale", desc: "La majorité des entreprises doivent tenir une comptabilité régulière et sincère." },
                  { title: "Pilotage de l'activité", desc: "Suivez vos performances financières en temps réel." },
                  { title: "Justification fiscale", desc: "Répondez aux exigences de l'administration en cas de contrôle." },
                  { title: "Préparation des comptes", desc: "Facilitez l'établissement du bilan et du compte de résultat." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">{item.title} : </span>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 dark:bg-zinc-950 p-8 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Les documents essentiels de votre comptabilité</h3>
              <ul className="space-y-3">
                {[
                  { title: "Le journal comptable", desc: "Enregistrement quotidien de toutes les opérations financières." },
                  { title: "Le grand livre", desc: "Classement des écritures par comptes pour une vision détaillée." },
                  { title: "La balance comptable", desc: "Vérification de l'équilibre des comptes avant clôture." },
                  { title: "Le rapprochement bancaire", desc: "Contrôle de cohérence entre vos comptes et vos relevés bancaires." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">{item.title} : </span>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Nos services en tenue de comptabilité</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { title: "Saisie comptable", desc: "Enregistrement et classement de toutes vos pièces justificatives." },
              { title: "Déclarations fiscales", desc: "Gestion de la TVA et des obligations fiscales courantes." },
              { title: "Comptes annuels", desc: "Bilan, compte de résultat et annexes." },
              { title: "Reporting & conseil", desc: "Tableaux de bord, analyse financière et suivi de trésorerie." },
            ].map((s, i) => (
              <div key={i} className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 p-6 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{s.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Les avantages pour votre entreprise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Sérénité", desc: "Respect des obligations légales et des échéances fiscales." },
              { title: "Gain de temps", desc: "Externalisation des tâches administratives." },
              { title: "Vision claire", desc: "Indicateurs fiables pour piloter votre activité." },
              { title: "Performance", desc: "Aide à la prise de décision stratégique." },
            ].map((a, i) => (
              <div key={i} className="text-center p-6 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-xl shadow-sm">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{a.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 bg-slate-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Autres services comptables</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Révision comptable",
              "Établissement des comptes annuels",
              "Déclarations fiscales",
              "Tableaux de bord et reporting",
              "Prévisionnel financier",
              "Conseil en gestion",
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-slate-100 dark:border-zinc-800">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="font-medium text-slate-800 dark:text-slate-200">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Externalisez votre comptabilité en toute confiance</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Confier la tenue de votre comptabilité à un expert, c'est sécuriser votre activité tout en optimisant votre gestion financière.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-slate-50 transition-colors shadow-md">
              <MessageCircle className="w-5 h-5" />
              Discuter par WhatsApp
            </a>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-full font-bold hover:bg-blue-800 transition-colors">
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
