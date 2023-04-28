import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/utils/rem'
import '@/assets/style/common.less'
createApp(App).use(router).mount('#app')
