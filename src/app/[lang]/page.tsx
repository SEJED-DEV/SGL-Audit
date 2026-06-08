import { getDictionary } from '@/lib/get-dictionary'
import { HeroSlider } from '@/components/HeroSlider'
import { Services } from '@/components/Services'
import { InvestInTunisia } from '@/components/InvestInTunisia'
import { ExtraServices } from '@/components/ExtraServices'
import { StatsSection } from '@/components/StatsSection'
import { IndustriesSection } from '@/components/IndustriesSection'
import { AboutSection } from '@/components/AboutSection'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { BlogSection } from '@/components/BlogSection'
import { ContactForm } from '@/components/ContactForm'
import { siteConfig } from '@/config/site'
import { Mail, Phone, MapPin, Globe, MessageCircle } from 'lucide-react'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'fr')

  return (
    <div className="flex flex-col">
      <HeroSlider lang={lang} dict={dict} />
      <Services lang={lang} />
      <StatsSection lang={lang} />
      <InvestInTunisia lang={lang} />
      <IndustriesSection lang={lang} />
      <ExtraServices lang={lang} />
      <AboutSection lang={lang} />
      <Testimonials lang={lang} />
      <FAQ lang={lang} />
      <BlogSection lang={lang} />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                {lang === 'fr' ? 'Contactez-nous' : 'Contact Us'}
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded mb-8" />
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                {lang === 'fr'
                  ? "Une question ? Un projet ? N'hésitez pas à nous contacter via le formulaire ou directement par email."
                  : "A question? A project? Don't hesitate to contact us via the form or directly by email."}
              </p>

              <div className="space-y-6">
                <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-0.5 uppercase text-xs tracking-widest text-slate-500">{lang === 'fr' ? 'Email' : 'Email'}</h4>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-lg font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-0.5 uppercase text-xs tracking-widest text-slate-500">{lang === 'fr' ? 'Site web' : 'Website'}</h4>
                    <a href={siteConfig.website} target="_blank" rel="noreferrer" className="text-lg font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      sglaudit.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-0.5 uppercase text-xs tracking-widest text-slate-500">{lang === 'fr' ? 'Téléphone / WhatsApp' : 'Phone / WhatsApp'}</h4>
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-lg font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block">
                      {siteConfig.contact.phone}
                    </a>
                    <a href={`tel:${siteConfig.contact.phone2.replace(/\s+/g, '')}`} className="text-lg font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block">
                      {siteConfig.contact.phone2}
                    </a>
                    <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 hover:text-green-500 transition-colors mt-1">
                      <MessageCircle className="w-4 h-4" />
                      {lang === 'fr' ? 'Discuter par WhatsApp' : 'Chat on WhatsApp'}
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-0.5 uppercase text-xs tracking-widest text-slate-500">{lang === 'fr' ? 'Adresse' : 'Address'}</h4>
                    <a href={siteConfig.location.googleMapsLink} target="_blank" rel="noreferrer" className="text-lg font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors leading-tight">
                      {siteConfig.location.address}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-zinc-900 dark:to-zinc-900 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-xl shadow-blue-500/5">
              <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
                {lang === 'fr' ? 'Envoyez-nous un message' : 'Send us a message'}
              </h3>
              <ContactForm lang={lang} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
