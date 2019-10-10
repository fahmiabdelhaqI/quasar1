
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Login', component: () => import('pages/Login/Index.vue') },
      { path: 'Register', component: () => import('pages/Register/Register.vue') },
      { path: 'dasboard', component: () => import('pages/darboard/dasboard.vue') },
      { path: 'Table', component: () => import('pages/Table/Table.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
