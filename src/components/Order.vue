<script setup>
import { useCartStore } from "../stores/cart";
const cart = useCartStore()
</script>
<template>
    <div class="flex flex-col gap-5 divide-y p-4 bg-white rounded-lg">
        <div class="flex flex-col" v-for="(item, index) in cart.listMenu" :key="item.id">
            <div class="flex gap-2">
                <div class="shrink-0 ">
                    {{ index + 1 }}
                </div>
                <div>
                    <div class="flex"> {{ item.nama }} </div>
                    <div class="flex gap-3 items-center justify-between">
                        <span class="">Harga : {{ item.harga }}</span>
                        <span>Qty : {{ item.banyaknya }}</span>
                        <span> Jmlh : {{ item.jumlah }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center py-4">
            <span class="text-xl text-green-700"> Total: {{ cart.total }}</span>
        </div>
        <button class="py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-800 duration-200">
                Order
      </button>
    </div>
</template>