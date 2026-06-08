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
      canonical: `https://sglaudit.tn/${lang}/nos-expertises/paie-social`,
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

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">
      {/* Hero */}
      <section className="min-h-[100dvh] flex items-center pt-24 pb-20 bg-gradient-to-br from-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <Link href={`/${lang}/nos-expertises`} className="inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-200 text-sm mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Nos Expertises
          </Link>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-indigo-600/30 border border-indigo-400/30 flex items-center justify-center">
              <Users className="w-7 h-7 text-indigo-300" />
            </div>
            <div className="h-1 w-16 bg-indigo-400 rounded" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pôle Social & Gestion de la Paie
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            La sécurité juridique et la valorisation de votre capital humain.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="prose dark:prose-invert prose-slate max-w-none text-slate-600 dark:text-slate-400 space-y-4 text-lg leading-relaxed mb-12">
            <p>La législation sociale évolue constamment. Nous sécurisons vos relations sociales et externalisons la gestion administrative de vos salariés pour vous permettre de vous concentrer sur votre cœur de métier.</p>
            <p>Notre pôle social accompagne les entreprises de toutes tailles dans la gestion quotidienne de leurs ressources humaines : de l'embauche à la rupture du contrat, en passant par l'édition des bulletins de salaire et le conseil en droit social.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 dark:bg-zinc-950 p-8 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Gestion de la Paie</h2>
              <ul className="space-y-4">
                {[
                  { title: "Gestion de la paie", desc: "Édition des bulletins de salaire conformes à la législation en vigueur." },
                  { title: "Déclarations sociales", desc: "Télétransmission des charges sociales (DSN) dans les délais impartis." },
                  { title: "Gestion des entrées et sorties", desc: "DPAE, solde de tout compte, attestations employeur." },
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
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Droit Social & RH</h2>
              <ul className="space-y-4">
                {[
                  { title: "Gestion administrative du personnel", desc: "De l'embauche à la rupture du contrat, nous gérons toutes les formalités." },
                  { title: "Rédaction des contrats de travail", desc: "Documents conformes aux dernières réglementations et à votre convention collective." },
                  { title: "Conseil en droit social", desc: "Prévention des risques de litiges et optimisation de votre politique RH." },
                  { title: "Audit social", desc: "Diagnostic de vos pratiques RH pour identifier et corriger les risques." },
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
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Les avantages d'externaliser votre paie</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Conformité garantie", desc: "Respect de la législation sociale en constante évolution." },
                { title: "Gain de temps", desc: "Concentrez-vous sur votre cœur de métier." },
                { title: "Expertise dédiée", desc: "Un spécialiste paie à votre service." },
                { title: "Confidentialité", desc: "Gestion discrète et sécurisée de vos données." },
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
          <h2 className="text-3xl font-bold mb-4">Externalisez votre paie et gestion sociale</h2>
          <p className="text-indigo-100 mb-8">Contactez-nous pour un devis personnalisé et une prise en charge rapide.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-slate-50 transition-colors shadow-md">
              <MessageCircle className="w-5 h-5" />
              Discuter par WhatsApp
            </a>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-700 text-white rounded-full font-bold hover:bg-indigo-800 transition-colors">
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
