<script setup>
 import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCustomerStore} from '../stores/customer'
const router = useRouter()
 const cust = useCustomerStore()
 const dataCustomer = ref({
    nama:'',
    phone:'',
    meja:''
 })
 
 const send = ()=>{
cust.customer = dataCustomer.value
   console.log(dataCustomer.value )  
   router.push('/thanks')
 }
</script>
<template>
    <div>
        <form @submit.prevent="send" class="flex flex-col gap-4">
            <div class="flex flex-col gap-3">
            <label for="nama">Nama</label>
           <input type="text" v-model="dataCustomer.nama">
            </div>
            <div class="flex flex-col gap-3">
                <label for="nama">Phone</label>
           <input type="text" v-model="dataCustomer.phone">
            </div>
            <div class="flex flex-col gap-3">
                <label for="nama">Meja</label>
           <input type="number" v-model="dataCustomer.meja">
            </div>
            <button type="submit" class="py-2 px-4 rounded-lg bg-slate-700 text-white hover:bg-slate-800;">
                Submit
            </button>
        </form>
    </div>
</template>