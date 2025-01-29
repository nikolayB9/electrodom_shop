import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/main/Index.vue'),
    },
    {
      path: '/category/:id',
      name: 'category.show',
      component: () => import('../views/category/Show.vue'),
    },
  ],
})

export default router
