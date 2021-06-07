export default [
  {
    exact: true,
    path: '/',
    component: '@/pages/home/index',
    routes: [
      { path: '/login', component: '@/pages/login' },
      // { path: '/register', component: '@/pages/register' },
    ],
  },
  {
    exact: true,
    path: '/userManagenment',
    component: '@/pages/userManagenment',
  },
  { component: '@/pages/404' },
];
