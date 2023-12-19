<script setup>
import { ref } from 'vue';
import { useStore } from '../stores';
import { mycart } from '../stores/cart';
const cart = mycart()
const store = useStore();
const menus = ref({
  title:'',
  price:0,
})
function order(index){
  menus.value.title = myProduct.$state.products[index].title.rendered
  menus.value.price = myProduct.$state.products[index].acf.price
  cart.items.push({...menus.value})
}
</script>
<template>
{{  cart.$state }}
  <div class="checkout max-w-screen-md mx-auto p-6 my-10 rounded-lg border bg-white">
    <h1 class="text-xl font-semibold mb-5">Pesanan Anda</h1>
    <ul class="divide-y">
      <li v-for="(item, index) in store.menus" :key="index" class="flex gap-2 py-2 justify-between">
        <div class="flex gap-2 items-center">
          <span> {{ item.title.rendered }}</span>
          <span class="font-semibold"> {{ item.acf.price }} </span>
        </div>
      </li>
    </ul>

  </div>
</template>

