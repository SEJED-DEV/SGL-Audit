import { getDictionary } from '@/lib/get-dictionary'
import Link from 'next/link'
import { Briefcase, Users, Scale, BarChart3, ChevronRight, Mail, Phone, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'fr')

  const services = [
    {
      title: dict.services.accounting,
      icon: <Briefcase className="h-8 w-8" />,
      description: lang === 'fr'
        ? "Tenue de comptabilité, révision et établissement des comptes annuels."
        : "Bookkeeping, review and preparation of annual accounts.",
    },
    {
      title: dict.services.social,
      icon: <Users className="h-8 w-8" />,
      description: lang === 'fr'
        ? "Gestion de la paie, déclarations sociales et conseil en droit social."
        : "Payroll management, social declarations and social law advice.",
    },
    {
      title: dict.services.legal,
      icon: <Scale className="h-8 w-8" />,
      description: lang === 'fr'
        ? "Secrétariat juridique, création de société et conseil fiscal."
        : "Legal secretariat, company creation and tax advice.",
    },
    {
      title: dict.services.consulting,
      icon: <BarChart3 className="h-8 w-8" />,
      description: lang === 'fr'
        ? "Tableaux de bord, reporting et accompagnement à la gestion."
        : "Dashboards, reporting and management support.",
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-secondary/20 dark:bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary dark:text-white mb-6">
              {dict.hero.title}
            </h1>
            <p className="text-xl text-accent dark:text-zinc-400 mb-10 leading-relaxed">
              {dict.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-primary text-primary-foreground font-semibold transition-all hover:bg-primary/90"
              >
                {dict.hero.cta}
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md border border-accent/20 bg-white/50 backdrop-blur-sm dark:bg-white/5 text-primary dark:text-white font-semibold transition-all hover:bg-white/80 dark:hover:bg-white/10"
              >
                {dict.navigation.services}
              </Link>
            </div>
          </div>
        </div>
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-success/10 rounded-full blur-3xl"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.services.title}</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-6 text-primary dark:text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-sm text-accent dark:text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link href="#contact" className="text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:text-primary transition-colors">
                  {lang === 'fr' ? 'En savoir plus' : 'Learn more'} <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/10 dark:bg-zinc-950/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-full h-[400px] bg-accent/20 rounded-2xl overflow-hidden">
                  <div className="flex items-center justify-center h-full text-accent/40 font-bold text-2xl uppercase tracking-widest">
                    SGL Audit Team
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary text-primary-foreground p-8 rounded-2xl hidden md:flex flex-col justify-center">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-sm font-medium uppercase tracking-tight">
                    {lang === 'fr' ? 'Années d’expérience' : 'Years of Experience'}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {lang === 'fr'
                  ? "Votre succès est notre priorité"
                  : "Your success is our priority"}
              </h2>
              <p className="text-lg text-accent dark:text-zinc-400 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? "SGL Audit est un cabinet d'expertise comptable indépendant qui accompagne les créateurs d'entreprise, les professions libérales et les dirigeants de PME. Notre approche repose sur la proximité, la réactivité et un conseil sur-mesure."
                  : "SGL Audit is an independent accounting firm that supports business creators, liberal professions and SME managers. Our approach is based on proximity, responsiveness and tailor-made advice."}
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  lang === 'fr' ? "Accompagnement personnalisé" : "Personalized support",
                  lang === 'fr' ? "Expertise technique pluridisciplinaire" : "Multidisciplinary technical expertise",
                  lang === 'fr' ? "Outils digitaux performants" : "Powerful digital tools",
                  lang === 'fr' ? "Réactivité et disponibilité" : "Responsiveness and availability"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-success"></div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md border-2 border-primary text-primary dark:text-white font-bold transition-all hover:bg-primary hover:text-white"
              >
                {lang === 'fr' ? "Notre Histoire" : "Our Story"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                {lang === 'fr' ? 'Contactez-nous' : 'Contact Us'}
              </h2>
              <p className="text-lg text-accent dark:text-zinc-400 mb-12 leading-relaxed">
                {lang === 'fr'
                  ? "Une question ? Un projet ? N'hésitez pas à nous contacter via le formulaire ou directement par email."
                  : "A question? A project? Don't hesitate to contact us via the form or directly by email."}
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 uppercase text-xs tracking-widest text-accent">Email</h4>
                    <a href="mailto:directeur@sglaudit.com" className="text-xl font-bold hover:text-primary transition-colors">
                      directeur@sglaudit.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 uppercase text-xs tracking-widest text-accent">Phone</h4>
                    <p className="text-xl font-bold">+33 1 00 00 00 00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 uppercase text-xs tracking-widest text-accent">Address</h4>
                    <p className="text-xl font-bold leading-tight">
                      75000 Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 sm:p-12 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
              <ContactForm lang={lang} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
