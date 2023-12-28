<script setup>
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'
import { useCustomerStore } from '../stores/customer'
import axios from 'axios';
import LoadingVue from './icons/Loading.vue';

const load = ref(false)
const rounter = useRouter()
const cart = useCartStore()
const cust = useCustomerStore()
const url = ref('https://resto.ardanadutaperkasa.com/wp/wp-json/wp/v2/customer')
const getOrder = ref(JSON.stringify(cart.listMenu))
const getData = {
    title:'',
    acf:{
        hp:'',
        meja:null,
        status:null,
        order: getOrder.value,
        total: cart.total
    },
    status:'publish'
}
const postData = ()=>{
    const username = 'admin'; 
    const applicationPassword = 'sUHR MncK OFq7 NkgX B4Nw m3rA';
    const authHeader = `Basic ${btoa(`${username}:${applicationPassword}`)}`
   axios.post(url.value, JSON.stringify(getData) ,{
    headers:{
        'Content-Type': 'application/json',
        Authorization: authHeader,
    }
   })
   .then((res)=>{
      console.log(res)
      cust.nama = getData.title
      cust.hp = getData.acf.hp 
      cust.meja = getData.acf.meja
      setTimeout(() => {
        rounter.push('/qris')
        cart.resetCount
        load.value = true
      }, 500);
   })
   .catch(console.error())
}
</script>

<template>
   <div v-if="load" class="flex flex-col justify-center text-center  items-center min-h-[80vh]">
        <LoadingVue />
    </div>
  <div class="p-8 flex flex-col min-h-[80vh] justify-center items-center">
    <h4 class="text-center mb-5">Silakan isi data anda </h4>
    <form @submit.prevent="postData" class=" flex flex-col gap-4 bg-white rounded-lg p-5 w-full">
      <div class="flex flex-col gap-3">
        <label for="nama">Nama</label>
        <input type="text" v-model="getData.title">
      </div>
      <div class="flex flex-col gap-3">
        <label for="nama">Phone</label>
        <input type="tel" v-model="getData.acf.hp" required>
      </div>
      <div class="flex flex-col gap-3">
        <label for="nama">Meja</label>
        <input type="number" v-model="getData.acf.meja" required>
      </div>
      <button type="submit" class="mt-4 py-2 px-4 rounded-lg bg-slate-700 text-white hover:bg-slate-800;">
        Submit
      </button>
    </form>
  </div>
</template>