import rankInsigniaUrl from '@/assets/rank-insignia.svg'

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-[rgba(201,168,76,0.25)] bg-[#0D1A0F] py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-4 px-4">
        <div className="flex items-center gap-3">
          <img src={rankInsigniaUrl} alt="Rank Insignia" className="h-[20px] w-[20px] opacity-80" />
          <span className="font-rajdhani text-sm font-semibold tracking-widest text-[#E8E0CC]">
            NEERAJ ANTIL
          </span>
        </div>

        <p className="font-jetbrains text-[0.65rem] uppercase tracking-widest text-[#4D4A3F]">
          © 2026 neerajantil.dev · ALL SYSTEMS PENDING DEPLOYMENT
        </p>
      </div>
    </footer>
  )
}
