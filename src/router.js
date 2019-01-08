import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Homepage.vue')
    },
    {
      path: '/recipe/:id',
      name: 'OpenRecipe',
      props: true,
      component: () => import('./components/OpenRecipe/OpenRecipe.vue')
    }
  ]
});