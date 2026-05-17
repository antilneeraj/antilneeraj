import { api } from '@/shared/lib/axios'
import type { ApiResponse } from '@/shared/types/api.types'

export interface UserProfile {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: string
}

/**
 * Encapsulates profile-related API requests for authenticated users.
 */
export const authService = {
  async getProfile(): Promise<UserProfile> {
    const response = await api.get<ApiResponse<UserProfile>>('/auth/profile')
    return response.data.data
  },

  async updateProfile(
    payload: Partial<Pick<UserProfile, 'name' | 'avatar'>>
  ): Promise<UserProfile> {
    const response = await api.patch<ApiResponse<UserProfile>>('/auth/profile', payload)
    return response.data.data
  },

  async deleteAccount(): Promise<void> {
    await api.delete('/auth/account')
  },
}
