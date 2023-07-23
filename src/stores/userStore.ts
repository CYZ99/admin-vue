import { defineStore } from 'pinia'
import router from '@/router'
import cache from '@/utils/cache'
import { ElMessage } from 'element-plus'
import type { ILogin, IRegister, User } from '@/types/user'
import { LOGIN_TOKEN, USER_ID, USER_INFO } from '@/global/constent'
import { loginApi, getCaptchaApi, registerApi, getUserInfoApi, getEmailCodeApi } from '@/api/index'
import useHomeStore from './homeStore'

const homeStore = useHomeStore()

const useUserStore = defineStore('user-store', {
  state: (): User => {
    return {
      token: '',
      id: 0,
      accout: '',
      avatar: cache.getCache(USER_INFO)?.avatar || '',
      email: cache.getCache(USER_INFO)?.email || '',
      emailCode: '',
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
        token: '',
        email: ''
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
      // 获取 menu 菜单信息
      homeStore.getMenusByIdAction()
      cache.setCache(USER_INFO, res.data)
    },
    async registerAction(data: IRegister) {
      if (data) {
        const res = await registerApi(data.regAccout!, data.regPassword!, data.email!)
        return res
      }
    },
    async getEmailCodeAction(email: string) {
      const res = await getEmailCodeApi(email)
      this.emailCode = res.data as string
    },

  },
})

export default useUserStore