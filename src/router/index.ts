import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import cache from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constent'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

// 路由导航守卫
router.beforeEach(async (to) => {
  NProgress.start()
  const token = await cache.getCache(LOGIN_TOKEN)
  if (to.path === '/' && !token) {
    return '/login'
  }
})

router.afterEach((to) => {
  document.title = `${to.meta.title || ''}-后台管理系统`
  NProgress.done()
})
export default router
