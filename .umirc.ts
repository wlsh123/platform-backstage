import { defineConfig } from 'umi';
import routes from './config/routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  theme: {
    'primary-color': '#1e7be2',
  },
});
