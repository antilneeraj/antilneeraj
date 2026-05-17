import { useEffect, useState } from 'react'

/**
 * Returns a debounced copy of a value that updates after a delay.
 *
 * @example
 * const debouncedSearch = useDebounce(search, 300)
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [value, delay])

  return debouncedValue
}
