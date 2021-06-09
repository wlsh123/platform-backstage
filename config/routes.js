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
  { path: '/user', component: '@/pages/user' },
  {
    exact: true,
    path: '/user/channelManagement',
    component: '@/pages/user/channelManagement',
  },
];
