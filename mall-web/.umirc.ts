import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  exportStatic: {},
  routes: [
    { path: '/', name: '微の商城', component: '@/pages/index' },
    { path: '/login', name: '微の商城 | 登录', component: '@/pages/login' },
    { path: '/cate', name: '微の商城 | 全部分类', component: '@/pages/cate' },
    { path: '/cart', name: '微の商城 | 购物车', component: '@/pages/cart' },
    { path: '/details/:id', name: '微の商城', component: '@/pages/details' },
  ],
});
