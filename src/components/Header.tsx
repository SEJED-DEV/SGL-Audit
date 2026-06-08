'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSwitcher } from './LanguageSwitcher'
import { siteConfig } from '@/config/site'
import { Mail, Phone, ChevronDown, Menu, X, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeaderProps {
  lang: string
  dict: any
}

export function Header({ lang, dict }: HeaderProps) {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [showTopBar, setShowTopBar] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    setIsScrolled(latest > 50)
    setShowTopBar(latest < 80)
  })

  const isActive = (href: string) => {
    if (href === '/') return pathname === `/${lang}` || pathname === `/${lang}/`
    return pathname.startsWith(`/${lang}${href}`)
  }

  const isChildActive = (children: { href: string }[]) => {
    return children.some(child => pathname.startsWith(`/${lang}${child.href}`))
  }

  const closeMobile = () => setMobileMenuOpen(false)

  return (
    <>
      {/* Top Bar */}
      <motion.div
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: '-100%', opacity: 0 },
        }}
        animate={showTopBar && !mobileMenuOpen ? 'visible' : 'hidden'}
        transition={{ duration: 0.3 }}
        className="fixed top-0 inset-x-0 z-[60] h-9 bg-slate-900/90 dark:bg-black/90 backdrop-blur-md border-b border-white/5"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px]">
            <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1.5">
              <Phone className="w-3 h-3" />
              {siteConfig.contact.phone}
            </a>
            <span className="text-slate-700">|</span>
            <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1.5">
              <Mail className="w-3 h-3" />
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-green-400 transition-colors inline-flex items-center gap-1.5 text-[11px]">
              <MessageCircle className="w-3 h-3" />
              WhatsApp
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden && !mobileMenuOpen ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={cn(
          'fixed inset-x-0 z-50 flex flex-col items-center transition-all duration-500',
          isScrolled || mobileMenuOpen
            ? 'bg-white/95 dark:bg-zinc-900/95 shadow-lg backdrop-blur-md py-2.5'
            : 'bg-transparent py-3',
          showTopBar ? 'top-9' : 'top-0'
        )}
      >
        <div className="flex items-center justify-between w-full max-w-7xl px-4 sm:px-6">
          <Link href={`/${lang}`} className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} Logo`}
              width={130}
              height={43}
              className={cn(
                'h-9 w-auto object-contain transition-all duration-300 group-hover:scale-105 bg-white rounded-xl p-1 shadow-sm'
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {siteConfig.navigation.map((item, index) => {
              const itemName = item.name[lang as keyof typeof item.name] || item.name['fr']
              const active = isActive(item.href)
              const childActive = item.children ? isChildActive(item.children) : false

              if (item.children) {
                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(itemName)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={cn(
                        'flex items-center gap-1 rounded-lg px-3 xl:px-4 py-2 text-[14px] font-medium transition-colors relative',
                        isScrolled
                          ? 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-zinc-800'
                          : 'text-white/90 hover:text-white hover:bg-white/10',
                        (active || childActive) && (isScrolled ? 'text-blue-600 dark:text-blue-400' : 'text-white')
                      )}
                    >
                      {itemName}
                      <ChevronDown className={cn(
                        'h-3.5 w-3.5 transition-transform duration-200',
                        activeDropdown === itemName && 'rotate-180'
                      )} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === itemName && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full pt-3"
                        >
                          <div className="w-56 rounded-xl bg-white p-2 shadow-xl ring-1 ring-slate-900/5 dark:bg-zinc-900 dark:ring-white/10 overflow-hidden">
                            {item.children.map((child, i) => {
                              const childActive = pathname.startsWith(`/${lang}${child.href}`)
                              return (
                                <Link
                                  key={i}
                                  href={`/${lang}${child.href}`}
                                  className={cn(
                                    'block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors',
                                    childActive
                                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-zinc-800 dark:hover:text-white'
                                  )}
                                >
                                  {child.name[lang as keyof typeof child.name] || child.name['fr']}
                                </Link>
                              )
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <Link
                  key={index}
                  href={`/${lang}${item.href}`}
                  className={cn(
                    'relative px-3 xl:px-4 py-2 text-[14px] font-medium transition-colors rounded-lg',
                    isScrolled
                      ? 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-zinc-800'
                      : 'text-white/90 hover:text-white hover:bg-white/10',
                    active && (isScrolled
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-white bg-white/10')
                  )}
                >
                  {itemName}
                  {active && (
                    <motion.span
                      layoutId="activeNav"
                      className={cn(
                        'absolute -bottom-0.5 left-2 right-2 h-0.5 rounded-full',
                        isScrolled ? 'bg-blue-600' : 'bg-white'
                      )}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <div className="hidden sm:flex items-center gap-1.5">
              <LanguageSwitcher />
            </div>
            <ThemeToggle />
            <Link
              href={`/${lang}/contact`}
              className={cn(
                'hidden md:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95',
                isScrolled
                  ? 'bg-blue-600 hover:bg-blue-500'
                  : 'bg-blue-600/90 hover:bg-blue-600'
              )}
            >
              Contact
            </Link>

            <button
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors',
                isScrolled || mobileMenuOpen ? 'text-slate-900 dark:text-white' : 'text-white'
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/98 dark:bg-zinc-950/98 backdrop-blur-lg pt-28 px-6 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-2 max-w-lg mx-auto">
              {siteConfig.navigation.map((item, index) => {
                const itemName = item.name[lang as keyof typeof item.name] || item.name['fr']
                const active = isActive(item.href)

                if (item.children) {
                  return (
                    <div key={index} className="border-b border-slate-100 dark:border-zinc-800 pb-4 mb-2">
                      <div className={cn(
                        'text-sm font-semibold uppercase tracking-wider mb-3 px-3',
                        isChildActive(item.children)
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-slate-400 dark:text-slate-500'
                      )}>
                        {itemName}
                      </div>
                      <div className="flex flex-col gap-1 pl-3 border-l-2 border-blue-100 dark:border-blue-900/50 ml-3">
                        {item.children.map((child, i) => {
                          const childActive = pathname.startsWith(`/${lang}${child.href}`)
                          return (
                            <Link
                              key={i}
                              href={`/${lang}${child.href}`}
                              onClick={closeMobile}
                              className={cn(
                                'rounded-lg px-4 py-3 text-base font-medium transition-colors',
                                childActive
                                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                                  : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-zinc-800'
                              )}
                            >
                              {child.name[lang as keyof typeof child.name] || child.name['fr']}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={index}
                    href={`/${lang}${item.href}`}
                    onClick={closeMobile}
                    className={cn(
                      'rounded-lg px-4 py-3.5 text-lg font-semibold transition-colors',
                      active
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                        : 'text-slate-900 hover:bg-slate-50 dark:text-white dark:hover:bg-zinc-800'
                    )}
                  >
                    {itemName}
                  </Link>
                )
              })}

              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-zinc-800 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
                <Link
                  href={`/${lang}/contact`}
                  onClick={closeMobile}
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-4 text-center text-base font-bold text-white shadow-lg"
                >
                  Contactez-nous
                </Link>
                <div className="flex items-center justify-center gap-4 pt-2 pb-8">
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-sm text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    {siteConfig.contact.phone}
                  </a>
                  <span className="text-slate-300 dark:text-zinc-700">|</span>
                  <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer" className="text-sm text-slate-500 hover:text-green-600 dark:hover:text-green-400 transition-colors inline-flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
