import '@/assets/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MyHeader from './components/MyHeader.vue'
import Footer from '@/components/Footer.vue'
import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';
const app = createApp(App)
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara
});
app.component('my-header', MyHeader)
app.component('my-footer', Footer)
app.use(router)
app.mount('#app')
