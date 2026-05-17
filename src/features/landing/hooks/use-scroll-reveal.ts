import { useEffect, useRef } from 'react'
import { useAppStore } from '@/shared/stores/app.store'

export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  sectionId: string,
  threshold = 0.15
) {
  const ref = useRef<T>(null)
  const revealSection = useAppStore((s) => s.revealSection)
  const isRevealed = useAppStore((s) => s.revealedSections.has(sectionId))

  useEffect(() => {
    if (isRevealed || !ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) revealSection(sectionId)
      },
      { threshold }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [sectionId, isRevealed, revealSection, threshold])

  return { ref, isRevealed }
}
