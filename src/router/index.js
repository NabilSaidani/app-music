import { createRouter, createWebHistory } from 'vue-router';
import ContactView from '@/views/ContactView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contact',
      component: ContactView,
      name: 'contact-view', 
    },
    
  ]
})

export default router
