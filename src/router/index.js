import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
 
const router = createRouter({
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/food',
      name: 'food',
      component: () => import('../views/FoodView.vue')
    },
    {
      path: '/drink',
      name: 'drink',
      component: () => import('../views/DrinkView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import('../views/CustomerView.vue')
    },
    {
      path: '/qris',
      name: 'qris',
      component: () => import('../views/QrisView.vue')
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: () => import('../views/ThanksView.vue')
    },
    {
      path: '/kitchen',
      name: 'kitchen',
      component: () => import('../views/KitchenView.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/OrdersView.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/404.vue') },

  ]

})

export default router
