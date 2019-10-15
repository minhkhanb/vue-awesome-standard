import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import user, { MODULE_NAME as USER_MODULE_NAME } from './user';

Vue.use(Vuex);

export * from './const';

const store = new Store({
  state, // global state
  getters, // global getters
  actions, // global actions
  mutations, // global mutations
  modules: {
    [USER_MODULE_NAME]: user,
  },
});

export default store;
