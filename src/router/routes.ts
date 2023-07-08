const homePage = () => import('../views/home/homePage.vue')
const loginPage = () => import('@/views/login/loginPage.vue')

const routes = [
  { path: '/', component: homePage },
  { path: '/login', component: loginPage }
]


export default routes
