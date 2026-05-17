import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'

import { GoogleAuthButton } from '@/features/auth/components/google-auth-button'
import { useRegister } from '@/features/auth/hooks/use-register'
import { type RegisterFormValues, registerSchema } from '@/features/auth/schemas/auth.schemas'
import { Button } from '@/shared/components/ui/button'
import { FormField } from '@/shared/components/ui/form-field'
import { Input } from '@/shared/components/ui/input'

export function RegisterForm() {
  const registerMutation = useRegister()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit((values) => registerMutation.mutate(values))}
    >
      <FormField label="Name" required error={errors.name?.message}>
        <Input
          type="text"
          placeholder="Your full name"
          error={Boolean(errors.name)}
          {...register('name')}
        />
      </FormField>

      <FormField label="Email" required error={errors.email?.message}>
        <Input
          type="email"
          placeholder="you@example.com"
          error={Boolean(errors.email)}
          {...register('email')}
        />
      </FormField>

      <FormField
        label="Password"
        required
        error={errors.password?.message}
        hint="Min 8 characters · one uppercase · one number"
      >
        <Input
          type="password"
          placeholder="Create a password"
          error={Boolean(errors.password)}
          {...register('password')}
        />
      </FormField>

      <FormField label="Confirm password" required error={errors.confirmPassword?.message}>
        <Input
          type="password"
          placeholder="Confirm your password"
          error={Boolean(errors.confirmPassword)}
          {...register('confirmPassword')}
        />
      </FormField>

      {registerMutation.error ? (
        <div className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
          {registerMutation.error.message}
        </div>
      ) : null}

      <Button type="submit" loading={registerMutation.isPending} className="w-full">
        Create account
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
        Already have an account?{' '}
        <Link to="/auth/login" className="font-medium text-blue-600 hover:text-blue-700">
          Sign in
        </Link>
      </p>
    </form>
  )
}
