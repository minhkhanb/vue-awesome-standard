import CONST from './const';

export const mutations = {
  [CONST._MUTATORS.SET_AUTH]: (state, authenticated) => {
    state.isAuth = !!authenticated;
  },
  [CONST._MUTATORS.SET_TOKEN]: (state, token) => {
    state.token = token;
  },
  [CONST._MUTATORS.CLEAR_TOKEN]: (state) => {
    state.token = '';
  },
  [CONST._MUTATORS.SET_EMAIL]: (state, email) => {
    state.email = email;
  },
};
