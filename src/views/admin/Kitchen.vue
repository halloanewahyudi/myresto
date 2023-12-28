<script setup>
import { useFetch } from "@vueuse/core";
import { computed, onMounted, ref } from "vue";
import LoadingVue from "../../components/icons/Loading.vue";

const url = 'https://resto.ardanadutaperkasa.com/wp/wp-json/wp/v2/customer/?_embed';
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
</script>
<template>
    <div class="max-w-screen-lg mx-auto px-6 py-10">
        <div v-if="isFetching" class="flex flex-col justify-center text-center  items-center min-h-[80vh]">
            <LoadingVue />
        </div>
        <ul v-else class="flex flex-col gap-5">
            <li v-for="(item) in data" :key="item.id" class="p-4 rounded-lg bg-white flex flex-col gap-4">
               <span> Nama: <span class="font-semibold">  {{ item.title.rendered }}</span></span> 
                <div class="flex gap-2 items-center justify-between pb-3 mb-3 border-b">
                    <span class=""> meja: {{ item.acf.meja }}</span>
                    <span class=""> hp: {{ item.acf.hp }}</span>
                </div>
                <div class="">
                    <ul class="flex flex-col gap-4 divide-y mb-4">
                        <li v-for="(item, index) in JSON.parse(item.acf.order)" :key="index"
                            class="flex justify-between items-center gap-3">
                            <div>{{ item.nama }} </div>
                            <div> {{ item.banyaknya }} </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <span>{{ item.date }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>