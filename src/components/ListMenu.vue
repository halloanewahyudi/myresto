<script setup>
import { useFetch } from '@vueuse/core';
import { onMounted, ref } from 'vue';
import MenuItem from './MenuItem.vue';
import { useCartStore } from '../stores/cart';
import Loading from './icons/Loading.vue';
const cart = useCartStore()
const url = 'https://resto.ardanadutaperkasa.com/wp/wp-json/wp/v2/menu/?_embed';
const { isFetching,isFinished,error, data } = useFetch(url).get().json()

const status = ref(null)

</script>
<template>

    <div v-if="isFetching" class="flex flex-col justify-center text-center  items-center min-h-[80vh]">
        <Loading />
    </div>
    <div v-else class="p-6 flex flex-col gap-4">
       
        <menu-item v-for="(item,index) in data" :key="index" 
        :id="item.id" 
        :data-status="item.listItem"
        :nama="item.title.rendered"
        :gambar="item._embedded['wp:featuredmedia'][0].source_url" :harga="item.acf.price">
            {{ cart.itemMenu }}
        </menu-item>
    </div>
</template>