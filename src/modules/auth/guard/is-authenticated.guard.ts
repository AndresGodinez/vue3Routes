import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const isAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
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
