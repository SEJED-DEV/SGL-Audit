import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isFr = lang === 'fr'
  return {
    title: isFr ? `Mentions Légales - ${siteConfig.name}` : `Legal Notices - ${siteConfig.name}`,
    description: isFr
      ? "Mentions légales et conditions générales d'utilisation du site SGL Audit."
      : "Legal notices and terms of use for SGL Audit's website.",
    alternates: {
      canonical: `https://sglaudit.com/${lang}/mentions-legales`,
    },
  }
}

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const isFr = lang === 'fr'

  const sections = [
    {
      number: '1',
      title: isFr ? 'Éditeur du site' : 'Publisher',
      content: isFr ? (
        <>
          <p>
            Le site <strong>sglaudit.com</strong> est édité par :
          </p>
          <p>
            <strong>{siteConfig.name}</strong><br />
            Société d&apos;expertise comptable inscrite au tableau de l&apos;Ordre des Experts Comptables de Tunisie.
          </p>
          <p>
            Siège social : {siteConfig.location.address}<br />
            Téléphone : {siteConfig.contact.phone} / {siteConfig.contact.phone2}<br />
            Email : {siteConfig.contact.email}<br />
            Site web : <a href={siteConfig.website} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">sglaudit.com</a>
          </p>
        </>
      ) : (
        <>
          <p>
            The website <strong>sglaudit.com</strong> is published by:
          </p>
          <p>
            <strong>{siteConfig.name}</strong><br />
            Accounting firm registered with the Order of Chartered Accountants of Tunisia.
          </p>
          <p>
            Headquarters: {siteConfig.location.address}<br />
            Phone: {siteConfig.contact.phone} / {siteConfig.contact.phone2}<br />
            Email: {siteConfig.contact.email}<br />
            Website: <a href={siteConfig.website} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">sglaudit.com</a>
          </p>
        </>
      ),
    },
    {
      number: '2',
      title: isFr ? 'Hébergement' : 'Hosting',
      content: isFr ? (
        <p>
          Le site est hébergé par Vercel Inc.<br />
          340 S Lemon Ave #4133<br />
          Walnut, CA 91789<br />
          États-Unis
        </p>
      ) : (
        <p>
          The website is hosted by Vercel Inc.<br />
          340 S Lemon Ave #4133<br />
          Walnut, CA 91789<br />
          United States
        </p>
      ),
    },
    {
      number: '3',
      title: isFr ? 'Propriété intellectuelle' : 'Intellectual Property',
      content: isFr ? (
        <p>
          L&apos;ensemble de ce site relève des législations tunisienne et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents iconographiques et photographiques.
        </p>
      ) : (
        <p>
          This entire site is governed by Tunisian and international copyright and intellectual property laws. All reproduction rights are reserved, including for images and photographic documents.
        </p>
      ),
    },
    {
      number: '4',
      title: isFr ? 'Responsabilité' : 'Liability',
      content: isFr ? (
        <p>
          {siteConfig.name} s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis. Toutefois, {siteConfig.name} ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site.
        </p>
      ) : (
        <p>
          {siteConfig.name} strives to ensure the accuracy and currency of the information published on this site and reserves the right to correct the content at any time without notice. However, {siteConfig.name} cannot guarantee the accuracy, precision, or completeness of the information made available on this site.
        </p>
      ),
    },
    {
      number: '5',
      title: isFr ? 'Conception & Développement' : 'Design & Development',
      content: isFr ? (
        <p>
          Ce site a été conçu et développé par :<br />
          <strong>{siteConfig.developer.name}</strong><br />
          Site web : <a href={siteConfig.developer.website} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{siteConfig.developer.website}</a><br />
          Email : {siteConfig.developer.email}<br />
          Téléphone : {siteConfig.developer.phone}
        </p>
      ) : (
        <p>
          This website was designed and developed by:<br />
          <strong>{siteConfig.developer.name}</strong><br />
          Website: <a href={siteConfig.developer.website} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{siteConfig.developer.website}</a><br />
          Email: {siteConfig.developer.email}<br />
          Phone: {siteConfig.developer.phone}
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
            {isFr ? 'Mentions Légales' : 'Legal Notices'}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            {isFr
              ? "Informations légales concernant l'éditeur du site et l'hébergement."
              : 'Legal information regarding the site publisher and hosting.'}
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
