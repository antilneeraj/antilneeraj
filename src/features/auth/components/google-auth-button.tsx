import { useMutation } from '@tanstack/react-query'

import { Button } from '@/shared/components/ui/button'
import { signIn } from '@/shared/lib/auth-client'

export function GoogleAuthButton() {
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const result = await signIn.social({
        provider: 'google',
        callbackURL: '/dashboard',
      })

      if (result.error) {
        throw new Error(result.error.message)
      }

      return result
    },
  })

  return (
    <Button
      type="button"
      variant="secondary"
      loading={isPending}
      className="w-full"
      onClick={() => mutate()}
    >
      <svg className="h-4 w-4" viewBox="0 0 48 48" aria-hidden="true">
        <path
          fill="#FFC107"
          d="M43.611 20.083H42V20H24v8h11.303C33.658 32.657 29.21 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.959 3.041l5.657-5.657C34.05 6.053 29.27 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"
        />
        <path
          fill="#FF3D00"
          d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.959 3.041l5.657-5.657C34.05 6.053 29.27 4 24 4c-7.681 0-14.347 4.337-17.694 10.691z"
        />
        <path
          fill="#4CAF50"
          d="M24 44c5.166 0 9.86-1.977 13.409-5.193l-6.191-5.238C29.145 35.091 26.715 36 24 36c-5.188 0-9.623-3.317-11.283-7.946l-6.522 5.025C9.51 39.556 16.227 44 24 44z"
        />
        <path
          fill="#1976D2"
          d="M43.611 20.083H42V20H24v8h11.303c-.788 2.306-2.271 4.285-4.085 5.569l.003-.002 6.191 5.238C37.038 39.145 44 34 44 24c0-1.341-.138-2.651-.389-3.917z"
        />
      </svg>
      Continue with Google
    </Button>
  )
}
