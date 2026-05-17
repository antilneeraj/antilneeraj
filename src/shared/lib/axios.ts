import axios from 'axios'

import { env } from '@/shared/lib/env'

/**
 * Shared Axios client with auth token and auth failure handling.
 */
export const api = axios.create({
  baseURL: env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10_000,
})

api.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('auth_token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.localStorage.removeItem('auth_token')
      window.location.href = '/auth/login'
    }

    return Promise.reject(error)
  }
)
