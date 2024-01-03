<script setup>
import axios from "axios";
import { onMounted, ref, watch } from "vue";
import { useToastStore } from "../stores/toast";
const toast = useToastStore()
const props = defineProps({
    id:Number,
    title:String,
    hp:Number,
    meja:Number,
    order:String,
    status:{
        type: Boolean,
        default:true,
    }
})

const done = () =>{
 const url = `https://resto.ardanadutaperkasa.com/wp/wp-json/wp/v2/customer/${props.id}`;
 const data = {
  title: props.title,
  acf: {
    hp:props.hp,
    meja:props.meja,
    order:props.order,
    status:props.status
  },
  'order-status':5,
};

// Konfigurasi untuk permintaan Axios
const username = 'admin'; 
const applicationPassword = 'sUHR MncK OFq7 NkgX B4Nw m3rA';
const authHeader = `Basic ${btoa(`${username}:${applicationPassword}`)}`
const config = {
  headers: {
    'Content-Type': 'application/json' ,
    Authorization: authHeader,
  }
}

// Melakukan permintaan PUT menggunakan Axios
axios.put(url, data, config)
  .then(response => {
    toast.doneAlert('Meja '+ response.data.acf.meja + ' done..!')
    // Handle respons dari server jika permintaan berhasil
    console.log('Sukses:', response.data);
    
  })
  .catch(error => {
    // Handle kesalahan jika permintaan gagal
    console.error('Error:', error.response ? error.response.data : error.message);
  });

 }

</script>
<template>
    <div>
        <button @click="done" class="py-2 px-4 bg-slate-300 text-slate-700 rounded-lg"> Done <i class="bi bi-check2-circle"></i> </button>
    </div>
</template>