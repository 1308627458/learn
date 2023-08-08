import { createApp } from 'vue'  // 浏览器无法识别 vue 路径
import App from './App.vue'   // 浏览器无法解析.vue 文件
import './index.css'   // index.css 不是一个合法的js文件

const app = createApp(App)
app.mount('#app')
