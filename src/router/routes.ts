const homePage = () => import('@/layout/homePage.vue')
const loginPage = () => import('@/views/login/loginPage.vue')
const notFoundPage = () => import('@/views/NotFound.vue')
const registerPage = () => import('@/views/register/registerPage.vue')
const indexPage = () => import('@/views/indexPage.vue')


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
