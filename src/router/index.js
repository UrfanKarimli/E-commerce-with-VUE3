import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Main/HomeView.vue'
import About from '@/views/About/About.vue'
import Contact from '@/views/Contact/Contact.vue'
import SignUp from '@/views/SignUp/SignUp.vue'
import AllList from '@/views/AllList/AllList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/all-lists',
      name: 'AllList',
      component: AllList
    },
  ]
})

export default router
