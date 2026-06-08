import { blogs } from '@/config/blogs'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

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

  return (
    <div className="py-24 bg-white dark:bg-black min-h-screen">
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

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl leading-relaxed text-slate-600 dark:text-zinc-400">
              {content}
            </p>
          </div>
        </article>
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
