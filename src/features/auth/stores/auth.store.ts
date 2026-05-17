import { create } from 'zustand'

interface AuthStore {
  redirectAfterLogin: string | null
  setRedirectAfterLogin: (path: string | null) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  redirectAfterLogin: null,
  setRedirectAfterLogin: (path) => set({ redirectAfterLogin: path }),
}))
