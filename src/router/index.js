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
      path: '/register',
      name: 'user.register',
      component: () => import('../views/user/Register.vue'),
    },
    {
      path: '/login',
      name: 'user.login',
      component: () => import('../views/user/Login.vue'),
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

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('x_xsrf_token')

  if ((to.name === 'user.login' || to.name === 'user.register') && token) {
    return next({
      name: 'main'
    })
  }

  next()
})

export default router