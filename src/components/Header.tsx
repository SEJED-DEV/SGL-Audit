'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSwitcher } from './LanguageSwitcher'
import { siteConfig } from '@/config/site'
import { Mail, Phone, MessageCircle, ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeaderProps {
  lang: string
  dict: any
}

export function Header({ lang, dict }: HeaderProps) {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
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
  })

  return (
    <>
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 flex flex-col items-center transition-all duration-500",
          isScrolled || mobileMenuOpen ? "bg-white/95 dark:bg-zinc-900/95 shadow-lg backdrop-blur-md py-4" : "bg-transparent py-6"
        )}
      >
        <div className="flex items-center justify-between w-full max-w-7xl px-4 sm:px-6">
          <Link href={`/${lang}`} className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} Logo`}
              width={140}
              height={46}
              className={cn(
                "h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105 bg-white rounded-2xl p-1.5 shadow-sm",
                ""
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.navigation.map((item, index) => {
              const itemName = item.name[lang as keyof typeof item.name] || item.name['fr']
              
              if (item.children) {
                return (
                  <div 
                    key={index}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(itemName)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium transition-colors",
                      isScrolled ? "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-zinc-800" : "text-white hover:bg-white/20"
                    )}>
                      {itemName}
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === itemName && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full pt-4"
                        >
                          <div className="w-64 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-900/5 dark:bg-zinc-900 dark:ring-white/10">
                            {item.children.map((child, i) => (
                              <Link
                                key={i}
                                href={`/${lang}${child.href}`}
                                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-zinc-800 dark:hover:text-white transition-colors"
                              >
                                {child.name[lang as keyof typeof child.name] || child.name['fr']}
                              </Link>
                            ))}
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
                    "px-4 py-2 text-[15px] font-medium transition-colors rounded-lg",
                    isScrolled ? "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-zinc-800" : "text-white hover:bg-white/10"
                  )}
                >
                  {itemName}
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <LanguageSwitcher />
            </div>
            <ThemeToggle />
            <Link
              href={`/${lang}/contact`}
              className="hidden md:inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              Contactez-nous
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              className={cn("lg:hidden p-2 rounded-full", isScrolled || mobileMenuOpen ? "text-slate-900 dark:text-white" : "text-white")}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="fixed inset-0 z-40 bg-white dark:bg-black pt-32 px-6 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 text-xl font-semibold">
              {siteConfig.navigation.map((item, index) => {
                const itemName = item.name[lang as keyof typeof item.name] || item.name['fr']
                
                if (item.children) {
                  return (
                    <div key={index} className="flex flex-col gap-4">
                      <div className="text-blue-600 dark:text-blue-400">{itemName}</div>
                      <div className="flex flex-col gap-4 pl-4 border-l-2 border-slate-100 dark:border-zinc-800">
                        {item.children.map((child, i) => (
                          <Link
                            key={i}
                            href={`/${lang}${child.href}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-lg font-medium text-slate-600 dark:text-slate-400"
                          >
                            {child.name[lang as keyof typeof child.name] || child.name['fr']}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }

                return (
                  <Link 
                    key={index} 
                    href={`/${lang}${item.href}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-900 dark:text-white"
                  >
                    {itemName}
                  </Link>
                )
              })}
              
              <div className="mt-8 pt-8 border-t border-slate-100 dark:border-zinc-800 flex flex-col gap-6">
                <LanguageSwitcher />
                <Link
                  href={`/${lang}/contact`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-center text-lg font-bold text-white shadow-lg"
                >
                  Contactez-nous
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
