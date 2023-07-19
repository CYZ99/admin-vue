import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'
import type { ILogin, IRegister } from '@/types/user'
import type { User } from '@/types/user'
import { loginApi, getCaptchaApi, registerApi, getUserInfoApi } from '@/api/index'
import cache from '@/utils/cache'
import { LOGIN_TOKEN, USER_ID, USER_INFO } from '@/global/constent'
import router from '@/router'


const useUserStore = defineStore('user-store', {
  state: (): User => {
    return {
      token: '',
      id: 0,
      accout: '',
      code: '',
      avatar: '',
    }
  },
  actions: {
    async loginAccoutAction(data: ILogin) {
      const loginResult = await loginApi(data.accout as string, data.password as string)
      const token = loginResult.data.token
      cache.setCache(USER_ID, loginResult)
      cache.setCache(LOGIN_TOKEN, token)
      ElMessage.success('登录成功')
      // 路由跳转
      router.push('/')
    },
    async getCaptchaAction() {
      const captcha = await getCaptchaApi()
      const data = captcha.data as { img: string; text: string }
      this.code = data.text
      return data
    },
    async logoutAction() {
      this.$state = {
        accout: '',
        id: 0,
        token: ''
      }
      cache.removeItemCache(LOGIN_TOKEN)
      cache.removeItemCache(USER_INFO)
      ElMessage.success('退出登录成功')
      router.push('/login')
    },
    async getUserAction() {
      const userId = cache.getCache(USER_ID)
      const res = await getUserInfoApi(userId)
      this.avatar = res.data.avatar
      // console.log(res.data.data.avatar)
      cache.setCache(USER_INFO, res.data)
    },
    async registerAction(data: IRegister) {
      if (data) {
        const res = registerApi(data.regAccout!, data.regPassword!, data.email!)
        console.log(res)
      }
    }
  },
})

export default useUserStore