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
    path: '/user/ChannelManagement',
    component: '@/pages/user/channelManagement',
    wrappers: ['@/wrappers/auth'],
    title: '平台后台-渠道管理',
  },
  { path: '/login', component: '@/pages/login/Login' },
  { path: '*', component: '@/pages/404' },
];
export default routes;
