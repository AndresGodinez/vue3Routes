import { shallowMount } from '@vue/test-utils';
import LandingLayout from '../../../../src/modules/landing/layouts/LandingLayout.vue';
import router from '../../../../router/routes';
import { expect } from 'vitest';

describe('LandingLayout.vue', () => {
  const wrapper = shallowMount(LandingLayout, {
    global: {
      plugins: [router],
    },
  });

  test('should be render component correctly with RouterView', () => {

    const routerView = wrapper.findComponent({ name: 'RouterView' });
    expect(routerView.exists()).toBe(true);

  });

  test('should be render header correctly', ()=>{
    const headerTag = wrapper.find('header');
    expect(headerTag.exists()).toBe(true);
  })

  test('should be have a router links length ', ()=>{
    const expectRouterLinks = 5;
    const routerLinks = wrapper.findAllComponents({ name: 'RouterLink' });
    expect(routerLinks.length).toBe(expectRouterLinks);

  })

  test('should be render footer correctly', () => {
   const footer = wrapper.find('footer');
    expect(footer.exists()).toBe(true);

  });
});
