import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'

import type { RegisterFormValues } from '@/features/auth/schemas/auth.schemas'
import { signUp } from '@/shared/lib/auth-client'

export function useRegister() {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: async ({ name, email, password }: RegisterFormValues) => {
      const result = await signUp.email({ name, email, password })

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
