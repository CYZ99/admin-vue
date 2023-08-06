import { createApp } from 'vue'
import App from './App.vue'
import pinia from './stores'
import router from './router'
import 'virtual:uno.css'
import '@unocss/reset/normalize.css'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'
import 'nprogress/nprogress.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/styles/reset.css'
import * as echarts from 'echarts'


const app = createApp(App)
app.use(pinia)
app.use(router)
app.config.globalProperties.$echarts = echarts
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

router.isReady().then(() => {
  app.mount('#app')
})

