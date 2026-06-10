import Image from 'next/image'

const letters = [
  { char: 'S', delay: 0 },
  { char: 'G', delay: 60 },
  { char: 'L', delay: 120 },
]

const auditLetters = [
  { char: 'A', delay: 220 },
  { char: 'u', delay: 270 },
  { char: 'd', delay: 320 },
  { char: 'i', delay: 370 },
  { char: 't', delay: 420 },
]

export default function RootLoading() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center overflow-hidden selection:bg-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 dark:bg-blue-500/[0.06] rounded-full blur-[120px] pointer-events-none animate-ambient-glow" />

      <div className="absolute top-[15%] right-[20%] w-3 h-3 rounded-full bg-blue-400/15 dark:bg-blue-400/10 pointer-events-none animate-float" />
      <div className="absolute bottom-[20%] left-[15%] w-2 h-2 rotate-45 bg-violet-400/15 dark:bg-violet-400/10 pointer-events-none animate-float-reverse" />
      <div className="absolute top-[30%] left-[25%] w-1.5 h-1.5 rounded-full bg-indigo-400/10 dark:bg-indigo-400/8 pointer-events-none animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute bottom-[35%] right-[18%] w-2.5 h-2.5 rotate-12 bg-blue-400/10 dark:bg-blue-400/8 pointer-events-none animate-float-reverse" style={{ animationDelay: '-5s' }} />

      <div className="flex flex-col items-center gap-10 relative z-10">
        <div className="flex flex-col items-center gap-5">
          <div className="animate-zoom-in">
            <div className="relative w-24 h-24 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,theme(colors.blue.500/30),transparent,theme(colors.violet.500/30),transparent)] animate-spin-slower" />
              <div className="absolute inset-[2px] rounded-[10px] bg-white dark:bg-zinc-900 flex items-center justify-center p-3 z-10">
                <Image
                  src="/logo.png"
                  alt="SGL Audit"
                  width={130}
                  height={43}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <h1 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
              <span className="flex">
                {letters.map(({ char, delay }) => (
                  <span
                    key={char}
                    className="animate-letter text-slate-800 dark:text-slate-100"
                    style={{ animationDelay: `${delay}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
              <span className="text-slate-300 dark:text-zinc-700 animate-letter" style={{ animationDelay: '160ms' }}>
                |
              </span>
              <span className="flex">
                {auditLetters.map(({ char, delay }) => (
                  <span
                    key={char}
                    className="animate-letter bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer-text"
                    style={{ animationDelay: `${delay}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h1>

            <p className="text-xs text-slate-400 dark:text-slate-500 tracking-[0.2em] uppercase animate-letter" style={{ animationDelay: '500ms' }}>
              Expertise comptable
            </p>
          </div>
        </div>

        <div className="flex items-end gap-[3px] h-6 animate-letter" style={{ animationDelay: '600ms' }}>
          {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((height, i) => (
            <span
              key={i}
              className="w-[3px] rounded-full bg-gradient-to-t from-blue-500 to-violet-500 dark:from-blue-400 dark:to-violet-400 origin-bottom animate-equalizer"
              style={{
                height: `${height * 4}px`,
                animationDelay: `${i * 80}ms`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-px bg-slate-200/50 dark:bg-zinc-800/50">
        <div className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500/70 to-transparent animate-line-sweep" />
      </div>
    </main>
  )
}
