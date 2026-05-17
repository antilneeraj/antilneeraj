import { Link, createFileRoute } from '@tanstack/react-router'

import { cn } from '@/shared/utils/cn'
import { Input } from '@/shared/components/ui/input'

export const Route = createFileRoute('/')({
  component: IndexPage,
})

function IndexPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 py-16">
      <section className="w-full max-w-2xl rounded-2xl border border-blue-100 bg-white p-10 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Template Starter
        </p>
        <h1 className="mt-3 text-4xl font-bold text-gray-900">Frontend Template</h1>
        <p className="mt-4 text-base text-gray-600">
          Vite + React + TanStack Router + React Query + Better Auth + Tailwind CSS
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/auth/login"
            className={cn(
              'inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-5 text-sm font-medium text-white transition-colors hover:bg-blue-700'
            )}
          >
            Sign in
          </Link>
          <Link
            to="/auth/register"
            className={cn(
              'inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50'
            )}
          >
            Create account
          </Link>
        </div>
        <Input></Input>
      </section>
    </main>
  )
}

export default Route
