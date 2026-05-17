import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'

import { GoogleAuthButton } from '@/features/auth/components/google-auth-button'
import { useLogin } from '@/features/auth/hooks/use-login'
import { type LoginFormValues, loginSchema } from '@/features/auth/schemas/auth.schemas'
import { Button } from '@/shared/components/ui/button'
import { FormField } from '@/shared/components/ui/form-field'
import { Input } from '@/shared/components/ui/input'

export function LoginForm() {
  const loginMutation = useLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  return (
    <form className="space-y-4" onSubmit={handleSubmit((values) => loginMutation.mutate(values))}>
      <FormField label="Email" required error={errors.email?.message}>
        <Input
          type="email"
          placeholder="you@example.com"
          error={Boolean(errors.email)}
          {...register('email')}
        />
      </FormField>

      <FormField label="Password" required error={errors.password?.message}>
        <Input
          type="password"
          placeholder="Enter your password"
          error={Boolean(errors.password)}
          {...register('password')}
        />
      </FormField>

      {loginMutation.error ? (
        <div className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
          {loginMutation.error.message}
        </div>
      ) : null}

      <Button type="submit" loading={loginMutation.isPending} className="w-full">
        Sign in
      </Button>

      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">or continue with</span>
        </div>
      </div>

      <GoogleAuthButton />

      <p className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <Link to="/auth/register" className="font-medium text-blue-600 hover:text-blue-700">
          Create one
        </Link>
      </p>
    </form>
  )
}
