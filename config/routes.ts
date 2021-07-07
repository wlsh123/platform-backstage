const routes = [
  { exact: true, path: '/', redirect: '/home' },
  {
    exact: true,
    path: '/home',
    component: '@/pages/home/home',
    wrappers: ['@/wrappers/auth'],
    title: '平台后台-首页',
  },
  {
    exact: true,
    path: '/user/channelManagement',
    component: '@/pages/user/channelManagement',
    wrappers: ['@/wrappers/auth'],
    title: '平台后台-渠道管理',
    routes: [
      {
        path: '/editchannel',
        component: '@/pages/user/channelManagement/EditChannel',
      },
    ],
  },
  {
    exact: true,
    path: '/user/platformDatabase/qualificationGroup',
    component: '@/pages/user/platformDatabase/qualificationGroup',
    wrappers: ['@/wrappers/auth'],
    title: '平台后台-资质分祖',
  },
  { path: '/login', component: '@/pages/login/Login' },
  { path: '*', component: '@/pages/404' },
];
export default routes;
