import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: () => import('../views/BlackjackLeaderboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/blackjack',
    name: 'blackjack',
    component: () => import('../views/BlackjackGame.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/comments',
    name: 'comments',
    component: () => import('../views/Comments.vue'),
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth');

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
