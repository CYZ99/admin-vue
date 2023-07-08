import { createRouter, createWebHistory } from 'vue-router'

const homePage = () => import('../views/home/homePage.vue')
const loginPage = () => import('@/views/login/loginPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: homePage },
    { path: '/login', component: loginPage }
  ]
})

export default router
