import { createAuthClient } from 'better-auth/react'

import { env } from '@/shared/lib/env'

/**
 * Better Auth client exports for auth actions and session state.
 */
const authClient = createAuthClient({
  baseURL: env.VITE_AUTH_BASE_URL,
})

export const { signIn, signUp, signOut, useSession } = authClient
export { authClient }
