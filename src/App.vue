<script setup>
import { RouterLink, RouterView } from 'vue-router'
import KeranjangVue from './components/Keranjang.vue';

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
        <KeranjangVue />
      </nav>
    </div>
  </header>
  <RouterView />
</template>

