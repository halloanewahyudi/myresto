<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from './stores/cart'
const cart = useCartStore()
</script>
<template>
  <header class="fixed top-0 left-0 w-full min-h-max py-3 px-4 lg:px-10 bg-slate-700 text-white ">
    <div class="wrapper flex gap-4 items-center justify-between">
      <router-link to="/" class="text-xl font-semibold">
        MY RESTO
      </router-link>
      <nav class="flex gap-3 items-center">
        <RouterLink to="/">Food</RouterLink>
        <RouterLink to="/">Drink</RouterLink>
        <RouterLink to="/about" class=" p-1 px-3 rounded-full bg-red-600 text-white">
          <i class="bi bi-basket2"></i> {{ cart.cartCount }}
        </RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

