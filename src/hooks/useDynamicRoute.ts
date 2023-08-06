
import type { Router } from 'vue-router'
const userPage = () => import('@/views/user/userPage.vue')
const menuPage = () => import('@/views/menu/menuPage.vue')
const rolePage = () => import('@/views/role/rolePage.vue')
const gptPage = () => import('@/views/gpt/gptPage.vue')

export const dynamicRoutes = [
  {
    path: '/system/user',
    name: '用户管理',
    meta: { title: '用户管理', role: ['admin'] },
    component: userPage
  },
  {
    path: '/system/menu',
    name: '菜单管理',
    meta: { title: '菜单管理', role: ['admin'] },
    component: menuPage
  },
  {
    path: '/system/role',
    name: '角色管理',
    meta: { title: '角色管理', role: ['admin'] },
    component: rolePage
  },
  {
    path: '/gpt',
    name: 'gpt',
    meta: { title: 'gpt', role: ['admin, user'] },
    component: gptPage
  }
]

const addDynamicRoute = (router: Router, role: string, dynamicRoutes: any) => {
  // const result: any = []
  // 循环动态路由中的每一项
  // 根据角色判断是否添加 路由
  const patchRoutesMenus: any = (dynamicRoutes: any) => {
    dynamicRoutes.forEach((item: any) => {
      if (!router.hasRoute(item.path) && item.meta.role.includes(role)) {
        router.addRoute('admin', item)
      }
      // 有子组件递归调用
      if (item.children) {
        patchRoutesMenus(item.children)
      }
    })
  }
  patchRoutesMenus(dynamicRoutes)
}

export default addDynamicRoute