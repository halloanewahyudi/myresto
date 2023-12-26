<script setup>
import { useCartStore } from "../stores/cart";
const cart = useCartStore()

const order = () => {
    const dataOrder = {
        order:cart.listMenu,
        total:cart.total
    }
} 
</script>
<template>
    <div  class="flex flex-col gap-5 divide-y p-4 bg-white rounded-lg">
        <div :data-id="'item-'+item.id"  class="flex flex-col text-sm" v-for="(item, index) in cart.listMenu" :key="item.id">
            <div class="flex gap-2">
                <div class="shrink-0 ">
                    <div class="w-5 h-5 rounded-full flex items-center justify-center bg-slate-700 text-white">
                        {{ index + 1 }}
                    </div>
                </div>
                <div class="flex flex-col gap-3">
                    <div class="flex gap-3 items-center justify-between"> {{ item.nama }} <button @click="cart.deleteMenu(item)"> <i class="bi bi-x-circle"></i></button> </div>
                    <div class="flex gap-3 items-center justify-between">
                        <span class="">Harga {{ cart.rupiah(item.harga)}}</span>
                        <span>Qty {{ item.banyaknya }}</span>
                        <span> Jmlh {{ cart.rupiah(item.jumlah) }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center py-4">
            <span class="text-xl text-green-700"> Total: {{ cart.rupiah(cart.total )}}</span>
        </div>
        <button @click="$router.push('/customer')" class="py-2 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-800 duration-200">
            Order
      </button>
    </div>
</template>