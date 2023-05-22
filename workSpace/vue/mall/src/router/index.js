import { createRouter,createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'

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
{
  path: '/create-order',
  name: 'create-order',
  component: () => import('@/views/CreateOrder.vue')
},
{
  path: '/address',
  name : 'address',
  component: () => import('@/views/Address.vue')
}

]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;