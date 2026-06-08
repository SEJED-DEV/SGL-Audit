import { getDictionary } from '@/lib/get-dictionary'
import { blogs } from '@/config/blogs'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Calendar, ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const title = lang === 'fr' ? 'Blog - Articles Comptabilité & Fiscalité' : 'Blog - Accounting & Tax Articles'
  const description = lang === 'fr'
    ? "Retrouvez tous nos articles sur la comptabilité, la fiscalité et la gestion d'entreprise en Tunisie."
    : "Find all our articles on accounting, taxation and business management in Tunisia."
  return {
    title,
    description,
    alternates: {
      canonical: `https://sglaudit.com/${lang}/blogs`,
    },
    openGraph: { title, description },
  }
}

export default async function BlogsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'fr')
  const isFr = lang === 'fr'

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isFr ? 'Accueil' : 'Home', item: `https://sglaudit.com/${lang}` },
      { '@type': 'ListItem', position: 2, name: isFr ? 'Blog' : 'Blog', item: `https://sglaudit.com/${lang}/blogs` },
    ],
  }

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: blogs.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://sglaudit.com/${lang}/blogs/${post.slug}`,
      name: post.title[lang as 'en' | 'fr'],
    })),
  }

  return (
    <div className="py-24 bg-white dark:bg-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">{dict.navigation.blogs}</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((post) => (
            <Link
              key={post.id}
              href={`/${lang}/blogs/${post.slug}`}
              className="group flex flex-col h-full border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="h-48 bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                <Calendar className="h-12 w-12 text-slate-300 dark:text-zinc-600 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-widest mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="text-xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title[lang as 'en' | 'fr']}
                </h2>
                <p className="text-sm text-slate-600 dark:text-zinc-400 mb-8 flex-1 leading-relaxed">
                  {post.excerpt[lang as 'en' | 'fr']}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all">
                  {lang === 'fr' ? 'Lire la suite' : 'Read more'} <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
