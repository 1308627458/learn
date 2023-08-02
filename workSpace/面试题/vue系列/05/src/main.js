import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import mitt from 'mitt'

const app = createApp(App)

app.config.globalProperties.$emitter = mitt()

app.mount('#app')