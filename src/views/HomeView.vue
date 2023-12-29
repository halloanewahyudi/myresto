<script setup>
import DrinkVue from "../components/icons/Drink.vue";
import FoodVue from "../components/icons/Food.vue";
import { animate , stagger} from "motion";
import { onMounted, ref, computed } from "vue";
onMounted(()=>{
  animate('.title',{
    scale:1.2,
    opacity:[0, 1]
  },{
    duration:1,
    delay: stagger(.6)
  })
})


</script>
<template>
  <main class="">
   <div class="flex flex-col justify-center items-center min-h-screen gap-5 px-10 text-center">
    <img src="../assets/logo.png" class="title w-24 h-24" alt="">
    <h1 class="title text-2xl font-semibold">Selamat Datang </h1>
    <h4 class="title text-lg">Silakan Menikmati menu kami</h4>
      <router-link to="/food" class=" gap-3 items-center py-2 px-4 rounded-lg bg-slate-600 hover:scale-105 hover:bg-slate-500 inline-flex"><FoodVue /> Food </router-link>
      <router-link to="/drink" class=" gap-3 items-center py-2 px-4 rounded-lg  bg-slate-600 hover:scale-105 hover:bg-slate-500 inline-flex"><DrinkVue /> Drink </router-link>
   </div>
  </main>
</template>
