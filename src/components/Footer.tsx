import Link from 'next/link'
import Image from 'next/image'

interface FooterProps {
  lang: string
  dict: any
}

export function Footer({ lang, dict }: FooterProps) {
  return (
    <footer className="border-t bg-secondary/30 dark:bg-zinc-950 dark:border-zinc-800">
      <div className="container mx-auto py-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href={`/${lang}`} className="inline-block">
              <Image
                src="/logo.png"
                alt="SGL Audit Logo"
                width={150}
                height={50}
                className="h-12 w-auto object-contain dark:invert mb-6"
              />
            </Link>
            <p className="text-sm text-accent dark:text-zinc-400 max-w-sm">
              SGL Audit est votre partenaire de confiance pour l'expertise comptable, le conseil et l'audit. Nous accompagnons les entreprises dans leur croissance et leur succès.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-6 uppercase text-sm tracking-wider">{dict.navigation.services}</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-accent hover:text-primary dark:text-zinc-400 dark:hover:text-white">{dict.services.accounting}</Link></li>
              <li><Link href="#" className="text-sm text-accent hover:text-primary dark:text-zinc-400 dark:hover:text-white">{dict.services.social}</Link></li>
              <li><Link href="#" className="text-sm text-accent hover:text-primary dark:text-zinc-400 dark:hover:text-white">{dict.services.legal}</Link></li>
              <li><Link href="#" className="text-sm text-accent hover:text-primary dark:text-zinc-400 dark:hover:text-white">{dict.services.consulting}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6 uppercase text-sm tracking-wider">{dict.navigation.contact}</h3>
            <ul className="space-y-4">
              <li className="text-sm text-accent dark:text-zinc-400">
                Email: <a href="mailto:directeur@sglaudit.com" className="hover:text-primary dark:hover:text-white">directeur@sglaudit.com</a>
              </li>
              <li className="text-sm text-accent dark:text-zinc-400">
                Paris, France
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t dark:border-zinc-800 text-center text-xs text-accent dark:text-zinc-500">
          © {new Date().getFullYear()} SGL Audit. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
