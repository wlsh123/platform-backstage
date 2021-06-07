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
  {exact: true, path:'/user', component:'@/pages/user/index'},
  {
    path: '/user/userManagenment',
    component: '@/pages/userManagenment',
  },
  { component: '@/pages/404' },
];
