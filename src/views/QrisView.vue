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
const getOrder = ref(JSON.stringify([cart.listMenu]))
const getData = {
    title:cust.nama,
    acf:{
        hp: cust.hp,
        meja:cust.meja,
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
      setTimeout(() => {
        rounter.push('/thanks')
      }, 500);
   })
   .catch(console.error())
}

</script>
<template>
    <div class="flex flex-col justify-center items-center gap-5 text-center px-8 py-10 min-h-[80vh]">
     
        <img src="../assets/logo-qris.png" class="w-20" alt="" srcset="">
       <img src="../assets/realqris-test.jpg" alt="" srcset="">
       <p>Silakan sreen Capture Qris, untukmelakukan transaksi</p>
       <p>Selanjutnya silakan konfirmasi dengan menekan tombol di bawah ini</p>
       <button @click="postData" class="py-2 px-4 rounded-lg bg-slate-700 hover:bg-slate-800 text-white hover:scale-105 duration-200">
        Konfirmasi Pembayaran
       </button>
    </div>
</template>