import axios from 'axios'
import type { Method } from 'axios'
import type { DataType } from './types'
import { BASE_URL, TIMEOUT } from './config'
import { ElMessage } from 'element-plus'

const instance = axios.create({
  // 1. 基础地址，超时时间
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

// 请求拦截器，添加拦截token
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => Promise.reject(err)
)

// 响应拦截
instance.interceptors.response.use(
  (res) => {
    if (res.data.code !== 0) {
      ElMessage.error(res.data.message || '业务错误')
      return Promise.reject(res.data)
    }
    // 解构出 data
    return res.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

const request = <T>(url: string, method: Method = 'get', submitData?: object) => {
  return instance.request<T, DataType<T>>({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params': 'data']: submitData
  })
}

export { instance, request}
