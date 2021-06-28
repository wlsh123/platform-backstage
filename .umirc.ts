import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { exact: true, path: '/', redirect: '/home' },
    { exact: true, path: '/home', component: '@/pages/home/' },
    {
      exact: true,
      path: '/userManagement/ChannelManagement',
      component: '@/pages/UserManagement/ChannelManagement',
    },
    { path: '/login', component: '@/pages/login/Login' },
  ],
  fastRefresh: {},
  theme: {
    'primary-color': '#1e7be2',
    'heading-color': 'rgba(0, 0, 0, 0.85)',
  },
});
