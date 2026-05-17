export interface SkillOrbit {
  index: number
  radius: number // Diameter of circular orbit in px
  duration: number // Animation duration in seconds
  skills: { name: string; icon: string }[]
}

export const SKILL_ORBITS: SkillOrbit[] = [
  {
    index: 0,
    radius: 120,
    duration: 15,
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'Java', icon: 'openjdk' },
      { name: 'PostgreSQL', icon: 'postgresql' },
    ],
  },
  {
    index: 1,
    radius: 200,
    duration: 25,
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'Tailwind', icon: 'tailwindcss' },
      { name: 'Figma', icon: 'figma' },
    ],
  },
  {
    index: 2,
    radius: 280,
    duration: 35,
    skills: [
      { name: 'Docker', icon: 'docker' },
      { name: 'SVG', icon: 'svg' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
    ],
  },
]
