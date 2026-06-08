import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SGL Audit",
  other: {
    'google-site-verification': 'google-site-verification',
    'theme-color': '#1e40af',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=yes',
    'referrer': 'origin-when-cross-origin',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://sglaudit.com/#website',
      url: 'https://sglaudit.com',
      name: 'SGL Audit',
      description: "Cabinet d'expertise comptable à Tunis",
      inLanguage: ['fr', 'en'],
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://sglaudit.com/fr/blog?search={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://sglaudit.com/#organization',
      url: 'https://sglaudit.com',
      name: 'SGL Audit',
      description: "Société d'expertise comptable inscrite au tableau de l'Ordre des Experts Comptables de Tunisie.",
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bab Khadhra',
        addressLocality: 'Tunis',
        addressCountry: 'TN',
        postalCode: '1006',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+216-98-297-521',
          contactType: 'sales',
          availableLanguage: ['French', 'English', 'Arabic'],
        },
      ],
      sameAs: [
        'https://tn.linkedin.com/in/ridha-trabelsi-a34229173',
        'https://www.facebook.com/cabinet.ridha.trabelsi',
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://sglaudit.com" />
        <link rel="preload" href="/logo.png" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
