import { useState } from 'react'
import { useScrollReveal } from '../hooks/use-scroll-reveal'
import { SKILL_ORBITS } from '../constants/skills'

/**
 * SkillsOrbit — Animated circular orbital visualization.
 *
 * Key design decisions:
 * - Orbit ring divs are rendered ONLY as visual dashed circles (no children).
 * - Skill nodes are rendered as siblings OUTSIDE the orbit divs to prevent
 *   clipping by border-radius: 50% (which was hiding tooltips on inner orbits).
 * - Each node wrapper gets its own spin animation matching its orbit.
 * - The icon inside counter-spins to stay upright.
 * - Hovering a node pauses only that orbit's nodes, not all orbits.
 */

// Orbit diameters (match CSS .orbit-1/2/3)
const ORBIT_DIAMETERS = [160, 270, 380]
const ORBIT_DURATIONS = [18, 28, 38]
const ORBIT_DIRECTIONS: Array<'normal' | 'reverse'> = ['normal', 'reverse', 'normal']

export default function SkillsOrbit() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>('skills-orbit', 0.2)
  const [pausedOrbit, setPausedOrbit] = useState<number | null>(null)

  return (
    <div
      ref={ref}
      className={`orbit-container transition-opacity duration-1000 ${isRevealed ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Central core */}
      <div className="central-core">
        <span className="font-jetbrains text-[16px] font-bold">&lt;/&gt;</span>
      </div>

      {/* Orbit rings — purely visual, no children */}
      {SKILL_ORBITS.map((orbit) => {
        const d = ORBIT_DIAMETERS[orbit.index]
        const dur = ORBIT_DURATIONS[orbit.index]
        const dir = ORBIT_DIRECTIONS[orbit.index]
        const isPaused = pausedOrbit === orbit.index

        return (
          <div
            key={`ring-${orbit.index}`}
            className="orbit-ring"
            style={{
              width: d,
              height: d,
              animationDuration: `${dur}s`,
              animationDirection: dir,
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          />
        )
      })}

      {/* Skill nodes — rendered outside orbit divs to avoid border-radius clipping */}
      {SKILL_ORBITS.map((orbit) => {
        const d = ORBIT_DIAMETERS[orbit.index]
        const r = d / 2
        const dur = ORBIT_DURATIONS[orbit.index]
        const dir = ORBIT_DIRECTIONS[orbit.index]
        const isPaused = pausedOrbit === orbit.index

        return orbit.skills.map((skill, skillIdx) => {
          const angle = (360 / orbit.skills.length) * skillIdx - 90
          const angleRad = (angle * Math.PI) / 180
          const x = Math.cos(angleRad) * r
          const y = Math.sin(angleRad) * r

          return (
            <div
              key={skill.name}
              className="skill-node-wrapper"
              style={{
                // Position at center, then offset to orbit position
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                animationDuration: `${dur}s`,
                animationDirection: dir,
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              <div
                className={`skill-node orbit-tier-${orbit.index + 1}`}
                style={{
                  animationDuration: `${dur}s`,
                  animationDirection: dir === 'reverse' ? 'normal' : 'reverse',
                  animationPlayState: isPaused ? 'paused' : 'running',
                }}
                onMouseEnter={() => setPausedOrbit(orbit.index)}
                onMouseLeave={() => setPausedOrbit(null)}
                onTouchStart={() => setPausedOrbit(orbit.index)}
                onTouchEnd={() => setPausedOrbit(null)}
              >
                <img
                  src={`https://cdn.simpleicons.org/${skill.icon}/E8E0CC`}
                  alt={skill.name}
                  className="pointer-events-none h-[18px] w-[18px]"
                />
                <span className="skill-tooltip">{skill.name}</span>
              </div>
            </div>
          )
        })
      })}
    </div>
  )
}
