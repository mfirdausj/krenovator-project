import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Booking from './views/Booking.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/booking',
      component: Booking
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin.vue')
    },
    {
      path: '/staff',
      name: 'staff',
      component: () => import('./views/Staff.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/User.vue')
    }
  ]
});

