import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Main/HomeView.vue'
import About from '@/views/About/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
})

export default router
