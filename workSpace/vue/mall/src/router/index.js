import { createRouter,createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'
import Category from '@/views/Category.vue'
import Cart from '@/views/Cart.vue'
import User from '@/views/User.vue'
import ProductDetail from '@/views/ProductDetail.vue'
const routes = [
{ // 重定向
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  name : 'home',
  component: Home
},
{
  path: '/login',
  name : 'login',
  component: () => import('@/views/Login.vue')
},
{
  path: '/category',
  name : 'category',
  component: () => import('@/views/Category.vue')
  
},
{
  path: '/cart',
  name : 'cart',
  component:() => import('@/views/Cart.vue')
},
{
  path: '/user',
  name : 'user',
  component: () => import('@/views/User.vue')
},
{
  path: '/product/:id',
  name : 'product',
  component: () => import('@/views/ProductDetail.vue')
},

]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;