import { MUTATORS } from './const';

let loadingId = 1;

export const mutations = {
  [MUTATORS.TOGGLE_LOADING]: (state, shouldShow) => {
    let { loadingStack } = state;
    if (shouldShow) {
      loadingStack = [
        ...loadingStack,
        loadingId,
      ];
      loadingId += 1;
    } else {
      loadingStack = loadingStack.slice().splice(1);
    }
    state.loadingStack = loadingStack;
  },
};
