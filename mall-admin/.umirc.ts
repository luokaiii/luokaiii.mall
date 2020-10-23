import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      title: '微の商城 | 后台管理系统',
      component: '@/layout/index',
      routes: [
        {
          path: '/',
          redirect: '/home',
        },
        {
          path: '/home',
          name: '首页',
          component: '@/pages/dashboard/index',
        },
        {
          path: '/goods',
          name: '商品管理',
          routes: [
            {
              path: '/goods/list',
              name: '商品管理',
              component: '@/pages/home/index',
            },
            {
              path: '/goods/category',
              name: '分类管理',
              component: '@/pages/home/index',
            },
            {
              path: '/goods/comment',
              name: '评价管理',
              component: '@/pages/home/index',
            },
          ],
        },
        {
          path: '/orders',
          name: '订单管理',
          routes: [
            {
              path: '/orders/list',
              name: '全部订单',
              component: '@/pages/home/index',
            },
            {
              path: '/orders/WAITING',
              name: '待发货订单',
              component: '@/pages/home/index',
            },
            {
              path: '/orders/PICK',
              name: '待取件订单',
              component: '@/pages/home/index',
            },
            {
              path: '/orders/eval',
              name: '待评价订单',
              component: '@/pages/home/index',
            },
          ],
        },
        {
          path: '/repair',
          name: '售后管理',
          routes: [
            {
              path: '/repair/WAITING',
              name: '待处理申请',
              component: '@/pages/home/index',
            },
            {
              path: '/repair/FINISHED',
              name: '历史售后',
              component: '@/pages/home/index',
            },
            {
              path: '/repair/REJECTED',
              name: '已拒绝处理',
              component: '@/pages/home/index',
            },
          ],
        },
        {
          path: '/users',
          name: '用户管理',
          routes: [
            {
              path: '/users/list',
              name: '用户列表',
              component: '@/pages/home/index',
            },
            {
              path: '/users/disabled',
              name: '冻结账户',
              component: '@/pages/home/index',
            },
          ],
        },
        {
          path: '/system',
          name: '后台管理',
          component: '@/pages/home/index',
          routes: [
            {
              path: '/system/users',
              name: '账户管理',
              component: '@/pages/home/index',
            },
            {
              path: '/system/roles',
              name: '权限管理',
              component: '@/pages/home/index',
            },
            {
              path: '/system/menus',
              name: '菜单管理',
              component: '@/pages/home/index',
            },
          ],
        },
      ],
    },
  ],
});
