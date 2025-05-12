import Layout from '../layouts/MainLayout.vue'
import Index from '@/views/NolsatuXpert.vue'


const routes = [
  {
    component: Layout,
    path: '/',
    name: 'app',
    children: [
      {
        component: Index,
        path: '/',
        name: 'index',
      },
    ],
  },
]
export default routes