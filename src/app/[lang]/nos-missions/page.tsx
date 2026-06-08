import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'
import { CheckCircle2, Calculator, Users, Scale, Zap, Shield, Smartphone } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const title = lang === 'fr' ? 'Nos Missions d\'Expertise Comptable à Tunis' : 'Our Accounting Expertise Missions in Tunis'
  const description = lang === 'fr'
    ? "Découvrez nos missions : expertise comptable, gestion de paie, conseil juridique et fiscal. SGL Audit vous accompagne à Tunis."
    : "Discover our missions: accounting expertise, payroll management, legal and tax consulting. SGL Audit supports you in Tunis."
  return {
    title,
    description,
    alternates: {
      canonical: `https://sglaudit.com/${lang}/nos-missions`,
    },
    openGraph: { title, description },
  }
}

export default async function NosMissionsPage({
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {isFr ? 'Nos Missions : Un Accompagnement à 360°' : 'Our Missions: 360° Support'}
            </h1>
            <div className="h-1 w-24 bg-blue-500 rounded mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 mb-6 font-medium">
              {isFr ? "Simplifiez votre gestion, sécurisez votre croissance et concentrez-vous sur l'essentiel : votre métier." : "Simplify your management, secure your growth, and focus on what matters: your business."}
            </p>
            <p className="text-lg text-slate-400">
              {isFr ? "En tant que partenaire de confiance, notre cabinet d'expertise comptable accompagne les entrepreneurs et dirigeants dans toutes les étapes de la vie de leur entreprise. Nous combinons rigueur technique et conseil stratégique pour transformer vos obligations réglementaires en véritables leviers de performance." : "As a trusted partner, our accounting firm supports entrepreneurs and managers at every stage of their business life. We combine technical rigor and strategic advice to turn your regulatory obligations into real performance drivers."}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* Expertise Domains */}
        <div className="space-y-24 mb-24">
          {/* Domain 1 */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {isFr ? 'Expertise Comptable & Conseil en Gestion' : 'Accounting & Management Consulting'}
              </h2>
              <p className="text-lg text-blue-600 font-semibold mb-4">{isFr ? 'La clarté financière pour piloter votre activité en toute sérénité.' : 'Financial clarity to steer your business with complete peace of mind.'}</p>
              <p className="text-slate-600 dark:text-slate-400">
                {isFr ? "Nos experts assurent la fiabilité de vos données financières et vous fournissent les outils d'analyse nécessaires à la prise de décision." : 'Our experts ensure the reliability of your financial data and provide you with the analysis tools needed for decision-making.'}
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: isFr ? 'Tenue et révision comptable' : 'Bookkeeping and accounting review', desc: isFr ? 'Une gestion rigoureuse de vos flux pour une comptabilité irréprochable.' : 'Rigorous management of your transactions for flawless accounting.' },
                { title: isFr ? 'Établissement des comptes annuels' : 'Preparation of annual accounts', desc: isFr ? 'Production du bilan, compte de résultat et annexes.' : 'Production of balance sheet, income statement and notes.' },
                { title: isFr ? 'Tableaux de bord et Reporting' : 'Dashboards and Reporting', desc: isFr ? 'Suivez vos indicateurs clés (KPI) en temps réel.' : 'Track your key performance indicators (KPIs) in real time.' },
                { title: isFr ? 'Prévisionnel financier' : 'Financial forecasting', desc: isFr ? 'Anticipez vos besoins de trésorerie et validez la viabilité de vos projets.' : 'Anticipate your cash flow needs and validate project viability.' },
                { title: isFr ? "Accompagnement à la création d'entreprise" : 'Business creation support', desc: isFr ? 'Choix du statut, business plan et formalités de lancement.' : 'Status choice, business plan and launch formalities.' }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-zinc-800">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm ml-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Domain 2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="lg:w-1/3">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {isFr ? 'Pôle Social & Gestion de la Paie' : 'Payroll & Social Management'}
              </h2>
              <p className="text-lg text-indigo-600 font-semibold mb-4">{isFr ? 'La sécurité juridique et la valorisation de votre capital humain.' : 'Legal security and enhancement of your human capital.'}</p>
              <p className="text-slate-600 dark:text-slate-400">
                {isFr ? 'La législation sociale évolue constamment. Nous sécurisons vos relations sociales et externalisons la gestion administrative de vos salariés.' : 'Social legislation is constantly evolving. We secure your social relations and outsource the administrative management of your employees.'}
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: isFr ? 'Gestion de la paie et déclarations sociales' : 'Payroll management and social declarations', desc: isFr ? 'Édition des bulletins de salaire et télétransmission des charges (DSN).' : 'Pay slip processing and electronic filing of social contributions (DSN).' },
                { title: isFr ? 'Gestion administrative du personnel' : 'HR administrative management', desc: isFr ? "De l'embauche à la rupture du contrat (entrées/sorties)." : 'From hiring to contract termination (entries/exits).' },
                { title: isFr ? 'Rédaction des contrats de travail' : 'Employment contract drafting', desc: isFr ? 'Des documents conformes aux dernières réglementations et à votre convention collective.' : 'Documents compliant with latest regulations and your collective agreement.' },
                { title: isFr ? 'Conseil en droit social & audit social' : 'Social law consulting & social audit', desc: isFr ? 'Prévention des risques de litiges et optimisation de votre politique RH.' : 'Prevention of litigation risks and optimization of your HR policy.' }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-zinc-800">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm ml-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Domain 3 */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center mb-6">
                <Scale className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {isFr ? 'Expertise Juridique & Fiscale' : 'Legal & Tax Expertise'}
              </h2>
              <p className="text-lg text-purple-600 font-semibold mb-4">{isFr ? 'Optimiser votre fiscalité et sécuriser la structure de votre société.' : 'Optimize your taxation and secure your company structure.'}</p>
              <p className="text-slate-600 dark:text-slate-400">
                {isFr ? 'Nous vous guidons dans les méandres de la fiscalité et du droit des sociétés pour protéger votre patrimoine et celui de votre entreprise.' : 'We guide you through the complexities of taxation and corporate law to protect your assets and those of your business.'}
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: isFr ? 'Secrétariat juridique' : 'Corporate secretarial', desc: isFr ? 'Organisation de vos assemblées générales ordinaires et extraordinaires.' : 'Organization of your ordinary and extraordinary general meetings.' },
                { title: isFr ? 'Vie de la société' : 'Company life', desc: isFr ? 'Conseil et formalités pour la création, la modification (transfert de siège, augmentation de capital) ou la dissolution/liquidation.' : 'Advice and formalities for creation, modification (transfer of registered office, capital increase) or dissolution/liquidation.' },
                { title: isFr ? 'Conseil et audit fiscal' : 'Tax consulting and audit', desc: isFr ? 'Optimisation de votre charge fiscale et vérification de la conformité de vos pratiques.' : 'Optimization of your tax burden and verification of compliance.' },
                { title: isFr ? 'Déclarations fiscales' : 'Tax declarations', desc: isFr ? 'Établissement de vos liasses fiscales, TVA, IS et autres taxes professionnelles.' : 'Preparation of your tax returns, VAT, corporate tax and other professional taxes.' }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-zinc-800">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm ml-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-slate-900 rounded-3xl p-12 lg:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{isFr ? 'Pourquoi choisir notre cabinet ?' : 'Why choose our firm?'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{isFr ? 'Proximité' : 'Proximity'}</h3>
              <p className="text-slate-300">{isFr ? 'Un interlocuteur dédié qui connaît parfaitement votre dossier.' : 'A dedicated contact who knows your file perfectly.'}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{isFr ? 'Réactivité' : 'Responsiveness'}</h3>
              <p className="text-slate-300">{isFr ? 'Des réponses rapides à vos problématiques quotidiennes.' : 'Quick answers to your daily issues.'}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{isFr ? 'Outils digitaux' : 'Digital tools'}</h3>
              <p className="text-slate-300">{isFr ? 'Une plateforme moderne pour simplifier la transmission de vos documents.' : 'A modern platform to simplify document sharing.'}</p>
            </div>
          </div>
          <div className="mt-16">
            <a 
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold shadow-lg hover:bg-slate-50 transition-colors"
            >
              {isFr ? 'Contactez-nous via WhatsApp' : 'Contact us via WhatsApp'}
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
