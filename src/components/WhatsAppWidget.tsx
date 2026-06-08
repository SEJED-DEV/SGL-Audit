'use client'

import { siteConfig } from '@/config/site'
import { MessageCircle } from 'lucide-react'

export function WhatsAppWidget() {
  return (
    <a
      href={siteConfig.contact.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:bg-green-400 transition-all hover:scale-110 active:scale-95 animate-bounce"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
