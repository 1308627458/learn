import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue' 
// import About from '../views/About.vue'
// 路由的映射数组 
const routes = [
  {
    path:'/home',
    name:'home',
    component: Home,
    children:[
      {
        path: '/',
        redirect: '/home/message',
      },
      {
        path: '/home/message',
        component: () => import ('../views/HomeMessage.vue'),
      },
      {
        path:'/home/shops',
        component:() => import ('../views/HomeShop.vue'),
      },
      {
        path:'/home/moment',
        component:() => import ('../views/HomeMoment.vue'),
      }
    ]
  },
  {
    path:'/about',
    name:'about',
    component: () => import('../views/About.vue')
  },
  {
    path:'/category',
    name:'category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
// routes: routes,
routes,
history: createWebHistory()

})


export default router