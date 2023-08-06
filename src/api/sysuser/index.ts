import { request } from '@/api/http'
import type { User } from '@/types'

interface IUserList {
  values: User,
  total: number
}

// 获取用户接口
export const getUserApi = (page: number, pageSize: number) => {
  return request<IUserList>(`/getAlluser?page=${page}&pageSize=${pageSize}`, 'GET')
}

