<script setup>
import { ref } from "vue"
import { useCartStore } from "../stores/cart"

const cart = useCartStore()
const props = defineProps({
    nama:String,
    banyaknya:Number,
    harga:Number,
    jumlah:Number,
    status:Boolean
})
const edit = ref(false)

</script>
<template>
    <div class="p-3 bg-white rounded-lg flex flex-wrap justify-between gap-2 w-full ">
        <div class="w-full flex basis-full gap-2 justify-between items-center border-b pb-3">
            <span>{{ props.nama }}</span>
            <div class="flex gap-2">
                <button @click="cart.deleteMenu" class="text-xl text-red-500"><i class="bi bi-x-circle"></i></button>
            <button @click="edit =! edit" class="text-xl text-green-500"><i class="bi bi-pencil-square"></i></button>
            </div>
        </div>
        <span> Qty: 
           <slot v-if="edit" />
            <span v-else>{{ props.banyaknya }} </span>
        </span>  
        <span> {{ props.jumlah }}</span>
    </div>
</template>