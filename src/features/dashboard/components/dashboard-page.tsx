import { useNavigate } from '@tanstack/react-router'

import { Button } from '@/shared/components/ui/button'
import { signOut, useSession } from '@/shared/lib/auth-client'

export function DashboardPage() {
  const navigate = useNavigate()
  const session = useSession()
  const user = session.data?.user

  const handleSignOut = async () => {
    await signOut()
    await navigate({ to: '/auth/login' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4">
          <h1 className="text-lg font-semibold text-gray-900">Frontend Template</h1>
          <Button variant="secondary" onClick={() => void handleSignOut()}>
            Sign out
          </Button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-8">
        <section className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Welcome back, {user?.name ?? 'User'}!
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Signed in as {user?.email ?? 'unknown email'}.
            </p>
          </div>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
            Your dashboard modules will be added here. This template includes routing, auth hooks,
            shared UI, and state foundations so new features can be shipped quickly.
          </div>
        </section>
      </main>
    </div>
  )
}
