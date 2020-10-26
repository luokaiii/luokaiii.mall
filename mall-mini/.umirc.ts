import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  exportStatic: {},
  routes: [
    {
      path: '/',
      title: '微の商城',
      component: '@/layout/index',
      routes: [
        {
          path: '/',
          redirect: '/home',
        },
        {
          path: '/home',
          title: '首页',
          component: '@/pages/home/index',
        },
        {
          path: '/cart',
          title: '购物车',
          component: '@/pages/cart/index',
        },
        {
          path: '/me',
          title: '个人中心',
          component: '@/pages/me/index',
        },
      ],
    },
  ],
});
