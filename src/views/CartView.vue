
<script setup>
// import OrderVue from '../components/Order.vue';
import { computed, onMounted, watch } from 'vue';
import ListOrder from '../components/ListOrder.vue';
import { useCartStore } from '../stores/cart';
const cart = useCartStore()

</script>
<template>
  <div class="px-4 flex flex-col items-center gap-4 py-10">

    <h4 class="text-xl"> Orderan anda </h4>
 
    <list-order v-for="(item) in cart.listMenu" :key="item.id" :nama="item.nama" :banyaknya="item.banyaknya"
      :jumlah="cart.rupiah(item.jumlah = item.harga * item.banyaknya)">
      <input type="number" v-model="item.banyaknya" class="w-10">
    </list-order>
    <div class="flex flex-col gap-4">
      <h4 class="text-xl text-green-600">total: {{ cart.rupiah(cart.total) }}</h4>
      <button @click="$router.push('/customer')"
        class="py-2 px-4 rounded-lg bg-slate-700 text-slate-200 hover:bg-slate-800 duration-200">Order</button>
    </div>
    <button @click="$router.push('/')"> Bak to Menu</button>
  </div>
</template>

