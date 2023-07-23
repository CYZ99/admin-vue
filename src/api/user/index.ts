// import type { DataType } from "../types"
import { request } from '@/api/http'
import type { IRegister, User, UserInfo } from '@/types'
// 登录接口
export const loginApi = (accout: string, password: string) => {
  return request<User>('/user/login', 'POST', { accout, password })
}

export const getCaptchaApi = () => {
  return request('/captcha', 'GET')
}

export const registerApi = (accout: string, password: string, email:string) => {
  return request<IRegister>('/user/register', 'POST', { accout, password, email })
}

export const getUserInfoApi = (id: number) => {
  return request<UserInfo>(`/user/info/:${id}`, 'GET')
}

export const getEmailCodeApi = (email: string) => {
  return request<string>('/send-email', 'POST', { email })
}

export const getMenuByUserIdApi = (id: number) => {
  return request(`/menu/${id}`, 'GET')
}