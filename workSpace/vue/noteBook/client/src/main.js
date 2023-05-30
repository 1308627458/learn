import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import { Button, Form, Field, CellGroup } from 'vant';
import '@/assets/style/reset.css'
import 'vant/lib/index.css';
import 'amfe-flexible';

const app = createApp(App)

app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(router).mount('#app')
