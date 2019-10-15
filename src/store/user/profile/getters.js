import CONST from './const';

export const getters = {
  [CONST._GETTERS.PROFILE]: ({
    id, firstName, lastName, email, photo,
  }) => ({
    id,
    firstName,
    lastName,
    email,
    photo,
  }),
};
