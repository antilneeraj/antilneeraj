import { createFileRoute, redirect } from '@tanstack/react-router'

import { LoginForm } from '@/features/auth/components/login-form'
import { authClient } from '@/shared/lib/auth-client'

export const Route = createFileRoute('/auth/login')({
  beforeLoad: async () => {
    try {
      const session = await authClient.getSession()
      if (session.data) {
        throw redirect({ to: '/dashboard' })
      }
    } catch (e) {
      // If redirect was thrown, re-throw it — otherwise treat as unauthenticated
      if (e instanceof Error === false) throw e
    }
  },
  component: LoginRoute,
})

function LoginRoute() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
      <section className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
        <p className="mt-1 text-sm text-gray-600">Sign in to continue.</p>
        <div className="mt-6">
          <LoginForm />
        </div>
      </section>
    </main>
  )
}

export default Route
