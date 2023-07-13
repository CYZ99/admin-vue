import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'
import type { ILogin } from '@/types/user'
import type { User } from '@/types/user'
import { loginApi,getCaptchaApi } from '@/api/index'
import cache from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constent'
import router from '@/router'


const useUserStore = defineStore('user-store', {
  state: (): User => {
    return {
      token: '',
      id: 0,
      account: ''
    }
  },
  actions: {
    async loginAccoutAction(data: ILogin) {
      const loginResult = await loginApi(data.accout as string, data.password as string)
      // 登录成功存放 token 2. 提示框
      const token = loginResult.data.token
      cache.setCache(LOGIN_TOKEN, token)
      ElMessage.success('登录成功')
      // 路由跳转
      router.push('/')
    },
    async getCaptchaAction() {
      const captcha = await getCaptchaApi()
      return captcha.data as {img:string, text:string}
    }
  }
})

export default useUserStore