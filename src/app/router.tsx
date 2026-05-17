import { createRouter } from '@tanstack/react-router'

import { queryClient } from '@/shared/lib/query-client'
import { routeTree } from '@/routeTree.gen'

/**
 * Creates and exports the application router with shared query context.
 */
export const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
