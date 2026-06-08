import { siteConfig } from '@/config/site'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Scale, CheckCircle2, MessageCircle, ArrowLeft } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const title = lang === 'fr' ? 'Conseil Juridique & Fiscal à Tunis - SGL Audit' : 'Legal & Tax Consulting in Tunis - SGL Audit'
  const description = lang === 'fr'
    ? "Secrétariat juridique, création de société (SARL, SA), conseil fiscal et audit à Tunis. Optimisez votre fiscalité avec SGL Audit."
    : "Corporate secretary, company creation (SARL, SA), tax consulting and audit in Tunis. Optimize your taxation with SGL Audit."
  return {
    title,
    description,
    alternates: {
      canonical: `https://sglaudit.com/${lang}/nos-expertises/juridique-fiscal`,
    },
    openGraph: { title, description },
  }
}

export default async function JuridiqueFiscalPage({
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <Link href={`/${lang}/nos-expertises`} className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 text-sm mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {isFr ? 'Nos Expertises' : 'Our Expertise'}
          </Link>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-purple-600/30 border border-purple-400/30 flex items-center justify-center">
              <Scale className="w-7 h-7 text-purple-300" />
            </div>
            <div className="h-1 w-16 bg-purple-400 rounded" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isFr ? 'Expertise Juridique & Fiscale' : 'Legal & Tax Expertise'}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            {isFr ? 'Optimiser votre fiscalité et sécuriser la structure de votre société.' : 'Optimize your taxation and secure your company structure.'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="prose dark:prose-invert prose-slate max-w-none text-slate-600 dark:text-slate-400 space-y-4 text-lg leading-relaxed mb-12">
            <p>{isFr ? 'Nous vous guidons dans les méandres de la fiscalité et du droit des sociétés pour protéger votre patrimoine et celui de votre entreprise. Notre équipe juridique et fiscale intervient à chaque étape de la vie de votre société, de la création à la dissolution.' : 'We guide you through the complexities of taxation and corporate law to protect your assets and those of your business. Our legal and tax team supports you at every stage of your company\'s life, from creation to dissolution.'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Juridique */}
            <div className="bg-slate-50 dark:bg-zinc-950 p-8 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{isFr ? 'Secrétariat Juridique & Vie de la Société' : 'Corporate Secretarial & Company Life'}</h2>
              <ul className="space-y-4">
                {[
                  { title: isFr ? "Secrétariat juridique" : "Corporate secretarial", desc: isFr ? "Organisation de vos assemblées générales ordinaires et extraordinaires, rédaction des procès-verbaux." : "Organization of your ordinary and extraordinary general meetings, drafting of minutes." },
                  { title: isFr ? "Création de société" : "Company formation", desc: isFr ? "Accompagnement complet pour la création de votre structure juridique (SARL, SARL Unipersonnelle, SA…)." : "Full support for the creation of your legal structure (SARL, sole shareholder SARL, SA…)." },
                  { title: isFr ? "Modification de société" : "Company modification", desc: isFr ? "Transfert de siège, augmentation de capital, changement de gérant, modification des statuts." : "Registered office transfer, capital increase, manager change, articles amendment." },
                  { title: isFr ? "Dissolution et liquidation" : "Dissolution and liquidation", desc: isFr ? "Gestion administrative et juridique de la dissolution amiable ou judiciaire de votre société." : "Administrative and legal management of your company's amicable or judicial dissolution." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white block">{item.title}</span>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fiscal */}
            <div className="bg-slate-50 dark:bg-zinc-950 p-8 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{isFr ? 'Conseil & Audit Fiscal' : 'Tax Consulting & Audit'}</h2>
              <ul className="space-y-4">
                {[
                  { title: isFr ? "Conseil fiscal" : "Tax consulting", desc: isFr ? "Optimisation de votre charge fiscale et vérification de la conformité de vos pratiques fiscales." : "Optimization of your tax burden and verification of your tax compliance." },
                  { title: isFr ? "Déclarations fiscales" : "Tax declarations", desc: isFr ? "Établissement de vos liasses fiscales, TVA, IS et autres taxes professionnelles." : "Preparation of your tax returns, VAT, corporate tax and other professional taxes." },
                  { title: isFr ? "Audit fiscal" : "Tax audit", desc: isFr ? "Diagnostic complet de votre situation fiscale pour identifier les risques et les opportunités d'optimisation." : "Complete diagnosis of your tax situation to identify risks and optimization opportunities." },
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

          {/* Why trust us */}
          <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{isFr ? 'Pourquoi confier votre juridique & fiscal à notre cabinet ?' : 'Why trust us with your legal & tax matters?'}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: isFr ? "Expertise pluridisciplinaire" : "Multidisciplinary expertise", desc: isFr ? "Nos experts maîtrisent aussi bien le droit des sociétés que la fiscalité des entreprises." : "Our experts master both corporate law and business taxation." },
                { title: isFr ? "Sécurité juridique" : "Legal security", desc: isFr ? "Toutes vos opérations sont conformes aux dernières évolutions législatives et réglementaires." : "All your operations comply with the latest legislative and regulatory developments." },
                { title: isFr ? "Conseil proactif" : "Proactive advice", desc: isFr ? "Nous anticipons les risques et vous conseillons avant qu'ils ne deviennent des problèmes." : "We anticipate risks and advise you before they become problems." },
              ].map((a, i) => (
                <div key={i}>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">{a.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{isFr ? 'Sécurisez votre structure juridique et fiscale' : 'Secure your legal and tax structure'}</h2>
          <p className="text-purple-100 mb-8">{isFr ? 'Prenez rendez-vous avec nos experts pour un audit complet de votre situation.' : 'Book an appointment with our experts for a complete audit of your situation.'}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-700 rounded-full font-bold hover:bg-slate-50 transition-colors shadow-md">
              <MessageCircle className="w-5 h-5" />
              {isFr ? 'Discuter par WhatsApp' : 'Chat on WhatsApp'}
            </a>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-purple-800 text-white rounded-full font-bold hover:bg-purple-900 transition-colors">
              {isFr ? 'Contactez-nous' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
