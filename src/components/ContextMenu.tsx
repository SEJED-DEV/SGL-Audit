'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

interface ContextMenuProps {
  lang: string
}

interface MenuItem {
  label: string
  href: string
  separator?: boolean
}

export function ContextMenu({ lang }: ContextMenuProps) {
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<{ x: number; y: number; visible: boolean }>({
    x: 0,
    y: 0,
    visible: false,
  })

  const close = useCallback(() => {
    setState((prev) => ({ ...prev, visible: false }))
  }, [])

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      const x = Math.min(e.clientX, window.innerWidth - 220)
      const y = Math.min(e.clientY, window.innerHeight - 400)
      setState({ x, y, visible: true })
    }

    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        close()
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }

    const handleScroll = () => close()

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('scroll', handleScroll)
    }
  }, [close])

  const isActive = (href: string) => {
    if (href === '/') return pathname === `/${lang}` || pathname === `/${lang}/`
    return pathname.startsWith(`/${lang}${href}`)
  }

  const items: MenuItem[] = [
    ...siteConfig.navigation.map((item) => ({
      label: item.name[lang as keyof typeof item.name] || item.name['fr'],
      href: `/${lang}${item.href}`,
    })),
    { label: '', href: '#', separator: true },
    { label: lang === 'fr' ? 'Mentions légales' : 'Legal notices', href: `/${lang}/mentions-legales` },
    { label: lang === 'fr' ? 'Politique de confidentialité' : 'Privacy policy', href: `/${lang}/politique-confidentialite` },
    { label: '', href: '#', separator: true },
    { label: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
    { label: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/\s+/g, '')}` },
  ]

  if (!state.visible) return null

  return (
    <div
      ref={menuRef}
      style={{ left: state.x, top: state.y }}
      className="fixed z-[100] w-56 rounded-xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-2xl ring-1 ring-slate-900/10 dark:ring-white/10 overflow-hidden py-1.5"
    >
      {items.map((item, i) => {
        if (item.separator) {
          return <div key={i} className="h-px bg-slate-200 dark:bg-zinc-800 my-1.5 mx-2" />
        }
        if (item.href.startsWith('mailto:') || item.href.startsWith('tel:')) {
          return (
            <a
              key={i}
              href={item.href}
              onClick={close}
              className="flex items-center gap-2 px-4 py-2 text-xs text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {item.label}
            </a>
          )
        }
        const active = isActive(item.href.replace(`/${lang}`, ''))
        return (
          <Link
            key={i}
            href={item.href}
            onClick={close}
            className={cn(
              'flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors',
              active
                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-800'
            )}
          >
            <span className={cn('w-1 h-1 rounded-full shrink-0', active ? 'bg-blue-600 dark:bg-blue-400' : 'bg-transparent')} />
            {item.label}
          </Link>
        )
      })}
    </div>
  )
}
