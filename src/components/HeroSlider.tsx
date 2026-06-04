'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const slides = [
  {
    id: 1,
    title: "Expert-comptable à Tunis pour entrepreneurs, freelances et sociétés",
    description: "Cabinet d'expertise comptable à Tunis spécialisé en création d'entreprise, gestion comptable et optimisation fiscale pour dirigeants.",
    image: "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    button: "Découvrir nos services",
    href: "/nos-expertises"
  },
  {
    id: 2,
    title: "Investisseur ou entrepreneur ?",
    description: "Vous souhaitez créer, reprendre une activité ou lancer une start-up en Tunisie ? Bénéficiez d'un accompagnement comptable, fiscal et juridique complet.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    button: "Démarrer votre projet",
    href: "/investir-en-tunisie"
  },
  {
    id: 3,
    title: "Formalités & démarches",
    description: "Notre cabinet vous accompagne dans toutes les formalités de création d'entreprise en Tunisie : immatriculation rapide, obtention du SIREN / SIRET, domiciliation, ouverture de compte bancaire professionnel et conformité fiscale. Simplifiez vos démarches et lancez votre activité en toute sérénité.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    button: "Voir les formalités",
    href: "/formalites"
  }
]

export function HeroSlider({ lang, dict }: { lang: string, dict: any }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-slate-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Background Image with animated overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-transparent" />
          
          {/* Decorative glowing orb */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px] pointer-events-none"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }}
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight"
              >
                {slides[current].title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed"
              >
                {slides[current].description}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  href={`/${lang}${slides[current].href}`}
                  className={cn(
                    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all hover:bg-blue-500 hover:shadow-2xl hover:-translate-y-1",
                    "before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:bg-white/20 before:transition-transform before:duration-500 hover:before:translate-x-[-150%]"
                  )}
                >
                  {slides[current].button}
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modern Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="group relative flex h-4 w-4 items-center justify-center"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span 
              className={cn(
                "absolute h-2 w-2 rounded-full bg-white/50 transition-all duration-300 ease-out group-hover:bg-white/80",
                index === current && "h-2 w-8 bg-blue-500"
              )} 
            />
          </button>
        ))}
      </div>
    </div>
  )
}
