import { defineConfig } from 'umi';
import routers from './config/routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routers,
  fastRefresh: {},
  theme: {
    'primary-color': '#1e7be2',
    'heading-color': 'rgba(0, 0, 0, 0.85)',
  },
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      // pathRewrite: { '^/api': '' },
      changeOrigin: true,
    },
  },
});
