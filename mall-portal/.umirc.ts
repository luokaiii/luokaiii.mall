import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  routes: [
    {
      path: '/',
      title: '微の商城 | 微前端',
      component: '@/layout/index',
      routes: [
        {
          path: '/',
          name: '首页',
          component: '@/pages/index',
        },
        {
          path: '/mall-admin',
          name: '后台管理',
          microApp: 'mall-admin',
        },
        {
          path: '/mall-web',
          name: '商城Web',
          microApp: 'mall-web',
        },
        {
          path: '/mall-mini',
          name: '商城H5手机版',
          microApp: 'mall-mini',
        },
      ],
    },
  ],
  fastRefresh: {},
  qiankun: {
    master: {
      apps: [
        {
          name: 'mall-admin',
          entry: '//localhost:8001',
          base: '/mall-admin',
          mountElementId: 'subapp-container-id',
        },
        {
          name: 'mall-web',
          entry: '//localhost:8002',
          base: '/mall-web',
          mountElementId: 'subapp-container-id',
        },
        {
          name: 'mall-mini',
          entry: '//localhost:8003',
          base: '/mall-mini',
          mountElementId: 'subapp-container-id',
        },
      ],
    },
  },
});
