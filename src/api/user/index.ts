// import type { DataType } from "../types"
import { request } from '@/api/http'
import type { User } from "@/types"
// 登录接口
export const loginApi = (accout: string, password: string) => {
  return request<User>('/user/login', 'POST', {accout, password})
}

export const getCaptchaApi = () => {
  return request('/captcha', 'GET')
}