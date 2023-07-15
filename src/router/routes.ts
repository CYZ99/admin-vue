const homePage = () => import('@/layout/homePage.vue')
const loginPage = () => import('@/views/login/loginPage.vue')
const notFoundPage = () => import('@/views/NotFound.vue')
const registerPage = () => import('@/views/register/registerPage.vue')

const routes = [
  {
    path: '/',
    meta: { title: '首页' },
    component: homePage
  },
  {
    path: '/login',
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
  },
]


export default routes
