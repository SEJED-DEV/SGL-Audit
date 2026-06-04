import { siteConfig } from '@/config/site'
import { CheckCircle2, Calculator, Users, Scale, Zap, Shield, Smartphone } from 'lucide-react'

export default async function NosMissionsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">
      {/* Hero */}
      <section className="min-h-[100dvh] flex items-center pt-24 pb-20 bg-gradient-to-br from-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Nos Missions : Un Accompagnement à 360°
            </h1>
            <div className="h-1 w-24 bg-blue-500 rounded mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 mb-6 font-medium">
              Simplifiez votre gestion, sécurisez votre croissance et concentrez-vous sur l'essentiel : votre métier.
            </p>
            <p className="text-lg text-slate-400">
              En tant que partenaire de confiance, notre cabinet d'expertise comptable accompagne les entrepreneurs et dirigeants dans toutes les étapes de la vie de leur entreprise. Nous combinons rigueur technique et conseil stratégique pour transformer vos obligations réglementaires en véritables leviers de performance.
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
                Expertise Comptable & Conseil en Gestion
              </h2>
              <p className="text-lg text-blue-600 font-semibold mb-4">La clarté financière pour piloter votre activité en toute sérénité.</p>
              <p className="text-slate-600 dark:text-slate-400">
                Nos experts assurent la fiabilité de vos données financières et vous fournissent les outils d'analyse nécessaires à la prise de décision.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Tenue et révision comptable', desc: 'Une gestion rigoureuse de vos flux pour une comptabilité irréprochable.' },
                { title: 'Établissement des comptes annuels', desc: 'Production du bilan, compte de résultat et annexes.' },
                { title: 'Tableaux de bord et Reporting', desc: 'Suivez vos indicateurs clés (KPI) en temps réel.' },
                { title: 'Prévisionnel financier', desc: 'Anticipez vos besoins de trésorerie et validez la viabilité de vos projets.' },
                { title: "Accompagnement à la création d'entreprise", desc: 'Choix du statut, business plan et formalités de lancement.' }
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
                Pôle Social & Gestion de la Paie
              </h2>
              <p className="text-lg text-indigo-600 font-semibold mb-4">La sécurité juridique et la valorisation de votre capital humain.</p>
              <p className="text-slate-600 dark:text-slate-400">
                La législation sociale évolue constamment. Nous sécurisons vos relations sociales et externalisons la gestion administrative de vos salariés.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Gestion de la paie et déclarations sociales', desc: 'Édition des bulletins de salaire et télétransmission des charges (DSN).' },
                { title: 'Gestion administrative du personnel', desc: "De l'embauche à la rupture du contrat (entrées/sorties)." },
                { title: 'Rédaction des contrats de travail', desc: 'Des documents conformes aux dernières réglementations et à votre convention collective.' },
                { title: 'Conseil en droit social & audit social', desc: 'Prévention des risques de litiges et optimisation de votre politique RH.' }
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
                Expertise Juridique & Fiscale
              </h2>
              <p className="text-lg text-purple-600 font-semibold mb-4">Optimiser votre fiscalité et sécuriser la structure de votre société.</p>
              <p className="text-slate-600 dark:text-slate-400">
                Nous vous guidons dans les méandres de la fiscalité et du droit des sociétés pour protéger votre patrimoine et celui de votre entreprise.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Secrétariat juridique', desc: 'Organisation de vos assemblées générales ordinaires et extraordinaires.' },
                { title: 'Vie de la société', desc: 'Conseil et formalités pour la création, la modification (transfert de siège, augmentation de capital) ou la dissolution/liquidation.' },
                { title: 'Conseil et audit fiscal', desc: 'Optimisation de votre charge fiscale et vérification de la conformité de vos pratiques.' },
                { title: 'Déclarations fiscales', desc: 'Établissement de vos liasses fiscales, TVA, IS et autres taxes professionnelles.' }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Pourquoi choisir notre cabinet ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proximité</h3>
              <p className="text-slate-300">Un interlocuteur dédié qui connaît parfaitement votre dossier.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Réactivité</h3>
              <p className="text-slate-300">Des réponses rapides à vos problématiques quotidiennes.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Outils digitaux</h3>
              <p className="text-slate-300">Une plateforme moderne pour simplifier la transmission de vos documents.</p>
            </div>
          </div>
          <div className="mt-16">
            <a 
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold shadow-lg hover:bg-slate-50 transition-colors"
            >
              Contactez-nous via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
