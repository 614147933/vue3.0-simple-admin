import { createRouter, createWebHistory } from 'vue-router';

import Layout from '@/layout';

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: { title: '登录'},
  },
  {
    path: '/',
    component: Layout,
    redirect: '/homepage',
    children: [
      {
        path: '/homepage',
        component: () => import('@/views/home-page/index'),
        name: 'Homepage',
        meta: { title: '首页'},
      },
      {
        path: '/404',
        component: () => import('@/views/error-page/index'),
        name: 'page404',
        meta: { title: '错误'},
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
