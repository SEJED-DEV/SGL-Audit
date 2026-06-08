import { blogs } from '@/config/blogs'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { ShareButtons } from '@/components/ShareButtons'

function renderContent(text: string) {
  return text.split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) {
      return <h2 key={i} className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-4">{block.replace('## ', '')}</h2>
    }
    const lines = block.split('\n')
    if (lines.every(l => l.startsWith('- '))) {
      return (
        <ul key={i} className="list-disc pl-6 text-lg text-slate-600 dark:text-slate-400 mb-6 space-y-2">
          {lines.map((line, j) => <li key={j}>{line.replace('- ', '')}</li>)}
        </ul>
      )
    }
    return <p key={i} className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 mb-6">{block}</p>
  })
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  const post = blogs.find((b) => b.slug === slug)

  if (!post) return {}

  const title = post.title[lang as 'en' | 'fr']
  const description = post.excerpt[lang as 'en' | 'fr']

  return {
    title,
    description,
    alternates: {
      canonical: `https://sglaudit.com/${lang}/blogs/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  const post = blogs.find((b) => b.slug === slug)

  if (!post) {
    notFound()
  }

  const title = post.title[lang as 'en' | 'fr']
  const content = post.content[lang as 'en' | 'fr']
  const relatedPosts = blogs.filter((b) => b.slug !== slug).sort(() => 0.5 - Math.random()).slice(0, 3)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    author: { '@type': 'Person', name: post.author },
    datePublished: post.date,
    description: post.excerpt[lang as 'en' | 'fr'],
    url: `https://sglaudit.com/${lang}/blogs/${slug}`,
  }

  return (
    <div className="py-24 bg-white dark:bg-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <Link
          href={`/${lang}/blogs`}
          className="inline-flex items-center gap-2 text-sm font-bold mb-12 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {lang === 'fr' ? 'Retour aux articles' : 'Back to posts'}
        </Link>

        <article>
          <header className="mb-12">
            <div className="flex items-center gap-6 text-sm font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-widest mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {title}
            </h1>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 dark:[&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-slate-600 dark:[&_p]:text-slate-400 [&_p]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-lg [&_ul]:text-slate-600 dark:[&_ul]:text-slate-400 [&_ul]:mb-6 [&_ul]:space-y-2">
            {renderContent(content)}
          </div>

          <ShareButtons
            url={`https://sglaudit.com/${lang}/blogs/${slug}`}
            title={title}
          />
        </article>

        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200 dark:border-zinc-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              {lang === 'fr' ? 'Articles connexes' : 'Related posts'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${lang}/blogs/${p.slug}`}
                  className="group p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-500 mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{p.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm leading-snug">
                    {p.title[lang as 'en' | 'fr']}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return blogs.flatMap((post) => [
    { lang: 'en', slug: post.slug },
    { lang: 'fr', slug: post.slug },
  ])
}
