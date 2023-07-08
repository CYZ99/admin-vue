import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
const instance = axios.create({
  // 1. 基础地址，超时时间
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default instance
