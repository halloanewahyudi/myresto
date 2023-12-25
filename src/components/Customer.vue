<script setup>
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'
import { useCustomerStore } from '../stores/customer'
import axios from 'axios';

const rounter = useRouter()
const cart = useCartStore()
const cust = useCustomerStore()
const url = ref('https://resto.ardanadutaperkasa.com/wp/wp-json/wp/v2/customer')
const getOrder = ref(JSON.stringify(cart.listMenu))
const getData = reactive({
    title:'',
    acf:{
        hp:'',
        meja:null,
        status:null,
        order: getOrder.value,
        total: cart.total
    },
    status:'publish'
})
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
      getData.title = cust.customer.nama
      getData.acf.meja = cust.customer.meja
      setTimeout(() => {
        rounter.push('/thanks')
        cart.resetCount
      }, 3000);
   })
   .catch(console.error())
}
</script>

<template>
  <div>
    <form @submit.prevent="postData" class="flex flex-col gap-4">
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
      <button type="submit" class="py-2 px-4 rounded-lg bg-slate-700 text-white hover:bg-slate-800;">
        Submit
      </button>
    </form>
  </div>
</template>