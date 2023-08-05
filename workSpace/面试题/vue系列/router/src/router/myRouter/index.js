import { ref, inject } from 'vue'

import RouterLink from './RouterLink.vue'

import RouterView from './RouterView.vue'

function createRouter(options) {
  return new Router(options)
}

function createWebHashHistory() {
  function bindEvents(fn) {
    window.addEventListener('hashchange', fn)
  }
  return {
    bindEvents,
    url: window.location.hash.slice(1) || '/'
  }
}


function useRouter() {
  return inject('_router_')
}
class Router {
  constructor(options) {
    this.history = options.history
    this.routes = options.routes
    this.current = ref(this.history.url)


    this.history.bindEvents(() => { // 监听 hash 变化
      this.current.value = window.location.hash.slice(1)


    })
  }
  push() {
    // xxx
  }
  install(app) {
    app.provide('_router_', this) // router 实例挂载到 app 上
    app.component('router-link', RouterLink) // 注册RouterLink 组件
    app.component('router-view', RouterView) // 注册RouterView
  }
}

export { createRouter, createWebHashHistory, useRouter } 