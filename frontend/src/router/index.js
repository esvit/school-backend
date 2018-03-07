import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import SecondPage from '../views/SecondPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      title: 'Home page',
      path: '/',
      component: Home
    },
    {
      title: 'Second page',
      path: '/second',
      component: SecondPage
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})
