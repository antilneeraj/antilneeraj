import { create } from 'zustand'

interface AppStore {
  // Loading screen state
  isLoading: boolean
  loadingPhase: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
  setLoadingPhase: (phase: AppStore['loadingPhase']) => void
  completeLoading: () => void

  // Scroll reveal state
  revealedSections: Set<string>
  revealSection: (sectionId: string) => void
}

export const useAppStore = create<AppStore>((set) => ({
  isLoading: true,
  loadingPhase: 0,
  setLoadingPhase: (phase) => set({ loadingPhase: phase }),
  completeLoading: () => set({ isLoading: false, loadingPhase: 7 }),

  revealedSections: new Set(),
  revealSection: (id) => set((s) => ({ revealedSections: new Set([...s.revealedSections, id]) })),
}))
