'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: "Expert-comptable à Tunis pour entrepreneurs, freelances et sociétés",
    description: "Cabinet d’expertise comptable à Tunis spécialisé en création d’entreprise, gestion comptable et optimisation fiscale pour dirigeants.",
    image: "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    button: "Découvrir nos services",
    href: "#expertises"
  },
  {
    id: 2,
    title: "Investisseur ou entrepreneur ?",
    description: "Vous souhaitez créer, reprendre une activité ou lancer une start-up en Tunisie ? Bénéficiez d’un accompagnement comptable, fiscal et juridique complet.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    button: "Démarrer votre projet",
    href: "#investir"
  },
  {
    id: 3,
    title: "Formalités & démarches",
    description: "Notre cabinet vous accompagne dans toutes les formalités de création d’entreprise en Tunisie : immatriculation rapide, obtention du SIREN / SIRET, domiciliation, ouverture de compte bancaire professionnel et conformité fiscale. Simplifiez vos démarches et lancez votre activité en toute sérénité.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    button: "Voir les formalités",
    href: "#formalites"
  }
]

export function HeroSlider({ lang, dict }: { lang: string, dict: any }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-slate-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />

          {/* Content */}
          <div className="relative h-full flex items-center container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-in slide-in-from-bottom-8 duration-700">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 animate-in slide-in-from-bottom-8 duration-700 delay-150">
                {slide.description}
              </p>
              <div className="animate-in slide-in-from-bottom-8 duration-700 delay-300">
                <Link
                  href={`/${lang}${slide.href}`}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-500 hover:shadow-xl hover:-translate-y-1"
                >
                  {slide.button}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-blue-500 w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
