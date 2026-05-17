import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines conditional class names and resolves Tailwind utility conflicts.
 * Use this helper whenever class names are composed dynamically.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
