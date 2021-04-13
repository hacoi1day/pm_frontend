import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import HomePage from './features/Dashboard/HomePage';

// Auth
import Auth from './features/Auth';
import LoginPage from './features/Auth/LoginPage';
import ResetPassword from './features/Auth/ResetPassword';

// Dashboard
import UserInfo from './features/Dashboard/UserInfo';

// User
import CreateUserPage from './features/User/CreateUserPage';

import { me } from './apis/auth';

const routes = [
  { 
    path: '/auth',
    component: Auth,
    redirect: { name: 'login' },
    children: [
      { path: 'login', name: 'login', component: LoginPage },
      { path: 'reset-password', name: 'reset-password', component: ResetPassword }
    ]
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
    children: [
      { path: 'user-info', name: 'user-info', component: UserInfo },
      {
        path: 'user/create',
        name: 'user-create',
        component: CreateUserPage,
      }
    ]
  },
  
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach(async (to, from, next) => {
  if (to.next === 'login' || to.name === 'reset-password') {
    return next();
  }
  const res = await me();
  if (res) {
    return next();
  } else {
    return next({name: 'login'});
  }
});

export default router;