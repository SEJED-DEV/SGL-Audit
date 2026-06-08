import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'
import { ExtraServices } from '@/components/ExtraServices'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const title = lang === 'fr' ? 'Formalités Administratives & Démarches en Tunisie' : 'Administrative Formalities & Procedures in Tunisia'
  const description = lang === 'fr'
    ? "Accompagnement dans vos formalités en Tunisie : autorisation de travail, recrutement, résidence, séjour et fiscalité internationale."
    : "Support for your formalities in Tunisia: work permits, recruitment, residence, stay and international taxation."
  return {
    title,
    description,
    alternates: {
      canonical: `https://sglaudit.com/${lang}/formalites`,
    },
    openGraph: { title, description },
  }
}

export default async function FormalitesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const isFr = lang === 'fr'

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isFr ? 'Accueil' : 'Home', item: `https://sglaudit.com/${lang}` },
      { '@type': 'ListItem', position: 2, name: isFr ? 'Formalités' : 'Formalities', item: `https://sglaudit.com/${lang}/formalites` },
    ],
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section className="min-h-[100dvh] flex items-center pt-24 pb-20 bg-gradient-to-br from-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isFr ? 'Formalités & Démarches' : 'Formalities & Procedures'}
          </h1>
          <div className="h-1 w-24 bg-blue-400 rounded mx-auto mb-8" />
          <p className="text-xl text-slate-300 leading-relaxed">
            {isFr ? 'Un accompagnement complet pour sécuriser vos processus administratifs complexes.' : 'Full support to secure your complex administrative processes.'}
          </p>
        </div>
      </section>

      {/* Reusing the ExtraServices component */}
      <ExtraServices lang={lang} />
    </main>
  )
}
