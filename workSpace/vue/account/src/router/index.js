import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/page'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: '登录'
  },
  {
    path: '/page',
    name: 'page',
    component: () => import('@/views/Page.vue'),
    meta: '首页',
    children: [
      {
        path: '',
        redirect: '/page/home'
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/pages/Home.vue'),
      },
      {
        path: 'data',
        name: 'data',
        component: () => import('@/views/pages/Data.vue'),
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/pages/User.vue'),
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router