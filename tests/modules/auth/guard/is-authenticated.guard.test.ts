import isAuthenticatedGuard from '../../../../src/modules/auth/guard/is-authenticated.guard';
import type { RouteLocationNormalized } from 'vue-router';
import { expect } from 'vitest';

describe('IsAuthenticatedGuard', () => {
  const to: RouteLocationNormalized = {
    matched: [],
    fullPath: '',
    query: {},
    hash: '',
    redirectedFrom: undefined,
    name: undefined,
    path: '',
    params: {},
    meta: {},
  };
  const next = vi.fn();
  const from : any={};

  beforeEach(() => {
    localStorage.clear();
  });

  test('should be block access to the route if the user is not authenticated', async () => {
    await isAuthenticatedGuard(to, from, next);
    expect(next).toHaveBeenCalledWith({ name: 'login' });
  });

  test('should called localstorage set item lastPath', async () => {
    await isAuthenticatedGuard(to, from, next);
    const lastPath = localStorage.getItem('lastPath');
    expect(lastPath).toBe(to.path);
  });
});
