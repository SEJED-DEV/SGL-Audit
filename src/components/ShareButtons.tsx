'use client'

import { Share2 } from 'lucide-react'

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const links = [
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bg: 'hover:bg-[#1877F2]',
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      bg: 'hover:bg-[#0A66C2]',
    },
    {
      name: 'WhatsApp',
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      bg: 'hover:bg-[#25D366]',
    },
    {
      name: 'X',
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      bg: 'hover:bg-black dark:hover:bg-white',
    },
  ]

  return (
    <div className="flex items-center gap-3 pt-8 mt-12 border-t border-slate-200 dark:border-zinc-800">
      <Share2 className="w-4 h-4 text-slate-400" />
      <div className="flex gap-2">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-400 ${link.bg} hover:text-white transition-colors`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  )
}
