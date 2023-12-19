<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import MenuItem from './MenuItem.vue';

const open = ref(false)
const menus = ref()
const namaMenu = ref("")
const harga = ref("")
const banyaknya = ref("")

function getMenu() {
    const url = 'https://resto.ardanadutaperkasa.com/wp/wp-json/wp/v2/menu?_embed'
    axios.get(url)
        .then(
            (res) => {
                menus.value = res.data
            }
        )

}

function pilih(menu, title, price) {
    open.value = true
    namaMenu.value = title
    harga.value = price
}

onMounted(() => {
    getMenu()
})
</script>
<template>
    
    <div class="divide-y">
            <MenuItem v-for="menu in menus" 
            :key="menu" 
            :image="menu._embedded['wp:featuredmedia'][0].source_url" 
            :title="menu.title.rendered"
            :price="menu.acf.price" />
        </div>
</template>


