<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from './stores/cart';
const cart = useCartStore()
</script>

<template>
  <div class="text-sm relative max-w-screen-md mx-auto bg-slate-100 shadow-2xl min-h-[90vh]">
  <header class="fixed left-0 right-0 top-0 w-full max-w-screen-md mx-auto">
   <div class="wrapper px-6 py-3 flex justify-between items-center bg-slate-700 text-white">
    <router-link to="/" class="text-xl font-semibold">
      MY RESTO
    </router-link>
      <router-link to="/checkout" class="relative w-max h-max">
        <i class="bi bi-basket2 text-xl"></i>
         <span v-if="cart.tambahKeranjang" class="absolute -top-1 -left-2 bg-red-600 text-white w-5 h-5 rounded-full flex justify-center items-center">
          {{ cart.tambahKeranjang }}
         </span> 
        </router-link>
    </div>
  </header>
  <RouterView />
</div>
</template>
