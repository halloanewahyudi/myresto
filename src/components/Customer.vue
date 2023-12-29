<script setup>
import { computed, reactive, ref, watchEffect } from 'vue'
import { useCustomerStore } from '../stores/customer'
import LoadingVue from './icons/Loading.vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const cust = useCustomerStore()
const load = ref(false)
const formSubmit = () =>{
    load.value = true
      setTimeout(() => {
         router.push('/qris')
      }, 500);

}
</script>

<template>
   <div v-if="load" class="flex flex-col justify-center text-center  items-center min-h-[80vh]">
        <LoadingVue />
    </div>
  <div class="p-8 flex flex-col min-h-[80vh] justify-center items-center">
    <h4 class="text-center mb-5">Silakan isi data anda </h4>
    <form @submit.prevent="formSubmit" class=" flex flex-col gap-4 bg-white rounded-lg p-5 w-full">
      <div class="flex flex-col gap-3">
        {{ getData }}
        <label for="nama">Nama</label>
        <input type="text" v-model="cust.nama">
      </div>
      <div class="flex flex-col gap-3">
        <label for="nama">Phone</label>
        <input type="tel" v-model="cust.hp" required>
      </div>
      <div class="flex flex-col gap-3">
        <label for="nama">Meja</label>
        <input type="number" v-model="cust.meja" required>
      </div>
      <button  type="submit" class="mt-4 py-2 px-4 rounded-lg bg-slate-700 text-white hover:bg-slate-800;">
        Submit
      </button>
    </form>
  </div>
</template>