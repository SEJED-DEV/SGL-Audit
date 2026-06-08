'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function ContactForm({ lang }: { lang: string }) {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const mailtoUrl = `mailto:direction@sglaudit.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${name} (${email})`
    window.location.href = mailtoUrl

    setStatus('success')
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-2xl text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle className="w-8 h-8 text-green-600" />
        </motion.div>
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
          {lang === 'fr' ? 'Merci !' : 'Thank you!'}
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          {lang === 'fr'
            ? 'Votre message a été préparé dans votre application de messagerie.'
            : 'Your message has been prepared in your email client.'}
        </p>
      </motion.div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.form
        key="form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="group">
            <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-slate-700 dark:text-slate-300">
              {lang === 'fr' ? 'Nom' : 'Name'}
            </label>
            <input
              required
              name="name"
              type="text"
              className="w-full px-4 py-3.5 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 dark:text-white placeholder-slate-400"
              placeholder={lang === 'fr' ? 'Votre nom' : 'Your name'}
            />
          </div>
          <div className="group">
            <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-slate-700 dark:text-slate-300">
              Email
            </label>
            <input
              required
              name="email"
              type="email"
              className="w-full px-4 py-3.5 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 dark:text-white placeholder-slate-400"
              placeholder="email@example.com"
            />
          </div>
        </div>
        <div className="group">
          <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-slate-700 dark:text-slate-300">
            {lang === 'fr' ? 'Message' : 'Message'}
          </label>
          <textarea
            required
            name="message"
            rows={5}
            className="w-full px-4 py-3.5 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 dark:text-white placeholder-slate-400 resize-none"
            placeholder={lang === 'fr' ? 'Votre message...' : 'Your message...'}
          />
        </div>
        <button
          type="submit"
          className="group w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
        >
          {lang === 'fr' ? 'Envoyer' : 'Send'}
          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </motion.form>
    </AnimatePresence>
  )
}
