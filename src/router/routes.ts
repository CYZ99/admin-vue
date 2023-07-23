const homePage = () => import('@/layout/homePage.vue')
const loginPage = () => import('@/views/login/loginPage.vue')
const notFoundPage = () => import('@/views/NotFound.vue')
const registerPage = () => import('@/views/register/registerPage.vue')
const indexPage = () => import('@/views/indexPage.vue')
const userPage = () => import('@/views/user/userPage.vue')
const menuPage = () => import('@/views/menu/menuPage.vue')
const rolePage = () => import('@/views/role/rolePage.vue')

const routes = [
  {
    path: '/',
    name: '/admin',
    meta: { title: '首页' },
    component: homePage,
    children: [
      {
        path: '/',
        name: '首页数据',
        meta: { title: '首页' },
        component: indexPage
      },
      {
        path: '/system/user',
        name: '用户管理',
        meta: { title: '用户管理' },
        component: userPage
      },
      {
        path: '/system/menu',
        name: '菜单管理',
        meta: { title: '菜单管理' },
        component: menuPage
      },
      {
        path: '/system/role',
        name: '角色管理',
        meta: { title: '角色管理' },
        component: rolePage
      }
    ]
  },
  {
    path: '/login',
    name: '登录',
    meta: { title: '登录' },
    component: loginPage
  },
  {
    path: '/register',
    meta: { title: '注册' },
    component: registerPage
  },
  {
    path: '/:pathMatch(.*)*',
    component: notFoundPage
  }
]


export default routes
