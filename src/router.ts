import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/entries/:category',
      name: 'entries',
      component: Home,
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import(/* webpackChunkName: "categories" */  './views/Categories.vue'),
    },
    {
      path: '/random/:rnd',
      name: 'random',
      component: () => import(/* webpackChunkName: "random" */ './views/Random.vue'),
    },
    {
      path: '/detail/:title/:link',
      name: 'detail',
      component: () => import(/* webpackChunkName: "random" */ './views/Detail.vue'),
    },
  ],
});
