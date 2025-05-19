import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../src/modules/auth/pages/LoginPage.vue'),
  },
  {
    path: '/',
    name: 'landing',
    component: () => import('../src/modules/landing/layouts/LandingLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../src/modules/landing/pages/HomePage.vue'),
      },
      {
        path: '/features',
        name: 'features',
        component: () => import('../src/modules/landing/pages/FeaturesPage.vue'),
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('../src/modules/landing/pages/ContactPage.vue'),
      },
      {
        path: '/pricing',
        name: 'pricing',
        component: () => import('../src/modules/landing/pages/PricingPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
