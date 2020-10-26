import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layout/index',
      routes: [
        {
          path: '/home',
          title: '首页',
          component: '@/pages/home/index',
        },
        {
          path: '/cart',
          title: '首页',
          component: '@/pages/cart/index',
        },
        {
          path: '/me',
          title: '首页',
          component: '@/pages/me/index',
        },
      ],
    },
  ],
});
