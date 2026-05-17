import { z } from 'zod'

/**
 * Validates and exposes client environment variables at app startup.
 */
const envSchema = z.object({
  VITE_API_URL: z.url('VITE_API_URL must be a valid URL'),
  VITE_AUTH_BASE_URL: z.url('VITE_AUTH_BASE_URL must be a valid URL'),
  VITE_GOOGLE_CLIENT_ID: z.string().min(1, 'VITE_GOOGLE_CLIENT_ID is required'),
})

const parsedEnv = envSchema.safeParse(import.meta.env)

if (!parsedEnv.success) {
  console.error('Environment validation failed:', parsedEnv.error.flatten().fieldErrors)
  throw new Error(
    'Invalid environment variables. Check your .env file against .env.example and restart the app.'
  )
}

export const env = parsedEnv.data
