import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    config: {},
  },
  exportStatic: {},
  qiankun: {
    slave: {},
  },
  routes: [
    { path: '/', name: '微の商城', component: '@/pages/index' },
    { path: '/test', name: '微の商城', component: '@/pages/test' },
    {
      path: '/login',
      exact: false,
      name: '微の商城 | 登录',
      component: '@/pages/login',
    },
    { path: '/cate', name: '微の商城 | 全部分类', component: '@/pages/cate' },
    { path: '/cart', name: '微の商城 | 购物车', component: '@/pages/cart' },
    { path: '/details/001', name: '微の商城', component: '@/pages/details' },
  ],
  proxy: {
    '/api': {
      target: 'http://localhost:8071/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
