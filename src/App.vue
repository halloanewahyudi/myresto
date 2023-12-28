<script setup>
import { computed, onMounted, ref, watchEffect } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute()
import DrinkVue from './components/icons/Drink.vue';
import FoodVue from './components/icons/Food.vue';
import KeranjangVue from './components/Keranjang.vue';
const navbar = ref(false)
const addClass = ()=>{
   if(route.path == '/'){
    document.body.classList.add('home')
    navbar.value = false
   }else{
    document.body.classList.remove('home')
    navbar.value = true
   }
}
watchEffect(()=>{
  addClass()
})
</script>
<template>
  <header v-if="navbar"  class="fixed top-0 left-0 w-full min-h-max py-3 px-4 lg:px-10 bg-slate-700 text-white ">
    <div class="wrapper flex gap-4 items-center justify-between">
      <router-link to="/" class="text-xl font-semibold">
       <img src="./assets/logo.png" alt="" class="w-12 h-12">
      </router-link>
      <nav class="flex gap-3 items-center">
        <RouterLink to="/food" class="flex gap-2 py-1 px-2 items-center rounded-lg bg-slate-800"> <FoodVue/> F </RouterLink>
        <RouterLink to="/drink" class="flex gap-2 py-1 px-2 items-center rounded-lg bg-slate-800"><DrinkVue /> D</RouterLink>
        <KeranjangVue />
      </nav>
    </div>
  </header>
  <RouterView />
</template>

