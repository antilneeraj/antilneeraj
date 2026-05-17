import { useEffect, useState, useCallback } from 'react'
import { useAppStore } from '@/shared/stores/app.store'
import rankInsigniaUrl from '@/assets/rank-insignia.svg'

export function LoadingScreen() {
  const isLoading = useAppStore((s) => s.isLoading)
  const loadingPhase = useAppStore((s) => s.loadingPhase)
  const setLoadingPhase = useAppStore((s) => s.setLoadingPhase)
  const completeLoading = useAppStore((s) => s.completeLoading)

  const [typedText1, setTypedText1] = useState('')
  const [typedText2, setTypedText2] = useState('')
  const [progress1, setProgress1] = useState(0)
  const [progress2, setProgress2] = useState(0)

  const line1 = 'INITIALIZING PORTFOLIO...'
  const line2 = 'NEERAJ ANTIL'

  const isReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false

  // Phase sequencer
  const runSequence = useCallback(() => {
    if (isReducedMotion) {
      completeLoading()
      return
    }

    const timers: ReturnType<typeof setTimeout>[] = []

    // Phase 1: Noise + scanlines (0.5s)
    timers.push(setTimeout(() => setLoadingPhase(1 as const), 500))
    // Phase 2: Grid overlay (1.2s)
    timers.push(setTimeout(() => setLoadingPhase(2 as const), 1200))
    // Phase 3: Emblem reveal (1.8s)
    timers.push(setTimeout(() => setLoadingPhase(3 as const), 1800))
    // Phase 4: Typewriter text (2.6s)
    timers.push(setTimeout(() => setLoadingPhase(4 as const), 2600))
    // Phase 5: Progress bars (3.4s)
    timers.push(setTimeout(() => setLoadingPhase(5 as const), 3400))
    // Phase 6: Slide out (4.5s)
    timers.push(setTimeout(() => setLoadingPhase(6 as const), 4500))
    // Phase 7: Complete (5.3s)
    timers.push(setTimeout(() => completeLoading(), 5300))

    return () => timers.forEach(clearTimeout)
  }, [isReducedMotion, setLoadingPhase, completeLoading])

  useEffect(() => {
    const cleanup = runSequence()
    return cleanup
  }, [runSequence])

  // Typewriter effect for phase 4
  useEffect(() => {
    if (loadingPhase < 4) return
    let idx = 0
    const t = setInterval(() => {
      idx++
      setTypedText1(line1.slice(0, idx))
      if (idx >= line1.length) {
        clearInterval(t)
        let idx2 = 0
        const t2 = setInterval(() => {
          idx2++
          setTypedText2(line2.slice(0, idx2))
          if (idx2 >= line2.length) clearInterval(t2)
        }, 45)
      }
    }, 35)
    return () => clearInterval(t)
  }, [loadingPhase >= 4]) // eslint-disable-line react-hooks/exhaustive-deps

  // Progress bar animation for phase 5
  useEffect(() => {
    if (loadingPhase < 5) return
    const dur = 600
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const elapsed = now - start
      const p = Math.min(elapsed / dur, 1)
      setProgress1(p * 100)
      setProgress2(Math.min((elapsed - 100) / dur, 1) * 100)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [loadingPhase >= 5]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!isLoading && loadingPhase === 7) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: '#0D1A0F',
        animation:
          loadingPhase >= 6 ? 'slideUpOut 0.8s cubic-bezier(0.76, 0, 0.24, 1) forwards' : undefined,
      }}
    >
      {/* Phase 1: Noise texture */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: loadingPhase >= 1 ? 0.08 : 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Phase 1: Scan line */}
      {loadingPhase >= 1 && (
        <div
          className="pointer-events-none absolute left-0 h-[2px] w-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)',
            animation: 'scanDown 1.5s ease-in-out infinite',
            top: '-2px',
          }}
        />
      )}

      {/* Phase 2: Grid */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: loadingPhase >= 2 ? 0.4 : 0,
          backgroundSize: '64px 64px',
          backgroundImage:
            'linear-gradient(to right, #2D4030 1px, transparent 1px), linear-gradient(to bottom, #2D4030 1px, transparent 1px)',
        }}
      />

      {/* Phase 3+: Central content */}
      <div
        className="relative z-10 flex flex-col items-center transition-all duration-500"
        style={{
          opacity: loadingPhase >= 3 ? 1 : 0,
          transform: loadingPhase >= 6 ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        {/* Emblem */}
        <div
          className="mb-6 h-24 w-24"
          style={{ filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.4))' }}
        >
          <img src={rankInsigniaUrl} alt="Rank Insignia" className="h-full w-full object-contain" />
        </div>

        {/* Phase 4: Typed text */}
        <div className="flex min-h-[56px] flex-col items-center justify-center">
          {loadingPhase >= 4 && (
            <>
              <p className="font-jetbrains mb-2 text-[11px] uppercase tracking-[0.15em] text-[#8A8068]">
                {typedText1}
                {typedText1.length < line1.length && (
                  <span className="ml-0.5 animate-pulse">▌</span>
                )}
              </p>
              {typedText1.length >= line1.length && (
                <h1 className="font-rajdhani text-[24px] font-bold uppercase tracking-[0.05em] text-[#C9A84C]">
                  {typedText2}
                  {typedText2.length < line2.length && (
                    <span className="ml-0.5 animate-pulse">▌</span>
                  )}
                </h1>
              )}
            </>
          )}
        </div>

        {/* Phase 5: Progress bars */}
        {loadingPhase >= 5 && (
          <div className="mt-8 flex w-56 flex-col gap-3">
            <div>
              <div className="font-jetbrains mb-1 flex justify-between text-[10px] text-[#8A8068]">
                <span>SYSTEM CHECK</span>
                <span>{Math.round(Math.max(progress1, 0))}%</span>
              </div>
              <div className="h-[3px] w-full overflow-hidden bg-[#2D4030]">
                <div
                  className="h-full bg-[#C9A84C] transition-none"
                  style={{ width: `${Math.max(progress1, 0)}%` }}
                />
              </div>
            </div>
            <div>
              <div className="font-jetbrains mb-1 flex justify-between text-[10px] text-[#8A8068]">
                <span>SECURE CONN.</span>
                <span>{Math.round(Math.max(progress2, 0))}%</span>
              </div>
              <div className="h-[3px] w-full overflow-hidden bg-[#2D4030]">
                <div
                  className="h-full bg-[#4A7C59] transition-none"
                  style={{ width: `${Math.max(progress2, 0)}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
