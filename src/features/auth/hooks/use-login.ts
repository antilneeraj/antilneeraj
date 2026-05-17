import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'

import type { LoginFormValues } from '@/features/auth/schemas/auth.schemas'
import { signIn } from '@/shared/lib/auth-client'

export function useLogin() {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: async ({ email, password }: LoginFormValues) => {
      const result = await signIn.email({ email, password })

      if (result.error) {
        throw new Error(result.error.message)
      }

      return result
    },
    onSuccess: async () => {
      await navigate({ to: '/dashboard' })
    },
  })
}
