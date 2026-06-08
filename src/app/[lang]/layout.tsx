import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContextMenu } from "@/components/ContextMenu";
import { getDictionary } from "@/lib/get-dictionary";
import { siteConfig } from "@/config/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params

  const title = lang === 'fr'
    ? "SGL Audit - Cabinet d'Expertise Comptable à Tunis"
    : "SGL Audit - Accounting Firm in Tunis"

  const description = lang === 'fr'
    ? "Cabinet d'expertise comptable inscrit à l'Ordre des Experts Comptables de Tunisie. Création d'entreprise, comptabilité, fiscalité, paie et conseil juridique à Tunis."
    : "Accounting firm registered with the Order of Chartered Accountants of Tunisia. Business creation, accounting, tax, payroll and legal consulting in Tunis."

  return {
    title: {
      default: title,
      template: `%s | SGL Audit`,
    },
    description,
    metadataBase: new URL('https://sglaudit.com'),
    alternates: {
      canonical: `https://sglaudit.com/${lang}`,
      languages: {
        'fr': 'https://sglaudit.com/fr',
        'en': 'https://sglaudit.com/en',
      },
    },

    icons: {
      icon: '/logo.png',
      apple: '/logo.png',
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      locale: lang === 'fr' ? 'fr_FR' : 'en_US',
      alternateLocale: lang === 'fr' ? 'en_US' : 'fr_FR',
      siteName: siteConfig.name,
      title,
      description,
      url: `https://sglaudit.com/${lang}`,
      images: [{ url: 'https://sglaudit.com/logo.png', width: 160, height: 53 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://sglaudit.com/logo.png'],
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'fr');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: siteConfig.name,
    description: siteConfig.description,
    url: `https://sglaudit.com/${lang}`,
    telephone: [siteConfig.contact.phone, siteConfig.contact.phone2],
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bab Khadhra',
      addressLocality: 'Tunis',
      addressCountry: 'TN',
      postalCode: '1006',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Tunisia',
    },
    priceRange: '$$',
    sameAs: [
      siteConfig.social.linkedin,
    ],
    image: 'https://sglaudit.com/logo.png',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Providers>
        <ContextMenu lang={lang} />
        <Header lang={lang} dict={dict} />
        <div className="flex-1">
          {children}
        </div>
        <Footer lang={lang} dict={dict} />
      </Providers>
    </>
  );
}
