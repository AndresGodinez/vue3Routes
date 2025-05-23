import { shallowMount } from '@vue/test-utils';
import LandingLayout from '../../../../src/modules/landing/layouts/LandingLayout.vue';
import router from '../../../../router/routes';
import { expect } from 'vitest';

describe('LandingLayout.vue', () => {
  test('should be render component correctly', () => {
    const wrapper = shallowMount(LandingLayout, {
      global: {
        plugins: [router],
      },
    });
    const expectRouterLinks = 5;
    const headerTag = wrapper.find('header');
    expect(headerTag.exists()).toBe(true);
    const routerLinks = wrapper.findAllComponents({ name: 'RouterLink' });
    expect(routerLinks.length).toBe(expectRouterLinks);
    const footer = wrapper.find('footer');
    expect(footer.exists()).toBe(true);

  });
});
