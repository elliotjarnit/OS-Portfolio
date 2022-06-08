import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/projects/:id',
      name: 'projects'
    },
    { 
      path: '/:pathMatch(.*)*', 
      component: () => import('../views/404Page.vue')
    },
  ]
})

export default router
