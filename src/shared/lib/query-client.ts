import { QueryClient } from '@tanstack/react-query'
import axios, { type AxiosError } from 'axios'

/**
 * Shared React Query client with sensible defaults for retries and caching.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: (failureCount, error) => {
        if (axios.isAxiosError(error)) {
          const status = (error as AxiosError).response?.status
          if (status === 401 || status === 404) {
            return false
          }
        }

        return failureCount < 2
      },
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
})
