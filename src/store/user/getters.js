import CONST from './const';

export const getters = {
  [CONST._GETTERS.IS_AUTH]: ({ isAuth }) => (!!isAuth),
  [CONST._GETTERS.TOKEN]: ({ token }) => token,
  [CONST._GETTERS.EMAIL]: ({ email }) => email,
};
