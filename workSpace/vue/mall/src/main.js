import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import 'lib-flexible/flexible'
import './assets/main.css'

import {
  Button,
  NavBar,
  Icon,
  Form, Field, CellGroup,
  Swipe, SwipeItem,
  Dialog,
  Skeleton,
  Tabbar, TabbarItem,
  ActionBar, ActionBarIcon, ActionBarButton,
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
app.use(Swipe)
app.use(SwipeItem)
app.use(Dialog)
app.use(Skeleton)
app.use(Tabbar)
app.use(TabbarItem)
app.use(ActionBar)
app.use(ActionBarIcon);
app.use(ActionBarButton);
app.mount('#app')