import { createRouter, createWebHistory ,type  RouteLocationNormalized} from 'vue-router';
import isAuthenticatedGuard from '@/modules/auth/guard/is-authenticated.guard.ts';

const routes = [
  {
    path: '/auth',
    name: 'auth',
    redirect: { name: 'login' },
    component: () => import('../src/modules/auth/layouts/LayoutAuth.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('../src/modules/auth/pages/LoginPage.vue'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../src/modules/auth/pages/RegisterPage.vue'),
      },
    ],
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
      {
        path: '/pokemon/:id',
        beforeEnter: [isAuthenticatedGuard],
        name: 'pokemon',
        props: (route:RouteLocationNormalized) => {
          // const id = Number(route.params.id);
          const id = +route.params.id;
          return isNaN(id) ? { id: 1 } : { id };
        },
        component: () => import('../src/modules/landing/pages/PokemonPage.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../src/modules/common/pages/NotFoundPage.vue'),
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
