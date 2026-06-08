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
      canonical: `https://sglaudit.com/${lang}/contact`,
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
  const isFr = lang === 'fr'

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">
      <section className="min-h-[60vh] flex items-center pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {isFr ? 'Contactez-nous' : 'Contact Us'}
          </h1>
          <div className="h-1 w-24 bg-blue-400 rounded-full mx-auto mb-8" />
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {isFr
              ? "Une question ? Un projet ? N'hésitez pas à nous contacter via le formulaire ou directement par email ou téléphone."
              : 'A question? A project? Feel free to contact us via the form or directly by email or phone.'}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                {isFr ? 'Nos coordonnées' : 'Our Details'}
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
                    <h4 className="font-bold mb-1 uppercase text-xs tracking-widest text-slate-500">{isFr ? 'Site web' : 'Website'}</h4>
                    <a href={siteConfig.website} target="_blank" rel="noreferrer" className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      sglaudit.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold mb-1 uppercase text-xs tracking-widest text-slate-500">
                      {isFr ? 'Téléphone / WhatsApp' : 'Phone / WhatsApp'}
                    </h4>
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block mb-1">
                      {siteConfig.contact.phone}
                    </a>
                    <a href={`tel:${siteConfig.contact.phone2.replace(/\s+/g, '')}`} className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block mb-1">
                      {siteConfig.contact.phone2}
                    </a>
                    <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-md font-semibold text-green-600 hover:text-green-500 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      {isFr ? 'Discuter par WhatsApp' : 'Chat on WhatsApp'}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold mb-1 uppercase text-xs tracking-widest text-slate-500">
                      {isFr ? 'Adresse' : 'Address'}
                    </h4>
                    <a href={siteConfig.location.googleMapsLink} target="_blank" rel="noreferrer" className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors leading-tight">
                      {siteConfig.location.address}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-zinc-800 shadow-xl h-64">
                <iframe
                  src="https://www.google.com/maps?q=Bab+Khadhra+Tunis&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SGL Audit - Bab Khadhra, Tunis"
                />
              </div>
              <div className="bg-slate-50 dark:bg-zinc-950 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-xl">
                <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
                  {isFr ? 'Envoyez-nous un message' : 'Send us a message'}
                </h3>
                <ContactForm lang={lang} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
