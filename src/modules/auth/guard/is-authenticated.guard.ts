import type { NavigationGuard, RouteLocationNormalized } from 'vue-router';

const isAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuard,
) => {
  const isAuthenticated = !!localStorage.getItem('userId');

  localStorage.setItem('lastPath', to.path);
  if (isAuthenticated) {
    next();
  } else {
    next({ name: 'login' });
  }
};
export default isAuthenticatedGuard;
