import { defineStore } from 'pinia'
import router from '@/router'
import cache from '@/utils/cache'
import { ElMessage } from 'element-plus'
import type { ILogin, IRegister, User } from '@/types/user'
import { LOGIN_TOKEN, USER_ID, USER_INFO, MENU } from '@/global/constent'
import {
  loginApi,
  getCaptchaApi,
  registerApi,
  getUserInfoApi,
  getEmailCodeApi,
  getMenuByUserIdApi
} from '@/api/index'

const useUserStore = defineStore('user-store', {
  state: (): User => {
    return {
      token: '',
      id: 0,
      accout: '',
      avatar: cache.getCache(USER_INFO)?.avatar || '',
      email: cache.getCache(USER_INFO)?.email || '',
      emailCode: '',
      menu: cache.getCache(MENU) || []
    }
  },

  actions: {
    async getMenusByIdAction() {
      const id = cache.getCache(USER_ID)
      if (id) {
        const res = await getMenuByUserIdApi(id)
        this.menu = res.data
        if (!cache.getCache(MENU)) {
          cache.setCache(MENU, this.menu)
        }
        return res
      }
    },
    async loginAccoutAction(data: ILogin) {
      const loginResult = await loginApi(data.accout as string, data.password as string)
      const token = loginResult.data.token
      cache.setCache(USER_ID, loginResult.data.id)
      cache.setCache(LOGIN_TOKEN, token)
      // 获取 menu 菜单信息
      this.getMenusByIdAction()
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
      // 这里需要先清除 storage 中的数据然后再清除 pinia 内存中的数据因为 pinia 的初始值依赖于 storage
      cache.clearCache()
      this.$reset()
      // homeStore.$reset()
      ElMessage.success('退出登录成功')
      router.push('/login')
    },
    async getUserAction() {
      const userId = cache.getCache(USER_ID)
      const res = await getUserInfoApi(userId as number)
      this.avatar = res.data?.avatar
      cache.setCache(USER_INFO, res.data)
      return res.data
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