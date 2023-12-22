
<script setup>
import { computed, onMounted } from 'vue';
import { useCartStore } from '../stores/cart';
const cart = useCartStore()

onMounted(()=>{
  const order =  cart.list.map((item)=> [item.title.rendered, item.acf.price] )
 var total = cart.list.map((item)=>parseInt(item.acf.price, 10)).reduce(function(a, b){
    return a + b;
}, 0);
cart.tampungOrder = {order,total}
})

</script>
<template>
  <div class="px-6 py-10">
      <div class="p-4 rounded-lg bg-white flex flex-col gap-3">
        <ul class="divide-y flex flex-col gap-3 justify-center ">
            <li v-for="item in cart.list" :key="item.id" class="flex justify-between items-center gap-3 pt-2">
                <span> {{ item.title.rendered }} </span>
                <span> {{ item.acf.price }} </span>
            </li>
        </ul>
          <div class="flex justify-between items-center pt-2 border-t">
          <span class="font-semibold">Total</span>
          <span class="text-xl text-green-700 ">   {{ cart.amount }}</span>
        </div>
      </div>
     
      <div class="text-center pt-6">
      <button @click="$router.push('/customer')" class="py-2 px-6 w-full rounded-lg bg-slate-700 hover:bg-slate-800 text-white text-lg">
        Pesan
      </button>
      </div>

  </div>
</template>