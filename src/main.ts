import { createApp } from 'vue'
import pinia from '@/stores/index'
import 'virtual:uno.css'
import '@unocss/reset/normalize.css'
import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/el-message.css'
import 'nprogress/nprogress.css'
import '@/styles/reset.css'
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
