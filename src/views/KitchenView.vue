<script setup>
import { computed, onMounted, ref, watch } from "vue";
import LoadingVue from "../components/icons/Loading.vue";
import { useCustomerStore } from "../stores/customer";
import DoneVue from "../components/Done.vue";
import axios from "axios";
const cust = useCustomerStore()
const baseUrl = 'https://resto.ardanadutaperkasa.com/wp/wp-json/wp/v2/customer?';
const orders = ref([])
const loading = ref(true)
const getCustomer = () => {
    axios.get(baseUrl,{
        params:{
            'order-status': 4,
            'order':'asc',
        }
    })
        .then(response => {
            // Proses data yang diterima dari REST API
            loading.value = false
            orders.value = response.data
            console.log('Entries dengan ACF Field bernilai true:', response.data);
        })
        .catch(error => {
            // Tangani kesalahan jika ada
            console.error('Error fetching data:', error);
        });
}

onMounted(() => {
    getCustomer()
})

</script>
<template>
    <div class="max-w-screen-lg mx-auto px-6 py-10">
        <div v-if="loading" class="flex flex-col justify-center text-center  items-center min-h-[80vh]">
            <LoadingVue />
        </div>
        <ul v-else class="flex flex-col gap-5">
            <li v-for="(item) in orders" :key="item.id" class="rounded-lg bg-white flex flex-col gap-5 overflow-hidden">
                <div class="flex flex-col md:flex-row gap-4 items-center justify-center w-full p-5">
                    <span
                        class="mx-auto md:mx-0 text-4xl shrink-0 rounded-full bg-slate-700 text-white w-16 h-16 flex items-center justify-center">{{
                            item.acf.meja }}</span>
                    <ul class="flex flex-col justify-center gap-4  mb-4 w-full">
                        <li v-for="(item, index) in JSON.parse(item.acf.order)" :key="index"
                            class="flex justify-between items-center gap-3 font-semibold">
                            {{ item.status }}
                            <div class="shrink-0">{{ item.nama }} </div>
                            <div class="w-full border-b"></div>
                            <div
                                class="shrink-0 w-8 h-8 rounded-full bg-slate-700 text-white flex justify-center items-center">
                                {{ item.banyaknya }} </div>
                        </li>
                    </ul>
                </div>
                <div class="flex justify-between items-center p-5 bg-slate-700 text-white">
                    <span> <i class="bi bi-clock-history"></i> {{ cust.formatWaktu(item.date) }}</span>
                    
                    <DoneVue :id="item.id" :title="item.title" :hp="item.hp" :meja="item.meja" :order="item.order" />
                </div>
            </li>
    </ul>
</div></template>