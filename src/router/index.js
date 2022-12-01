import { createRouter, createWebHistory } from 'vue-router';
import PlaylistView from '@/views/PlaylistView.vue';
import HomeView from '@/views/HomeView.vue';
import ContactView from '@/views/ContactView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/playlist',
      component: PlaylistView,
      name: 'playlist-view', 
    },
    {
      path: '/home',
      component: HomeView,
      name: 'home-view', 
    },
    {
      path: '/contact',
      component: ContactView,
      name: 'contact-view', 
    },
  ]
})

export default router
