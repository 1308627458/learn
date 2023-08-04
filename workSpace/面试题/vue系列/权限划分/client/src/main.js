import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)

// 自定义按钮权限指令
app.directive('noLevel', {
  beforeMount(el, binding, vnode) {  // 指令第一次绑定到元素时调用
    // console.log(el, binding, vnode);
    console.log(el.parentNode);
  },  
  mounted(el, binding, vnode) { // 被绑定的元素插入父节点时调用
    console.log(el.parentNode.removeChild(el));
  },
  updated(el, binding, vnode) { // 被绑定元素所在的模版更新是调用
    console.log('updated');
  },
  beforeUnmount(el, binding, vnode) {  // 指令与元素解绑时调用
    console.log('beforeUnmount');
  }
})


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(ElementPlus)
app.mount('#app')
