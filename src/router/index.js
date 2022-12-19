import { createRouter, createWebHistory } from 'vue-router';
import PlaylistView from '@/views/PlaylistView.vue';
import HomeView from '@/views/HomeView.vue';
import ContactView from '@/views/ContactView.vue';
import DetailsPlaylistView from '@/views/DetailsPlaylistView.vue';

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
    {
    path: '/detailplaylist',
    component: DetailsPlaylistView,
    name: 'detailPlaylist-view', 
  },
  ]
})

export default router
