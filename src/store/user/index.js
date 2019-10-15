import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import profile, { MODULE_NAME as PROFILE_MODULE_NAME } from './profile';

export * from './const';

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {
    [PROFILE_MODULE_NAME]: profile,
  },
};
