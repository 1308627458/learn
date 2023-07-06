import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'lib-flexible/flexible'
import './assets/main.css'
import './assets/icon-font/iconfont.css'
import 'animate.css';
import 'vant/lib/index.css'; // 全局引入 vant
import { 
  NavBar,
  Icon,
  CountDown,
  Circle,
  Button,
  Popup,  
  Switch,
  Picker,
} from 'vant'


const app = createApp(App)
app.use(router)
app.use(NavBar);
app.use(Icon);
app.use(CountDown);
app.use(Circle);
app.use(Button);
app.use(Popup);
app.use(Switch);
app.use(Picker);

app.mount('#app')
