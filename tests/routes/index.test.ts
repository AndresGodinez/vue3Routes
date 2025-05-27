import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';
import router from '../../router/routes';
import { expect } from 'vitest';
import routes from '../../router/routes';
import { RouteLocationNormalized } from 'vue-router';

describe('Routes', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });
  test('should be render home page / correctly', async () => {
    await router.push('/');
    await router.isReady();
    expect(wrapper.html()).toContain('Bienvenido a nuestro sitio web');
  });

  test('should be render features page /features correctly', async () => {
    await router.push('/features');
    await router.isReady();
    expect(wrapper.html()).toContain('Master Cleanse Reliac Heirloom');
  });

  test('should be render contact page /features correctly', async () => {
    await router.push('/contact');
    await router.isReady();
    expect(wrapper.html()).toContain('Post-ironic portland shabby chic echo park');
  });

  test('should be render pricing page /pricing correctly', async () => {
    await router.push('/pricing');
    await router.isReady();
    expect(wrapper.html()).toContain('Choose a plan that works best for you and');
  });

  test('should do not show the pokemon page if is unauthenticated', async () => {
    localStorage.clear();
    await router.push('/pokemon/151');
    await router.isReady();
    expect(wrapper.html()).toContain('Login');
  });
  test('should show the pokemon page if is authenticated', async () => {
    localStorage.clear();
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('authUserId');
    await router.push('/pokemon/151');
    await router.isReady();
    expect(wrapper.html()).toContain('Pokemón Name');
    expect(wrapper.html()).toContain('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg');
  });

  test('should be number on parameter in pokemon route', async () => {
    const route: RouteLocationNormalized = {
      matched: [],
      fullPath: '/pokemon/2',
      query: {},
      hash: '',
      redirectedFrom: undefined,
      name: undefined,
      meta: {},
      path: '',
      params: { id: '2' },
    };
    const pokemonRoute = routes.getRoutes().find(route => route.name === 'pokemon');
    const { id } = pokemonRoute?.props.default(route);
    expect(id).toBe(2);
    expect(pokemonRoute).toBeTruthy();

  });

  test('should return default value if argument is not a number', async () => {
    const route: any = {
      params: { id: '2asd' },
      fullPath: '/pokemon/2asd',
    };
    const pokemonRoute = routes.getRoutes().find(route => route.name === 'pokemon');
    const { id } = pokemonRoute?.props.default(route);
    expect(id).toBe(1);
    expect(pokemonRoute).toBeTruthy();

  });


});
