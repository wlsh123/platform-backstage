const routes = [
  { exact: true, path: '/', redirect: '/home' },
  {
    exact: true,
    path: '/home',
    component: '@/pages/home/home',
    title: '平台后台-首页',
  },
  {
    exact: true,
    path: '/userManagement/ChannelManagement',
    component: '@/pages/UserManagement/ChannelManagement',
  },
  { path: '/login', component: '@/pages/login/Login' },
];
export default routes;
