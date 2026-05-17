import { useAppStore } from '@/shared/stores/app.store'

export function HeroSection() {
  const isLoading = useAppStore((s) => s.isLoading)
  const revealed = !isLoading

  return (
    <section className="topo-bg relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 md:px-16">
      {/* Scanline overlay */}
      <div className="scanlines pointer-events-none absolute inset-0 z-20" />

      {/* Coordinates / Location Info */}
      <div
        className={`font-jetbrains absolute left-4 top-8 z-10 flex flex-col gap-1 text-[12px] font-medium leading-[1.2] tracking-[0.1em] text-[#8A8068] transition-opacity duration-700 md:left-16 ${revealed ? 'opacity-100' : 'opacity-0'}`}
      >
        <span>COORD: 28.9845° N, 77.0197° E</span>
        <span>SECTOR: HARYANA — INDIA</span>
      </div>

      {/* Central Focus — bracket-bordered card */}
      <div
        className={`bracket-container bracket-tl bracket-br relative z-10 mt-12 flex w-full max-w-4xl flex-col items-center border border-[#2D4030] bg-[#0D1A0F]/80 p-8 text-center backdrop-blur-sm transition-all duration-1000 md:p-16 ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
      >
        <span className="font-jetbrains mb-4 text-[14px] font-medium leading-[1.2] tracking-[0.1em] text-[#C9A84C] opacity-80">
          FRONTEND DEVELOPER · UI/UX ENGINEER
        </span>

        {/* Horizontal divider with diamond */}
        <div className="relative my-4 h-px w-full bg-[#2D4030]">
          <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#C9A84C]" />
        </div>

        <h1
          className={`font-rajdhani text-[32px] font-bold uppercase leading-[1.1] tracking-[-0.02em] text-[#C9A84C] drop-shadow-md transition-all duration-800 md:text-[48px] ${revealed ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-4 opacity-0'}`}
        >
          NEERAJ ANTIL
        </h1>

        {/* Horizontal divider with diamond */}
        <div className="relative my-4 h-px w-full bg-[#2D4030]">
          <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#C9A84C]" />
        </div>

        <p
          className={`font-exo mx-auto mt-6 max-w-2xl text-[18px] font-normal leading-[1.6] text-[#d0c5b2] transition-opacity duration-700 ${revealed ? 'opacity-100 delay-500' : 'opacity-0'}`}
        >
          AWAITING DEPLOYMENT ORDERS. PORTFOLIO SYSTEMS CURRENTLY UNDERGOING INITIALIZATION AND
          CALIBRATION SEQUENCE. STAND BY.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[#C9A84C] transition-opacity duration-700 ${revealed ? 'opacity-60 delay-700' : 'opacity-0'}`}
      >
        <span className="font-jetbrains text-[12px] font-medium leading-[1.2] tracking-[0.15em]">
          SCROLL TO PROCEED
        </span>
        <svg
          className="h-6 w-6 animate-[bounceChevron_1.8s_ease-in-out_infinite]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
