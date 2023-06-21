import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import 'lib-flexible/flexible'
import dayjs from 'dayjs'

import 'vant/es/toast/style'; //单独引入toast

const app = createApp(App)
// 全局过滤器
app.config.globalProperties.$filters = {
  transTime(date) {
    return dayjs(Number(date)).format('HH:mm')
  },
  transDay(value) {
    return dayjs(value).format('MM-DD')
  },
  transYDM(value) {
    return dayjs(value).format('YYYY-MM-DD')
  }
}

app.use(router).mount('#app')
