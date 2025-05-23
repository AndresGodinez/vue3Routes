import { shallowMount } from '@vue/test-utils';
import App from '../src/App.vue';
import router from '../router/routes';

describe('App.vue', () => {
  it('should be render component correctly with RouterView', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    });
    console.log({ wrapper: wrapper.html() });

    //buscar el componente
    const routerView = wrapper.findComponent({ name: 'RouterView' });
    console.log({ routerView: routerView.html() });

    expect(routerView.exists()).toBe(true);

  });
});
