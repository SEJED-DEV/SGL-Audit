"use client"

import { useState } from 'react'

export function ContactForm({ lang }: { lang: string }) {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send the data to an API
    // Here we just simulate success and potentially open mailto
    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const mailtoUrl = `mailto:directeur@sglaudit.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${name} (${email})`
    window.location.href = mailtoUrl

    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="p-8 bg-success/10 border border-success rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">
          {lang === 'fr' ? 'Merci !' : 'Thank you!'}
        </h3>
        <p>
          {lang === 'fr'
            ? "Votre message a été préparé dans votre application de messagerie."
            : "Your message has been prepared in your email client."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider mb-2">
            {lang === 'fr' ? 'Nom' : 'Name'}
          </label>
          <input
            required
            name="name"
            type="text"
            className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider mb-2">
            {lang === 'fr' ? 'Email' : 'Email'}
          </label>
          <input
            required
            name="email"
            type="email"
            className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold uppercase tracking-wider mb-2">
          {lang === 'fr' ? 'Message' : 'Message'}
        </label>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-all uppercase tracking-widest"
      >
        {lang === 'fr' ? 'Envoyer' : 'Send'}
      </button>
    </form>
  )
}
