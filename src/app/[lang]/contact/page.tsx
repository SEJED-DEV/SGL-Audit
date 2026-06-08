import { siteConfig } from '@/config/site'
import { ContactForm } from '@/components/ContactForm'
import type { Metadata } from 'next'
import { Mail, Phone, MapPin, MessageCircle, Globe } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const title = lang === 'fr' ? 'Contact - Cabinet d\'Expertise Comptable à Tunis' : 'Contact - Accounting Firm in Tunis'
  const description = lang === 'fr'
    ? "Contactez notre cabinet d'expertise comptable à Tunis Bab Khadhra. Tél: 98 297 521 / 90 475 235. Email: direction@sglaudit.com."
    : "Contact our accounting firm in Tunis Bab Khadhra. Phone: +216 98 297 521 / +216 90 475 235. Email: direction@sglaudit.com."
  return {
    title,
    description,
    alternates: {
      canonical: `https://sglaudit.tn/${lang}/contact`,
    },
    openGraph: { title, description },
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">
      {/* Hero */}
      <section className="min-h-[100dvh] flex items-center pt-24 pb-20 bg-gradient-to-br from-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contactez-nous
          </h1>
          <div className="h-1 w-24 bg-blue-400 rounded mx-auto mb-8" />
          <p className="text-xl text-slate-300 leading-relaxed">
            Une question ? Un projet ? N'hésitez pas à nous contacter via le formulaire ou directement par email ou téléphone.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                Nos coordonnées
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold mb-1 uppercase text-xs tracking-widest text-slate-500">Email</h4>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold mb-1 uppercase text-xs tracking-widest text-slate-500">Site web</h4>
                    <a href={siteConfig.website} target="_blank" rel="noreferrer" className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      sglaudit.tn
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold mb-1 uppercase text-xs tracking-widest text-slate-500">Téléphone / WhatsApp</h4>
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block mb-1">
                      {siteConfig.contact.phone}
                    </a>
                    <a href={`tel:${siteConfig.contact.phone2.replace(/\s+/g, '')}`} className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block mb-1">
                      {siteConfig.contact.phone2}
                    </a>
                    <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-md font-semibold text-green-600 hover:text-green-500 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      Discuter par WhatsApp
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold mb-1 uppercase text-xs tracking-widest text-slate-500">Adresse</h4>
                    <a href={siteConfig.location.googleMapsLink} target="_blank" rel="noreferrer" className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors leading-tight">
                      {siteConfig.location.address}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-zinc-950 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Envoyez-nous un message</h3>
              <ContactForm lang={lang} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
