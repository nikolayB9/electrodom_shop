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
      path: '/user/register',
      name: 'user.register',
      component: () => import('../views/user/Register.vue'),
    },
    {
      path: '/category/:id',
      name: 'category.show',
      component: () => import('../views/category/Show.vue'),
    },
    {
      path: '/product/:id',
      name: 'product.show',
      component: () => import('../views/product/Show.vue'),
    },
  ],
})

export default router
