import { siteConfig } from '@/config/site'
import { blogs } from '@/config/blogs'
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'

export const metadata = {
  title: `Blog - ${siteConfig.name}`,
  description: "Actualités, conseils et informations sur la comptabilité, la fiscalité et la gestion d'entreprise.",
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">
      {/* Hero */}
      <section className="min-h-[100dvh] flex items-center pt-24 pb-20 bg-gradient-to-br from-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1432828610004-1653a1c09a59?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="w-16 h-16 rounded-2xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center mx-auto mb-8">
            <BookOpen className="w-8 h-8 text-blue-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Notre Blog
          </h1>
          <div className="h-1 w-24 bg-blue-400 rounded mx-auto mb-8" />
          <p className="text-xl text-slate-300 leading-relaxed">
            Actualités, conseils et informations sur la comptabilité, la fiscalité et la gestion d'entreprise.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <article key={post.id} className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800 overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="p-8 flex-1 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center justify-between">
                    <span>{new Date(post.date).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-2">
                    {lang === 'fr' ? post.title.fr : post.title.en}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1 line-clamp-3">
                    {lang === 'fr' ? post.excerpt.fr : post.excerpt.en}
                  </p>
                  <Link href={`/${lang}/blog/${post.slug}`} className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group mt-auto">
                    Lire la suite
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
