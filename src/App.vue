<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useCounterStore } from './stores/counter';
import { useStore } from './stores';
import iconCart from './components/icons/IconCart.vue'
const counter = useCounterStore();
const store = useStore()

</script>

<template>
  <header>
 
   <div class="wrapper px-6 py-2 flex justify-between items-center bg-slate-700 text-white">
    <router-link to="/" class="text-xl font-semibold">
      MY RESTO
    </router-link>
    <!--   <div class="flex items-center">
        <router-link to="/">Home</router-link>
        <router-link to="/about" >About</router-link>
      </div> -->
      <router-link to="/checkout" class="relative w-max h-max">
        <iconCart class="scale-110" />
         <span class="absolute -top-2 right-2 bg-red-600 text-white w-5 h-5 rounded-full flex justify-center items-center"> {{ store.jumlah }}</span> 
        </router-link>
    </div>
  </header>
  <RouterView />
</template>
