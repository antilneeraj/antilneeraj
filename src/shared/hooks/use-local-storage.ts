import { useCallback, useState } from 'react'

/**
 * Syncs React state with localStorage with safe error handling.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      console.warn(`Failed to read localStorage key "${key}"`, error)
      return initialValue
    }
  })

  const setValue = useCallback(
    (value: T | ((value: T) => T)) => {
      try {
        setStoredValue((currentValue) => {
          const valueToStore = value instanceof Function ? value(currentValue) : value
          window.localStorage.setItem(key, JSON.stringify(valueToStore))
          return valueToStore
        })
      } catch (error) {
        console.warn(`Failed to set localStorage key "${key}"`, error)
      }
    },
    [key]
  )

  const removeValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key)
      setStoredValue(initialValue)
    } catch (error) {
      console.warn(`Failed to remove localStorage key "${key}"`, error)
    }
  }, [initialValue, key])

  return [storedValue, setValue, removeValue] as const
}
