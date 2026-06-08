import { getDictionary } from '@/lib/get-dictionary'
import { HeroSlider } from '@/components/HeroSlider'
import { Services } from '@/components/Services'
import { InvestInTunisia } from '@/components/InvestInTunisia'
import { ExtraServices } from '@/components/ExtraServices'
import { ContactForm } from '@/components/ContactForm'
import { siteConfig } from '@/config/site'
import { Mail, Phone, MapPin, Globe } from 'lucide-react'

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
      <InvestInTunisia lang={lang} />
      <ExtraServices lang={lang} />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-black border-t border-slate-100 dark:border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">
                {lang === 'fr' ? 'Contactez-nous' : 'Contact Us'}
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded mb-8"></div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                {lang === 'fr'
                  ? "Une question ? Un projet ? N'hésitez pas à nous contacter via le formulaire ou directement par email."
                  : "A question? A project? Don't hesitate to contact us via the form or directly by email."}
              </p>

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
                    <h4 className="font-bold mb-1 uppercase text-xs tracking-widest text-slate-500">Phone / WhatsApp</h4>
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block mb-1">
                      {siteConfig.contact.phone}
                    </a>
                    <a href={`tel:${siteConfig.contact.phone2.replace(/\s+/g, '')}`} className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block mb-1">
                      {siteConfig.contact.phone2}
                    </a>
                    <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer" className="text-md font-semibold text-green-600 hover:text-green-500 transition-colors">
                      {siteConfig.contact.whatsapp}
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
            
            <div className="bg-slate-50 dark:bg-zinc-900 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-xl">
              <ContactForm lang={lang} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
