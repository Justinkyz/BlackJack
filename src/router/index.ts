import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: () => import('../views/BlackjackLeaderboard.vue')
    },
    {
      path: '/blackjack',
      name: 'blackjack',
      component: () => import('../views/BlackjackGame.vue')
    }
  ]
});

export default router;
