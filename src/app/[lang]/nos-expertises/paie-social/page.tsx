import { siteConfig } from '@/config/site'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Users, CheckCircle2, MessageCircle, ArrowLeft } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const title = lang === 'fr' ? 'Gestion de Paie & Social à Tunis - SGL Audit' : 'Payroll & Social Management in Tunis - SGL Audit'
  const description = lang === 'fr'
    ? "Externalisez votre paie et gestion sociale à Tunis. Bulletins de salaire, déclarations sociales, contrats de travail et conseil en droit social."
    : "Outsource your payroll and social management in Tunis. Pay slips, social declarations, employment contracts and social law consulting."
  return {
    title,
    description,
    alternates: {
      canonical: `https://sglaudit.com/${lang}/nos-expertises/paie-social`,
    },
    openGraph: { title, description },
  }
}

export default async function PaieSocialPage({
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <Link href={`/${lang}/nos-expertises`} className="inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-200 text-sm mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {isFr ? 'Nos Expertises' : 'Our Expertise'}
          </Link>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-indigo-600/30 border border-indigo-400/30 flex items-center justify-center">
              <Users className="w-7 h-7 text-indigo-300" />
            </div>
            <div className="h-1 w-16 bg-indigo-400 rounded" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isFr ? 'Pôle Social & Gestion de la Paie' : 'Payroll & Social Management'}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            {isFr ? 'La sécurité juridique et la valorisation de votre capital humain.' : 'Legal security and enhancement of your human capital.'}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="prose dark:prose-invert prose-slate max-w-none text-slate-600 dark:text-slate-400 space-y-4 text-lg leading-relaxed mb-12">
            <p>{isFr ? 'La législation sociale évolue constamment. Nous sécurisons vos relations sociales et externalisons la gestion administrative de vos salariés pour vous permettre de vous concentrer sur votre cœur de métier.' : 'Social legislation is constantly evolving. We secure your social relations and outsource the administrative management of your employees so you can focus on your core business.'}</p>
            <p>{isFr ? "Notre pôle social accompagne les entreprises de toutes tailles dans la gestion quotidienne de leurs ressources humaines : de l'embauche à la rupture du contrat, en passant par l'édition des bulletins de salaire et le conseil en droit social." : 'Our social department supports businesses of all sizes in their daily HR management: from hiring to contract termination, including pay slip processing and social law consulting.'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 dark:bg-zinc-950 p-8 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{isFr ? 'Gestion de la Paie' : 'Payroll Management'}</h2>
              <ul className="space-y-4">
                {[
                  { title: isFr ? "Gestion de la paie" : "Payroll management", desc: isFr ? "Édition des bulletins de salaire conformes à la législation en vigueur." : "Processing of pay slips compliant with current legislation." },
                  { title: isFr ? "Déclarations sociales" : "Social declarations", desc: isFr ? "Télétransmission des charges sociales (DSN) dans les délais impartis." : "Electronic filing of social security contributions (DSN)." },
                  { title: isFr ? "Gestion des entrées et sorties" : "Entry and exit management", desc: isFr ? "DPAE, solde de tout compte, attestations employeur." : "DPAE, final settlement, employer certificates." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white block">{item.title}</span>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 dark:bg-zinc-950 p-8 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{isFr ? 'Droit Social & RH' : 'Social Law & HR'}</h2>
              <ul className="space-y-4">
                {[
                  { title: isFr ? "Gestion administrative du personnel" : "HR administrative management", desc: isFr ? "De l'embauche à la rupture du contrat, nous gérons toutes les formalités." : "From hiring to contract termination, we handle all formalities." },
                  { title: isFr ? "Rédaction des contrats de travail" : "Employment contract drafting", desc: isFr ? "Documents conformes aux dernières réglementations et à votre convention collective." : "Documents compliant with latest regulations and your collective agreement." },
                  { title: isFr ? "Conseil en droit social" : "Social law consulting", desc: isFr ? "Prévention des risques de litiges et optimisation de votre politique RH." : "Prevention of litigation risks and optimization of your HR policy." },
                  { title: isFr ? "Audit social" : "Social audit", desc: isFr ? "Diagnostic de vos pratiques RH pour identifier et corriger les risques." : "Diagnosis of your HR practices to identify and correct risks." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white block">{item.title}</span>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{isFr ? "Les avantages d'externaliser votre paie" : 'Benefits of outsourcing your payroll'}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: isFr ? "Conformité garantie" : "Guaranteed compliance", desc: isFr ? "Respect de la législation sociale en constante évolution." : "Compliance with constantly evolving social legislation." },
                { title: isFr ? "Gain de temps" : "Time savings", desc: isFr ? "Concentrez-vous sur votre cœur de métier." : "Focus on your core business." },
                { title: isFr ? "Expertise dédiée" : "Dedicated expertise", desc: isFr ? "Un spécialiste paie à votre service." : "A payroll specialist at your service." },
                { title: isFr ? "Confidentialité" : "Confidentiality", desc: isFr ? "Gestion discrète et sécurisée de vos données." : "Discreet and secure handling of your data." },
              ].map((a, i) => (
                <div key={i} className="text-center">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">{a.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{isFr ? 'Externalisez votre paie et gestion sociale' : 'Outsource your payroll and social management'}</h2>
          <p className="text-indigo-100 mb-8">{isFr ? 'Contactez-nous pour un devis personnalisé et une prise en charge rapide.' : 'Contact us for a personalized quote and fast support.'}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-slate-50 transition-colors shadow-md">
              <MessageCircle className="w-5 h-5" />
              {isFr ? 'Discuter par WhatsApp' : 'Chat on WhatsApp'}
            </a>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-700 text-white rounded-full font-bold hover:bg-indigo-800 transition-colors">
              {isFr ? 'Contactez-nous' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
