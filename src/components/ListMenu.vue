<script setup>
import { useFetch } from '@vueuse/core';
import { onMounted } from 'vue';
import MenuItem from './MenuItem.vue';
import { useCartStore } from '../stores/cart';
const cart =  useCartStore()
const url = 'https://resto.ardanadutaperkasa.com/wp/wp-json/wp/v2/menu/?_embed';
const { isFetch, data }= useFetch (url).get().json()

</script>
<template>
    <div class="p-6 flex flex-col gap-4">
        <menu-item v-for="(item) in data" :key="item.id" 
        :id="item.id"
        :nama="item.title.rendered"
        :gambar="item._embedded['wp:featuredmedia'][0].source_url"
        :harga="item.acf.price"
        >
        {{ cart.itemMenu }}
        </menu-item>
    </div>
</template>