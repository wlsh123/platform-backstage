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
  { exact: true, path: '/user', redirect: '/user/channelManagement' },
  {
    exact: true,
    path: '/user/channelManagement',
    component: '@/pages/user/channelManagement',
  },
  { component: '@/pages/404' },
];
