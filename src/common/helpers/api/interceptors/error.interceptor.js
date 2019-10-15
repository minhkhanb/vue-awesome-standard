import store from '~/store';
import { MUTATORS } from '~/store/user';

export const ErrorIntercept = (response) => {
  response.use(
    data => (data),
    (err) => {
      if (err.response.status === 401) {
        // Handle error
        store.commit(MUTATORS.SET_AUTH, false);
      }
      return Promise.reject(err);
    },
  );
};
