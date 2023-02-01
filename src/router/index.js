import { createRouter, createWebHistory } from 'vue-router';

const HomeView = () => import('../views/HomeView/index.vue');
const FeedbacksView = () => import('../views/FeedbacksView/index.vue');
const CredencialsView = () => import('../views/CredencialsView/index.vue');

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: FeedbacksView,
    meta: {
      hasAuth: true,
    },
  },
  {
    path: '/credencials',
    name: 'Credencials',
    component: CredencialsView,
    meta: {
      hasAuth: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' },
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
