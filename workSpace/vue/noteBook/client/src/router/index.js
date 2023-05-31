import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { // 重定向
    path: '/',
    redirect: '/login'
  },
 {
  path: '/login',
  name: 'login',
  component: () => import('@/views/Login.vue'),
  meta:{
    title:'登录'
  }
 },
 {
  path: '/register',
  name: 'register',
  component: () => import('@/views/Register.vue'),
  meta:{
    title:'注册'
  }
 },
 {
  path: '/noteClass',
  name: 'noteClass',
  component: () => import('@/views/NoteClass.vue'),
  meta:{
    title:'笔记分类'
  }
 }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 路由守卫
const whiteList = ['/login', '/register']
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  if(!whiteList.includes(to.path)){
    if(!sessionStorage.getItem('userInfo')) {
      router.push('/login')
      return
    }
    next()
    return
  }
  next()
})

export default router
