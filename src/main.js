import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue';

import HomePage from './features/Dashboard/HomePage';

import Auth from './features/Auth';
import LoginPage from './features/Auth/LoginPage';
import ResetPassword from './features/Auth/ResetPassword';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  { 
    path: '/auth',
    component: Auth,
    redirect: { name: 'login' },
    children: [
      {
        path: 'login',
        name: 'login',
        component: LoginPage
      },
      {
        path: 'reset-password',
        name: 'reset-password',
        component: ResetPassword
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
