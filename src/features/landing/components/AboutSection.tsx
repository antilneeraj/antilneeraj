import { CornerBrackets } from './CornerBrackets'
import SkillsOrbit from './SkillsOrbit'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

export function AboutSection() {
  const { ref: headingRef, isRevealed: headingRevealed } =
    useScrollReveal<HTMLDivElement>('about-heading')
  const { ref: cardRef, isRevealed: cardRevealed } = useScrollReveal<HTMLDivElement>('about-card')

  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl scroll-mt-16 px-4 py-[clamp(96px,10vw,128px)]"
    >
      {/* Section Heading */}
      <div className="relative mb-12" ref={headingRef}>
        <p
          className={`font-jetbrains mb-2 text-xs uppercase tracking-widest text-[#4D4A3F] transition-opacity duration-500 ${headingRevealed ? 'opacity-100' : 'opacity-0'}`}
        >
          // PERSONNEL FILE
        </p>
        <h2
          className={`font-rajdhani relative inline-block text-[clamp(1.5rem,3vw,2.5rem)] font-semibold uppercase text-[#C9A84C] transition-opacity duration-500 ${headingRevealed ? 'opacity-100' : 'opacity-0'}`}
        >
          PERSONNEL FILE
          <span
            className="absolute -bottom-1 left-0 h-0.5 transition-[width] delay-200 duration-500"
            style={{
              width: headingRevealed ? '48px' : '0px',
              backgroundImage: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            }}
          />
        </h2>
      </div>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-24">
        {/* Left: Identity Card */}
        <div
          ref={cardRef}
          className={`relative rounded border border-[rgba(201,168,76,0.25)] bg-[#1C2E1F] p-8 shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] transition-all duration-[800ms] ${cardRevealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <CornerBrackets />

          <div className="mb-6 flex flex-row items-center justify-evenly gap-4">
            <div className="relative h-40 w-36 shrink-0 overflow-hidden rounded border border-[#C9A84C]/30 bg-[#1C2E1F] shadow-[0_0_15px_rgba(201,168,76,0.15)]">
              <img
                src="https://raw.githubusercontent.com/antilneeraj/antilneeraj/refs/heads/main/src/assets/avatar.png"
                alt="Neeraj Antil Profile"
                className="object-fit brightness-120 aspect-square h-full w-full mix-blend-multiply contrast-125 grayscale"
              />

              {/* Optional: Add a scanline overlay just for the image to make it look like a screen */}
              <div className="scanlines absolute inset-0 opacity-50 mix-blend-overlay" />
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-jetbrains text-[0.65rem] text-[#4D4A3F]">
                ID: NA-221 · ROLL: 221
              </span>
              <h3 className="font-rajdhani text-[1.8rem] font-bold text-[#F5F0E8]">NEERAJ ANTIL</h3>
              <span className="font-exo text-[0.95rem] font-normal text-[#E8E0CC]">
                Frontend Developer & UI/UX Designer
              </span>
              <span className="font-exo text-[0.85rem] font-light text-[#8A8068]">
                &#x26B2; Haryana, India
              </span>
              <span className="font-jetbrains mt-1 flex items-center text-[0.8rem] text-[#C9A84C]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-90"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span className="pl-1">neerajantil.dev</span>
              </span>
            </div>
          </div>

          <div
            className="mb-6 h-[1px] w-full opacity-60"
            style={{ backgroundImage: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
          />

          <p className="font-exo max-w-[56ch] text-[0.9rem] font-normal leading-relaxed text-[#8A8068]">
            Currently building the web — one carefully engineered pixel at a time. Specializing in
            responsive interfaces, interactive experiences, and the kind of UI/UX that makes users
            feel something. Site under active development. Stay on standby.
          </p>
        </div>

        {/* Right: Skills Orbit */}
        <div className="flex min-h-[420px] w-full items-center justify-center">
          <SkillsOrbit />
        </div>
      </div>
    </section>
  )
}
