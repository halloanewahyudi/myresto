<template>
    <div>
        <div class="divide-y">
            <menu-item v-for="(menu, index) in store.products" :key="menu"
                :image="menu._embedded['wp:featuredmedia'][0].source_url" :title="menu.title.rendered"
                :price="menu.acf.price">
                <button @click="store.getprice(index) && counter.tambah">add</button>
            </menu-item>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from '../../stores';
import MenuItem from '../menu/MenuItem.vue';
import { mycart } from '../../stores/cart';
import { useCounterStore } from '../../stores/counter';

const counter = useCounterStore()

const store = useStore();
const menus = ref({
    title: '',
    price: 0
})

// Fetch products on component setup
store.fetchProducts();

function getprice(index) {
    order.value.title = store.products[index].title.rendered
    order.value.price = store.products[index].acf.price
    cart.menus.push({ ...order.value })
    counter.count++
}

function jumlah() {
    store.menus.forEach(element => {
        console.log(element)
    });

}
onMounted(() => {
    jumlah()
})
</script>
