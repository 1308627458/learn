import App from './App'
import './components/icon-font/iconfont.css'
import store from './store/index.js'


// #ifndef VUE3
import Vue from 'vue'
Vue.prototype.$store = store
import './uni.promisify.adaptor'
Vue.config.productionTip = false 
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif