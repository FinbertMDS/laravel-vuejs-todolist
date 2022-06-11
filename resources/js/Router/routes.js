const routes = [
  {
    path: '/login',
    component: () => import('../Components/Pages/Login.vue'),
    name: 'login'
  },
  {
    path: '/register',
    component: () => import('../Components/Pages/Register.vue'),
    name: 'register'
  },
  {
    path: '/',
    component: () => import('../Components/Pages/TodoList.vue'),
    name: 'home'
  },
  {
    path: '/logout',
    name: 'logout'
  },
  // otherwise redirect to home
  { path: '*', redirect: '/' }
]

export default routes;
