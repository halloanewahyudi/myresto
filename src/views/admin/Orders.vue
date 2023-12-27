<script setup>
import { useFetch } from "@vueuse/core";
import { computed, onMounted, ref } from "vue";
import LoadingVue from "../../components/icons/Loading.vue";

const url = 'https://resto.ardanadutaperkasa.com/wp/wp-json/wp/v2/customer/?_embed';
const {data, isFetching, error} = useFetch(url).get().json()
const orders = ref([])

const getorder = (order)=>{
   for (let index = 0; index < data.length; index++) {
    const element = orders.value[index];
       console.log(element[index])
   }
}
onMounted(()=>{
    getorder()
})
</script>
<template>
    <div class="max-w-screen-lg mx-autopx-6">
        <div v-if="isFetching" class="flex flex-col justify-center text-center  items-center min-h-[80vh]">
        <LoadingVue />
    </div>
        <ul v-else >
            <li v-for="(item) in data" :key="item.id">
            <span class=""> nama: {{ item.title.rendered }}</span>
            <span class=""> meja: {{ item.acf.meja }}</span>
            <span class=""> hp: {{ item.acf.hp }}</span>
             <div>
                <ul class="flex flex-col gap-4 divide-y">
                    <li v-for="(item, index) in JSON.parse(item.acf.order )" :key="index" class="p-4 rounded-lg bg-white">
                     <div> menu:{{ item.nama }} </div> 
                     <div> price : {{ item.harga }} </div>
                     <div> qty : {{ item.banyaknya }} </div>
                     <div> amount : {{ item.jumlah }} </div>
                    </li>
                </ul>
              
                <div> total: {{ item.acf.total }}</div>
             </div>
            </li>
        </ul>
    </div>
</template>