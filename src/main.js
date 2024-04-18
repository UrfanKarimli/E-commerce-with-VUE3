import '@/assets/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MyHeader from './components/MyHeader.vue'
import Footer from '@/components/Footer.vue'

const app = createApp(App)

app.component('my-header', MyHeader)
app.component('my-footer', Footer)
app.use(router)
app.mount('#app')
