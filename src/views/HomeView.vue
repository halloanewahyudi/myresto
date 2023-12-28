<script setup>
import DrinkVue from "../components/icons/Drink.vue";
import FoodVue from "../components/icons/Food.vue";


DrinkVue
</script>
<template>
  <main class="">
   <div class="flex flex-col justify-center items-center min-h-screen gap-5 px-6 text-center">
    <h1 class="text-2xl font-semibold">Selamat Datang di <br> My resto</h1>
    <h4 class="text-lg">Silakan Menikmati menu kami</h4>

      <router-link to="/food" class=" gap-3 items-center py-2 px-4 rounded-lg bg-slate-600 hover:bg-slate-500 inline-flex"><FoodVue /> Food </router-link>
      <router-link to="/drink" class=" gap-3 items-center py-2 px-4 rounded-lg  bg-slate-600 hover:bg-slate-500 inline-flex"><DrinkVue /> Drink </router-link>

   </div>
  </main>
</template>
