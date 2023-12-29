
<script setup>
// import OrderVue from '../components/Order.vue';
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import ListOrder from '../components/ListOrder.vue';
import { useCartStore } from '../stores/cart';
const router = useRouter()
const cart = useCartStore()
const orderDulu = ref(false)

const clikOrder = ()=>{
  if(cart.total != 0){
    router.push('/customer')
  }else{
    orderDulu.value = true
  }
  
}
</script>
<template>
  <div class="px-8 flex flex-col items-center gap-4 py-10">
    <h4 class="text-xl"> Orderan anda </h4>
    <list-order v-for="(item) in cart.listMenu" :key="item.id" :nama="item.nama" :banyaknya="item.banyaknya"
      :jumlah="cart.rupiah(item.jumlah = item.harga * item.banyaknya)">
      <input type="number" v-model="item.banyaknya" class="w-10 bg-slate-200">
    </list-order>
    <div class="flex flex-col gap-4 text-center">
      <h4 class=" ">total: {{ cart.rupiah(cart.total) }}</h4>

      <h4 class=" ">PPN: {{ cart.rupiah(cart.persen) }}</h4>

      <h4 class="text-xl">Grand Total: {{ cart.rupiah(cart.grandTotal) }}</h4>

      <span class="py-5 animate-bounce duration-0 text-red-500" v-if="orderDulu"> Silakan order dulu</span>

      <button id="btnOrder"  @click="clikOrder"
        class="py-2 px-4 rounded-lg bg-slate-700 text-slate-200 hover:bg-slate-800 duration-200">Order</button>
    </div>
    <button @click="$router.push('/')"> Back to Menu</button>
  </div>
</template>

