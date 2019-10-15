export const MODULE_NAME = 'user';

/* GETTERS - START */
const _GETTERS = {
  IS_AUTH: 'isAuth',
  TOKEN: 'token',
  EMAIL: 'email',
};

export const GETTERS = {
  IS_AUTH: `${MODULE_NAME}/${_GETTERS.IS_AUTH}`,
  TOKEN: `${MODULE_NAME}/${_GETTERS.TOKEN}`,
  EMAIL: `${MODULE_NAME}/${_GETTERS.EMAIL}`,
};
/* GETTERS - END */

/* ACTIONS - START */
const _ACTIONS = {
  LOGIN: 'logIn',
  LOGOUT: 'logOut',
};

export const ACTIONS = {
  LOGIN: `${MODULE_NAME}/${_ACTIONS.LOGIN}`,
  LOGOUT: `${MODULE_NAME}/${_ACTIONS.LOGOUT}`,
};
/* ACTIONS - END */

/* MUTATIONS - START */
const _MUTATORS = {
  SET_AUTH: 'setAuth',
  SET_TOKEN: 'setToken',
  SET_EMAIL: 'setEmail',
  CLEAR_TOKEN: 'clearToken',
};

export const MUTATORS = {
  SET_AUTH: `${MODULE_NAME}/${_MUTATORS.SET_AUTH}`,
  SET_TOKEN: `${MODULE_NAME}/${_MUTATORS.SET_TOKEN}`,
  CLEAR_TOKEN: `${MODULE_NAME}/${_MUTATORS.CLEAR_TOKEN}`,
  SET_EMAIL: `${MODULE_NAME}/${_MUTATORS.SET_EMAIL}`,
};
/* MUTATIONS - END */

export default {
  _GETTERS,
  _ACTIONS,
  _MUTATORS,
};
