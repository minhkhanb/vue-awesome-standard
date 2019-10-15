/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '',
    // Relative to /src/views
    view: 'Dashboard',
  },
  {
    path: '/home',
    name: 'Home',
    view: 'Home',
  },
  {
    path: '/about',
    name: 'About',
    view: 'About',
  },
];
