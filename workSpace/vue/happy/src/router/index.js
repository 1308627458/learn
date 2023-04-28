import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
 {
  path: '/home',
  name: 'home',
  component: Home
 },
 {
  path: '/item',
  name: 'item',
  component: () => import('@/views/item')  // 按需加载
 }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
