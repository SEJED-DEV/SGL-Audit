import { getDictionary } from '@/lib/get-dictionary'
import { blogs } from '@/config/blogs'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

export default async function BlogsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'fr')

  return (
    <div className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">{dict.navigation.blogs}</h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((post) => (
            <Link
              key={post.id}
              href={`/${lang}/blogs/${post.slug}`}
              className="group flex flex-col h-full border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="h-48 bg-accent/10 flex items-center justify-center">
                <Calendar className="h-12 w-12 text-accent/30 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs font-bold text-accent dark:text-zinc-500 uppercase tracking-widest mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {post.title[lang as 'en' | 'fr']}
                </h2>
                <p className="text-sm text-accent dark:text-zinc-400 mb-8 flex-1 leading-relaxed">
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
