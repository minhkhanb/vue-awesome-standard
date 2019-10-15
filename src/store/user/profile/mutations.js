/* eslint no-param-reassign: 'off' */
import CONST from './const';

export const mutations = {
  [CONST._MUTATORS.SET_PROFILE]: (state, info = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    photo: '',
  }) => {
    state = {
      ...state,
      ...info,
    };
  },
};
