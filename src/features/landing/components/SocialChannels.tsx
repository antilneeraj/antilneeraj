import { CornerBrackets } from './CornerBrackets'
import { useScrollReveal } from '../hooks/use-scroll-reveal'

export function SocialChannels() {
  const { ref: headingRef, isRevealed: headingRevealed } =
    useScrollReveal<HTMLDivElement>('channels-heading')
  const { ref: cardsRef, isRevealed: cardsRevealed } =
    useScrollReveal<HTMLDivElement>('channels-cards')

  const channels = [
    {
      id: 'github',
      label: 'REPOSITORY',
      username: '@antilneeraj',
      description: 'Open source contributions and project source code.',
      cta: 'VIEW DEPLOYMENTS',
      url: 'https://github.com/antilneeraj',
      iconUrl: 'https://cdn.simpleicons.org/github/E8E0CC',
    },
    {
      id: 'linkedin',
      label: 'PROFESSIONAL RECORD',
      username: 'Neeraj Antil',
      description: 'Career timeline, endorsements, and professional network.',
      cta: 'ACCESS PROFILE',
      url: 'https://linkedin.com/in/neerajantil',
      iconUrl: 'src/assets/linkedin.svg',
    },
  ]

  return (
    <section id="channels" className="mx-auto w-full max-w-7xl px-4 py-24">
      {/* Section Heading */}
      <div className="relative mb-12" ref={headingRef}>
        <p
          className={`font-jetbrains mb-2 text-xs uppercase tracking-widest text-[#4D4A3F] transition-opacity duration-500 ${headingRevealed ? 'opacity-100' : 'opacity-0'}`}
        >
          // COMMUNICATION
        </p>
        <h2
          className={`font-rajdhani relative inline-block text-[clamp(1.5rem,3vw,2.5rem)] font-semibold uppercase text-[#C9A84C] transition-opacity duration-500 ${headingRevealed ? 'opacity-100' : 'opacity-0'}`}
        >
          CHANNELS
          <span
            className="absolute -bottom-1 left-0 h-0.5 transition-[width] delay-200 duration-500"
            style={{
              width: headingRevealed ? '48px' : '0px',
              backgroundImage: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            }}
          />
        </h2>
      </div>

      {/* Social Cards */}
      <div
        ref={cardsRef}
        className={`grid grid-cols-1 gap-6 transition-all duration-[800ms] md:grid-cols-2 ${cardsRevealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      >
        {channels.map((channel, i) => (
          <a
            key={channel.id}
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-full cursor-pointer flex-col rounded border border-[rgba(201,168,76,0.25)] bg-[#122115] p-7 transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[rgba(201,168,76,0.8)] hover:shadow-[0_0_20px_rgba(201,168,76,0.12)] md:p-8"
            style={{ transitionDelay: cardsRevealed ? `${i * 100}ms` : '0ms' }}
          >
            <CornerBrackets />

            <div className="mb-6 flex items-center gap-4">
              <img src={channel.iconUrl} alt={channel.id} className="h-9 w-9" />
              <span className="font-rajdhani text-[0.75rem] font-semibold uppercase tracking-wider text-[#8A8068]">
                {channel.label}
              </span>
            </div>

            <h4 className="font-jetbrains mb-2 text-[0.9rem] font-normal text-[#C9A84C]">
              {channel.username}
            </h4>

            <p className="font-exo mb-6 flex-grow text-[0.85rem] font-light text-[#8A8068]">
              {channel.description}
            </p>

            <div className="mt-auto flex items-center gap-2">
              <span className="font-exo text-[0.85rem] font-medium text-[#C9A84C] decoration-transparent decoration-1 underline-offset-4 transition-colors group-hover:underline group-hover:decoration-[#C9A84C]">
                {channel.cta}
              </span>
              <span className="text-[#C9A84C] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
