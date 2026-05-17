import { forwardRef, type InputHTMLAttributes } from 'react'

import { cn } from '@/shared/utils/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, error = false, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={cn(
        'h-10 w-full rounded-md border bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-offset-0',
        error
          ? 'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500'
          : 'border-gray-300 focus-visible:border-blue-500 focus-visible:ring-blue-500',
        className
      )}
      {...props}
    />
  )
})
