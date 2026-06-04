import { siteConfig } from '@/config/site'

export const metadata = {
  title: `Mentions Légales - ${siteConfig.name}`,
  description: 'Mentions légales et conditions générales d\'utilisation.',
}

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">
      <section className="pt-40 pb-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mentions Légales</h1>
          <p className="text-xl text-slate-300">Informations légales concernant l'éditeur du site et l'hébergement.</p>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl prose prose-slate dark:prose-invert lg:prose-lg">
          <h2>1. Éditeur du site</h2>
          <p>
            Le site <strong>{siteConfig.url}</strong> est édité par :<br />
            <strong>{siteConfig.name}</strong><br />
            Siège social : {siteConfig.location.address}<br />
            Téléphone : {siteConfig.contact.phone}<br />
            Email : {siteConfig.contact.email}
          </p>

          <h2>2. Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc.<br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789<br />
            États-Unis
          </p>

          <h2>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève des législations tunisienne et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents iconographiques et photographiques.
          </p>

          <h2>4. Responsabilité</h2>
          <p>
            {siteConfig.name} s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis. Toutefois, {siteConfig.name} ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
          </p>
        </div>
      </section>
    </main>
  )
}
