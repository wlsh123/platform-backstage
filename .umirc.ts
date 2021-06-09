import { defineConfig } from 'umi';
import routes from './config/routes.js';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  theme: {
    'primary-color': '#1e7be2',
    'heading-color': 'rgba(0, 0, 0, 0.85)',
  },
});
