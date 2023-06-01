import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { // 重定向
    path: '/',
    redirect: '/noteClass'
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
 },
 {
  path: '/noteList',
  name: 'noteList',
  component: () => import('@/views/NoteList.vue'),
  meta:{
    title:'笔记列表'
  }
 },
 {
  path: '/noteDetail',
  name: 'noteDetail',
  component: () => import('@/views/NoteDetail.vue'),
  meta:{
    title:'笔记详情'
  }
 },
 {
  path: '/notePublish',
  name: 'notePublish',
  component: () => import('@/views/NotePublish.vue'),
  meta:{
    title:'发布笔记'
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
