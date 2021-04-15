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
import User from './features/User';
import UserListPage from './features/User/UserListPage';
import UserCreatePage from './features/User/UserCreatePage';
import UserEditPage from './features/User/UserEditPage';

// Department
import Department from './features/Department';
import DepartmentList from './features/Department/DepartmentList';
import DepartmentCreate from './features/Department/DepartmentCreate';

// import { me } from './apis/auth';

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
        path: 'user',
        name: 'user',
        component: User,
        redirect: { name: 'user-list' },
        children: [
          { path: 'list', name: 'user-list', component: UserListPage },
          { path: 'create', name: 'user-create', component: UserCreatePage },
          { path: 'edit/:id', name: 'user-edit', component: UserEditPage },
        ]
      },
      {
        path: 'department',
        name: 'department',
        component: Department,
        redirect: { name: 'department-list' },
        children: [
          { path: 'list', name: 'department-list', component: DepartmentList },
          { path: 'create', name: 'department-create', component: DepartmentCreate }
        ]
      }
    ]
  },
  
];

const router = new VueRouter({
  mode: 'history',
  routes
});

// router.beforeEach(async (to, from, next) => {
//   if (to.next === 'login' || to.name === 'reset-password') {
//     return next();
//   } else {
//     const res = await me();
//     if (res) {
//       return next();
//     } else {
//       return next({name: 'login'});
//     }
//   }
  
// });

export default router;