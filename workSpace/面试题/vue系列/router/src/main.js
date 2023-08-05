import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.component('abc',{
  template: '<div>abc</div>',
  data() {
    return {
      a: 1
    }
  }
})
app.use(router)
app.mount('#app')
