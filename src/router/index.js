import Vue from 'vue';
import Router from 'vue-router';
import iView from 'iview';
import Home from '@/views/home';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home2',
      name: 'home2',
      component: () => import('@/views/home2')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/views/404')
    },
    {
      path: '/403',
      name: '403',
      component: () => import('@/views/403')
    },
    {
      path: '/500',
      name: '500',
      component: () => import('@/views/500')
    },
  ]
});

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach((to) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

export default router;
