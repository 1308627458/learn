import { createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
const routes = [
  { // 重定向
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name : 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name : 'register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/forest',
    name : 'forest',
    component: () => import('@/views/Forest.vue')
  },

]


const router = createRouter({
  routes,
  history: createWebHistory()
})


// 路由守卫
const whiteList = ['/login', '/register']
router.beforeEach((to, from, next) => {
  if (!whiteList.includes(to.path)) {
    if (!sessionStorage.getItem('userInfo')) {
      router.push('/login')
      return
    }
    next()
    return
  }
  next()
})

export default router