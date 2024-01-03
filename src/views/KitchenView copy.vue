<script setup>
import { useFetch } from "@vueuse/core";
import { computed, onMounted, ref } from "vue";
import LoadingVue from "../components/icons/Loading.vue";
import { useCustomerStore } from "../stores/customer";
import DoneVue from "../components/Done.vue";
const cust = useCustomerStore()
const acfField = 'status';
const acfValue = true;
const baseUrl = 'https://resto.ardanadutaperkasa.com/wp/wp-json/wp/v2/customer';
const url = `${baseUrl}?filter[${acfField}]=${acfValue}`;
const { data, isFetching, error } = useFetch(url).get().json()
const orders = ref([])
const getorder = (order) => {
    for (let index = 0; index < data.length; index++) {
        const element = orders.value[index];
        console.log(element[index])
    }
}
onMounted(() => {
    getorder()
})
/*
  params: {
    meta_query: [
      {
        key: 'status',
        value: true,
        compare: '=',
        type: 'BOOLEAN', // Sesuaikan dengan tipe data ACF Field Anda
      },
    ],
  },

  sore Pak, 
  progress semvmoto saat ini pembuatan sitem order onlinenya,
  dan beberapa konten page yang basi belum ada.

  Pak, terkait saya butuh biaya apakah bisa minta sparuh pelunasan smevmoto dulu?
*/
</script>
<template>
    <div class="max-w-screen-lg mx-auto px-6 py-10">
        <div v-if="isFetching" class="flex flex-col justify-center text-center  items-center min-h-[80vh]">
            <LoadingVue />
        </div>
        <ul v-else class="flex flex-col gap-5">
            <li v-for="(item) in data" :key="item.id" class="rounded-lg bg-white flex flex-col gap-5 overflow-hidden">
                <div class="flex flex-col md:flex-row gap-4 items-center justify-center w-full p-5">
                    <span class="mx-auto md:mx-0 text-4xl shrink-0 rounded-full bg-slate-700 text-white w-16 h-16 flex items-center justify-center">{{ item.acf.meja }}</span>
                    <ul class="flex flex-col justify-center gap-4  mb-4 w-full">
                        <li v-for="(item, index) in JSON.parse(item.acf.order)" :key="index"
                            class="flex justify-between items-center gap-3 font-semibold">
                            
                            <div class="shrink-0">{{ item.nama }} </div>
                            <div class="w-full border-b"></div>
                            <div class="shrink-0 w-8 h-8 rounded-full bg-slate-700 text-white flex justify-center items-center"> {{ item.banyaknya }} </div>
                        </li>
                    </ul>
                </div>
                <div class="flex justify-between items-center p-5 bg-slate-700 text-white">
                    <span> <i class="bi bi-clock-history"></i> {{ cust.formatWaktu(item.date  ) }}</span>
                    <DoneVue :id="item.id" :title="item.title" :hp="item.hp" :meja="item.meja" :order="item.order"/>
                </div>
            </li>
        </ul>
    </div>
</template>