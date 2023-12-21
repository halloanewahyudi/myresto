
<script setup>
import { useCartStore } from '../stores/cart';
const cart = useCartStore()
</script>
<template>
  <div>
    
        <ul class="divide-y flex flex-col gap-3 p-6">
            <li v-for="item in cart.list" :key="item.id" class="flex justify-between gap-3">
                <span> {{ item.title.rendered }} </span>
                <span> {{ item.acf.price }} </span>
                <span class="font-bold text-red-600"> {{ item.id }} </span>
            </li>
        </ul>
        {{ cart.amount }}
  </div>
</template>