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
  const from: any = {};

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

  test('should be block access to route if the user is unauthenticated using spyOn', async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    await isAuthenticatedGuard(to, from, next);
    expect(setItemSpy).toHaveBeenCalledWith('lastPath', to.path);
  });

  test('should allow access to the route if the user is authenticated using mock return', async () => {
    const getItemMock = vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('authUserId');
    await isAuthenticatedGuard(to, from, next);
    expect(getItemMock).toHaveBeenCalledWith('userId');
    expect(next).toHaveBeenCalledWith();
  });
});
