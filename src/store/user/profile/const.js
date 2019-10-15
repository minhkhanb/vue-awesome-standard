import { MODULE_NAME as PARENT_MODULE_NAME } from '../const';

export const MODULE_NAME = 'profile';
const _PREFIX = `${PARENT_MODULE_NAME}/${MODULE_NAME}`;

/* GETTERS - START */
const _GETTERS = {
  PROFILE: 'getProfile',
};

export const GETTERS = {
  PROFILE: `${_PREFIX}/${_GETTERS.GET_PROFILE}`,
};
/* GETTERS - END */

/* ACTIONS - START */
const _ACTIONS = {
  LOAD_PROFILE: 'loadProfile',
  UPDATE_PROFILE: 'updateProfile',
};

export const ACTIONS = {
  LOAD_PROFILE: `${_PREFIX}/${_ACTIONS.LOAD_PROFILE}`,
  UPDATE_PROFILE: `${_PREFIX}/${_ACTIONS.UPDATE_PROFILE}`,
};
/* ACTIONS - END */

/* MUTATIONS - START */
const _MUTATORS = {
  SET_PROFILE: 'setProfile',
};

export const MUTATORS = {
  SET_PROFILE: `${_PREFIX}/${_MUTATORS.SET_PROFILE}`,
};
/* MUTATIONS - END */

export default {
  _GETTERS,
  _ACTIONS,
  _MUTATORS,
};
