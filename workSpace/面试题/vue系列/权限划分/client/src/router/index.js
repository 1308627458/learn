// vue 路由

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path:'/home',
        name:'home',
        component: () => import('../views/pages/Home.vue'),
        meta: {
          level: 1
        }
      },
      {
        path:'/class',
        name:'class',
        component: () => import('../views/pages/Class.vue'),
        meta: {
          level: 1
        }
      },
      {
        path:'/statis',
        name:'statis',
        component: () => import('../views/pages/Statis.vue'),
        meta: {
          level: 2
        }
      },
    ]
  },
  {
    path:'/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      level: 0
    }
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫

// router.beforeEach((to, from, next) => {
//   // console.log(to.meta.level);
//   let userLever = window.localStorage.getItem('level')
//   if(userLever >= to.meta.level) {
//     next()
//   } else {
//     alert('权限不足')
//   }
  
// })

export default router