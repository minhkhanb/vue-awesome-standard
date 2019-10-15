import CONST from './const';
import { mockGetToken } from './mocks';

export const actions = {
  [CONST._ACTIONS.LOGIN]: async ({ dispatch, commit }, credentials = { email: '', password: '' }) => {
    await dispatch(CONST._ACTIONS.LOGOUT);
    commit(CONST._MUTATORS.SET_TOKEN, await mockGetToken(credentials.email, credentials.password));
  },

  [CONST._ACTIONS.LOGOUT]: ({ commit }) => {
    commit(CONST._MUTATORS.CLEAR_TOKEN);
  },
};
