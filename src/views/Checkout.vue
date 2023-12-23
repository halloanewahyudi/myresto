
<script setup>
import { computed, onMounted, reactive, ref, watch, watchEffect } from 'vue';
import { useCartStore } from '../stores/cart';

const cart = useCartStore()


</script>
<template>
  <div class="px-6 py-10">
    <div class="p-4 rounded-lg bg-white flex flex-col gap-3">
{{ cart.menuItem.tambaharga }}
      <ul class="divide-y flex flex-col gap-3 justify-center ">
       
        <li v-for="(item, index) in cart.list" :key="index" class="flex justify-between items-center gap-3 pt-2">
          <span> {{ item.title.rendered }} </span>
          <div class="flex items-center gap-3">
            <div>
              <span> Qty </span>
              <input class="border w-20" type="number" 
              v-model="item.banyaknya" 
              @keyup="cart.editOrder(item)">
            </div>
            <span v-if="item.banyaknya">
              {{ cart.rupiah(item.tambaharga =  item.acf.price * item.banyaknya )  }}</span> 
            <span v-else>
              {{cart.rupiah(item.acf.price)  }}
            </span>
            <button class="text-red-600" @click="cart.deleteItem(item.id)"><i class="bi bi-x-circle"></i></button>
          </div>
       
        </li>
      </ul>
      <div class="flex justify-between items-center pt-2 border-t">
        <span class="font-semibold">Total</span>
        <span class="text-xl text-green-700 "> {{ cart.rupiah( cart.amount)  }}</span>
      </div>
    </div>

    <div class="text-center pt-6">
      <button @click="$router.push('/customer')"
        class="py-2 px-6 w-full rounded-lg bg-slate-700 hover:bg-slate-800 text-white text-lg">
        Pesan
      </button>
    </div>

  </div>
</template>