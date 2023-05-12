import { createRouter, createWebHistory } from 'vue-router'
import Goods from '@/views/goods'

const routes = [
  {
    path:'/',
    redirect:'/goods'
  },
  {
    path:'/goods',
    name: 'goods',
    component:Goods
  },
  {
    path:'/comment',
    name: 'comment',
    component:() => import ('@/views/comment')
  },
  {
    path:'/seller',
    name: 'seller',
    component:() => import ('@/views/seller')
  }
   
]

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
