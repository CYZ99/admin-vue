const homePage = () => import('../views/home/homePage.vue')
const loginPage = () => import('@/views/login/loginPage.vue')
const notFoundPage = () => import('@/views/NotFound.vue')
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
    path: '/:pathMatch(.*)*',
    component: notFoundPage
  }
]


export default routes
