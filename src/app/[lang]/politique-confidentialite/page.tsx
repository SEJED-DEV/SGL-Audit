import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isFr = lang === 'fr'
  return {
    title: isFr ? `Politique de Confidentialité - ${siteConfig.name}` : `Privacy Policy - ${siteConfig.name}`,
    description: isFr
      ? "Politique de confidentialité et protection des données personnelles."
      : "Privacy policy and personal data protection.",
    alternates: {
      canonical: `https://sglaudit.com/${lang}/politique-confidentialite`,
    },
  }
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const isFr = lang === 'fr'

  const sections = [
    {
      number: '1',
      title: isFr ? 'Collecte des données personnelles' : 'Collection of Personal Data',
      content: isFr ? (
        <p>
          Nous collectons les données personnelles que vous nous fournissez volontairement lors de l&apos;utilisation de nos services, notamment via le formulaire de contact ou lors d&apos;échanges directs (email, téléphone, WhatsApp). Les données collectées peuvent inclure : nom, prénom, adresse email, numéro de téléphone, et toute information liée à votre projet professionnel.
        </p>
      ) : (
        <p>
          We collect personal data that you voluntarily provide when using our services, particularly through the contact form or during direct exchanges (email, phone, WhatsApp). The collected data may include: name, email address, phone number, and any information related to your professional project.
        </p>
      ),
    },
    {
      number: '2',
      title: isFr ? 'Utilisation des données' : 'Use of Data',
      content: isFr ? (
        <>
          <p>Les informations recueillies sont nécessaires pour :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Répondre à vos demandes de renseignements et de devis.</li>
            <li>Fournir les services d&apos;expertise comptable, juridique et fiscale demandés.</li>
            <li>Gérer la relation client et le suivi des dossiers.</li>
            <li>Vous informer de nos actualités ou évolutions réglementaires (avec votre accord).</li>
          </ul>
        </>
      ) : (
        <>
          <p>The information collected is necessary for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Responding to your inquiries and quote requests.</li>
            <li>Providing the requested accounting, legal, and tax expertise services.</li>
            <li>Managing client relations and case follow-up.</li>
            <li>Informing you of our news or regulatory developments (with your consent).</li>
          </ul>
        </>
      ),
    },
    {
      number: '3',
      title: isFr ? 'Protection et sécurité des données' : 'Data Protection and Security',
      content: isFr ? (
        <p>
          {siteConfig.name} s&apos;engage à mettre en œuvre toutes les mesures techniques et organisationnelles nécessaires afin de garantir la sécurité et la confidentialité de vos données à caractère personnel et empêcher qu&apos;elles ne soient déformées, endommagées ou que des tiers non autorisés y aient accès.
        </p>
      ) : (
        <p>
          {siteConfig.name} is committed to implementing all necessary technical and organizational measures to ensure the security and confidentiality of your personal data and to prevent it from being distorted, damaged, or accessed by unauthorized third parties.
        </p>
      ),
    },
    {
      number: '4',
      title: isFr ? 'Conservation des données' : 'Data Retention',
      content: isFr ? (
        <p>
          Vos données personnelles sont conservées pour la durée strictement nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, dans le respect de la législation en vigueur.
        </p>
      ) : (
        <p>
          Your personal data is retained for the period strictly necessary to fulfill the purposes for which it was collected, in accordance with applicable legislation.
        </p>
      ),
    },
    {
      number: '5',
      title: isFr ? 'Vos droits' : 'Your Rights',
      content: isFr ? (
        <p>
          Conformément à la réglementation applicable en matière de protection des données, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant. Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse suivante : <strong>{siteConfig.contact.email}</strong>.
        </p>
      ) : (
        <p>
          In accordance with applicable data protection regulations, you have the right to access, rectify, delete, and object to the processing of your personal data. To exercise these rights, you can contact us at: <strong>{siteConfig.contact.email}</strong>.
        </p>
      ),
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none" />
        <div className="absolute top-0 left-[30%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-sm font-medium mb-6">
            {siteConfig.name}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {isFr ? 'Politique de Confidentialité' : 'Privacy Policy'}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            {isFr
              ? 'Comment nous protégeons et gérons vos données personnelles.'
              : 'How we protect and manage your personal data.'}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            {sections.map((section) => (
              <div
                key={section.number}
                className="bg-white dark:bg-zinc-900/50 rounded-2xl border border-slate-200 dark:border-zinc-800 p-8 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold">
                    {section.number}
                  </span>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {section.title}
                    </h2>
                    <div className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-3">
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
