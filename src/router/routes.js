import Layout from '../layouts/MainLayout.vue'

const routes = [
  {
    component: Layout,
    path: '/',
    name: 'app',
    children: [
      {
        component: () => import('@/views/NolsatuXpert.vue'),
        path: '/',
        name: 'index',
      },
    ],
  },
]
export default routes
