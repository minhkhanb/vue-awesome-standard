export const mockProfile = profile => (
  new Promise(resolve => setTimeout(() => resolve(profile || {
    id: 'hsdg-asd34-dfs322-11fsdf',
    firstName: 'Sample',
    lastName: 'User',
    email: 'user@sample.com',
    photo: null,
  }), 1000))
);
