export const mockGetToken = (email, password) => (
  new Promise(resolve => setTimeout(() => resolve(`${email}_${password}`), 1000))
);
