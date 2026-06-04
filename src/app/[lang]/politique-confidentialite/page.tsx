import { siteConfig } from '@/config/site'

export const metadata = {
  title: `Politique de Confidentialité - ${siteConfig.name}`,
  description: 'Politique de confidentialité et protection des données personnelles.',
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">
      <section className="pt-40 pb-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Politique de Confidentialité</h1>
          <p className="text-xl text-slate-300">Comment nous protégeons et gérons vos données personnelles.</p>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl prose prose-slate dark:prose-invert lg:prose-lg">
          <h2>1. Collecte des données personnelles</h2>
          <p>
            Nous collectons les données personnelles que vous nous fournissez volontairement lors de l'utilisation de nos services, notamment via le formulaire de contact ou lors d'échanges directs (email, téléphone, WhatsApp). Les données collectées peuvent inclure : nom, prénom, adresse email, numéro de téléphone, et toute information liée à votre projet professionnel.
          </p>

          <h2>2. Utilisation des données</h2>
          <p>
            Les informations recueillies sont nécessaires pour :
          </p>
          <ul>
            <li>Répondre à vos demandes de renseignements et de devis.</li>
            <li>Fournir les services d'expertise comptable, juridique et fiscale demandés.</li>
            <li>Gérer la relation client et le suivi des dossiers.</li>
            <li>Vous informer de nos actualités ou évolutions réglementaires (avec votre accord).</li>
          </ul>

          <h2>3. Protection et sécurité des données</h2>
          <p>
            {siteConfig.name} s'engage à mettre en œuvre toutes les mesures techniques et organisationnelles nécessaires afin de garantir la sécurité et la confidentialité de vos données à caractère personnel et empêcher qu'elles ne soient déformées, endommagées ou que des tiers non autorisés y aient accès.
          </p>

          <h2>4. Conservation des données</h2>
          <p>
            Vos données personnelles sont conservées pour la durée strictement nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, dans le respect de la législation en vigueur.
          </p>

          <h2>5. Vos droits</h2>
          <p>
            Conformément à la réglementation applicable en matière de protection des données, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant. Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <strong>{siteConfig.contact.email}</strong>.
          </p>
        </div>
      </section>
    </main>
  )
}
