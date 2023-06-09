import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
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
  SwipeCell,Card,
  Checkbox, CheckboxGroup,
  Stepper,
  SubmitBar,
  AddressList ,
  AddressEdit ,
 } from 'vant';

import 'vant/lib/index.css'; // 全局引入 vant

createApp(App).mount('#app')

const app = createApp(App)
app.use(createPinia()) // pinia 生效
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
app.use(SwipeCell);
app.use(Card);
app.use(Checkbox);
app.use(CheckboxGroup);
app.use(Stepper);
app.use(SubmitBar);
app.use(AddressList);
app.use(AddressEdit);
app.mount('#app')