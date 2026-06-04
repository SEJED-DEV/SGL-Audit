import { siteConfig } from '@/config/site'
import { ExtraServices } from '@/components/ExtraServices'

export const metadata = {
  title: `Formalités - ${siteConfig.name}`,
  description: "Démarches administratives, recrutement, résidence et séjour.",
}

export default async function FormalitesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">
      {/* Hero */}
      <section className="min-h-[100dvh] flex items-center pt-24 pb-20 bg-gradient-to-br from-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Formalités & Démarches
          </h1>
          <div className="h-1 w-24 bg-blue-400 rounded mx-auto mb-8" />
          <p className="text-xl text-slate-300 leading-relaxed">
            Un accompagnement complet pour sécuriser vos processus administratifs complexes.
          </p>
        </div>
      </section>

      {/* Reusing the ExtraServices component */}
      <ExtraServices lang={lang} />
    </main>
  )
}
