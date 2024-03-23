import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ImagesPage from '@/views/ImagesPage.vue';
import CherriesPage from '@/views/CherriesPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/images', component: ImagesPage },
  { path: '/cherries', component: CherriesPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
