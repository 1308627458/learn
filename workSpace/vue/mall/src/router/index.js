import { createRouter,createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'
const routes = [
{
  path: '/home',
  name : 'home',
  component: Home
},
{
  path: '/login',
  name : 'login',
  component: () => import('@/views/Login.vue')
}
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;