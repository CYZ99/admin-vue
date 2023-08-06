import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import cache from '@/utils/cache'
import { LOGIN_TOKEN, USER_INFO } from '@/global/constent'
import NProgress from 'nprogress'
import addDynamicRoute, { dynamicRoutes } from '@/hooks/useDynamicRoute'
import useUserStore from '@/stores/modules/userStore'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

let isAddRoute = false
// 路由导航守卫
router.beforeEach(async (to) => {
  const userStore = useUserStore()
  NProgress.start()
  const token = await cache.getCache(LOGIN_TOKEN)
  if (to.path != '/login' && !token) {
    return '/login'
  }
  if (token) {
    let userInfo = cache.getCache(USER_INFO)
    if (!userInfo) {
      userInfo = await userStore.getUserAction()
    }
    // 动态加载路由
    if (!isAddRoute) {
      addDynamicRoute(router, userInfo.roleName, dynamicRoutes)
      isAddRoute = true
      return to.fullPath
    }
  }
})

router.afterEach((to) => {
  document.title = `${to.meta.title || ''}-后台管理系统`
  NProgress.done()
})

export default router
