import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import 'lib-flexible/flexible'
import './assets/main.css'

import {
  Button,
  NavBar,
  Icon,
  Form, Field, CellGroup
 } from 'vant';

import 'vant/lib/index.css'; // 全局引入 vant

createApp(App).mount('#app')

const app = createApp(App)
app.use(router)
app.use(Button)
app.use(NavBar)
app.use(Icon)
app.use(Form)
app.use(Field)
app.use(CellGroup)
app.mount('#app')