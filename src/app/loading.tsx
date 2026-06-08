import { Loader2 } from 'lucide-react'

export default function RootLoading() {
  return (
    <main className="min-h-screen bg-white dark:bg-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col items-center gap-6 relative z-10">
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center">
            <Loader2 className="w-7 h-7 text-blue-600 animate-spin" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">SGL Audit</p>
          <div className="flex gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </main>
  )
}
