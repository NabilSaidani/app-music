import { createRouter, createWebHistory } from 'vue-router';
import PlaylistView from '@/views/PlaylistView.vue';
import FavorisView from '@/views/FavorisView.vue';
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
      path: '/favoris',
      component: FavorisView,
      name: 'favoris-view', 
    },
    {
      path: '/contact',
      component: ContactView,
      name: 'contact-view', 
    },
  ]
})

export default router
