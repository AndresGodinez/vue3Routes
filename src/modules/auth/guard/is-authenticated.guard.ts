const isAuthenticatedGuard = (to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('userId');
  if (isAuthenticated) {
    next();
  } else {
    next({ name: 'login' });
  }
};
export default isAuthenticatedGuard;
