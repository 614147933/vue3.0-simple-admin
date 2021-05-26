import { createRouter, createWebHistory } from 'vue-router';

import Layout from '@/layout';

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    hidden: true,
    meta: { title: '登录' },
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
        meta: { title: '首页' },
      },
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/404',
        component: () => import('@/views/error-page/index'),
        name: 'page404',
        meta: { title: '错误' },
      },
    ]
  },
  {
    path: '/error-log',
    component: Layout,
    children: [
      {
        path: 'log',
        component: () => import('@/views/error-log/index'),
        name: 'ErrorLog',
        meta: { title: 'Error Log', icon: 'bug' }
      }
    ]
  },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/homepage',
  //   children: [
  //     {
  //       path: '/homepage',
  //       component: () => import('@/views/home-page/index'),
  //       name: 'Homepage',
  //       meta: { title: '首页' },
  //     },
  //     {
  //       path: '/404',
  //       component: () => import('@/views/error-page/index'),
  //       name: 'page404',
  //       meta: { title: '错误' },
  //     },
  //   ]
  // }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes
});

export default router;
