import { mount, RouterLinkStub } from '@vue/test-utils';
import PokemonPage from '../../../../src/modules/landing/pages/PokemonPage.vue';
import { expect } from 'vitest';

describe('PokemonPage.vue', () => {
  const wrapper = mount(PokemonPage, {
    props: {
      id: 25,
    },
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });
  test('should be render component with the previos button', () => {
    const routerLinksComponente = wrapper.findAllComponents(RouterLinkStub);
    const previousButton = routerLinksComponente.find(link => link.attributes('id') === 'previous-button');
    const propertyPreviousButton = previousButton.props('to');
    // console.log({ previousButton: propertyPreviousButton });
    expect(previousButton.exists()).toBe(true);
    expect(previousButton.text()).toBe('←');
    expect(propertyPreviousButton).toEqual({ name: 'pokemon', params: { id: 24 } });


  });
  test('should be render component with the next button', () => {
    const nextButton = wrapper.findComponent('[id="next-button"]');
    const propertyNextButton = nextButton.props('to');
    expect(nextButton.exists()).toBe(true);
    expect(nextButton.text()).toBe('→');
    expect(propertyNextButton).toEqual({ name: 'pokemon', params: { id: 26 } });
  });
});
