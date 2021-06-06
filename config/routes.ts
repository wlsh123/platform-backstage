export default [
  { 
    path: '/', 
    component: '@/pages/home/index', 
    routes:[
      {path: '/login', component: '@/pages/login'},
      {path: '/register', component: '@/pages/register'},
    ]
  },
  { path: '/user', component: '@/pages/user' },
  { path: '/404', component: '@/pages/404' }
]