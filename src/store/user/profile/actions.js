import CONST from './const';
import { mockProfile } from './mocks';

export const actions = {
  [CONST._ACTIONS.LOAD_PROFILE]: async ({ commit }) => {
    commit(CONST._MUTATORS.SET_PROFILE, await mockProfile());
  },

  [CONST._ACTIONS.UPDATE_PROFILE]: async ({ commit }, profile) => {
    commit(CONST._MUTATORS.SET_PROFILE, await mockProfile(profile));
  },
};
