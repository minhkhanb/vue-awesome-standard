import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '~/components/HelloWorld.vue';

Vue.use(Vuetify);

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      name: 'HelloWorld',
      propsData: { msg },
    });
    expect(wrapper.find('h1').text()).toMatch(msg);
  });
});
