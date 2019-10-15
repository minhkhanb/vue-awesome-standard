import { GETTERS } from './const';

export const getters = {
  [GETTERS.IS_LOADING]: ({ loadingStack }) => (loadingStack.length > 0),
};
