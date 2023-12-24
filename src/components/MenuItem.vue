<script setup>
import { computed, onMounted, ref, watch } from "vue"
import  {useCartStore} from '../stores/cart'
const cart = useCartStore()
const qty = ref(1)
const jumlah = ref()
const props = defineProps({
    id:Number,
    nama: String,
    gambar: String,
    harga: Number,
})
const status = ref(false)

watch(qty,(newQty, oldQty )=>{
     jumlah.value = newQty * props.harga
   // console.log(newQty)
})
const open = ref(false)
const getdata = computed(()=>{
    const dataMenu = {
        id:props.id,
        nama:props.nama,
        harga:props.harga,
        banyaknya:qty.value,
        jumlah:jumlah.value,
    }
  cart.itemMenu = dataMenu
   return  dataMenu
})

onMounted(()=>{
    if(jumlah.value == null){
        jumlah.value = props.harga
    }
})
</script>
<template>
    <div>
        <div class="p-4 border bg-white rounded-lg hover:shadow-xl duration-200 flex-col gap-5 divide-y">
            <div class="flex flex-wrap gap-3 items-center justify-between" @click="open = !open">
                <span class="flex gap-3 items-center">
                    <img :src="props.gambar" alt="" class="w-24 h-auto rounded-lg shrink-0">
                    <span class="font-semibold"> {{ props.nama }}</span>
                </span>
                <span>Price {{ props.harga }}</span>
            </div>
            <div v-if="open" class="flex flex-col gap-3">
                <div class="flex gap-3 justify-between items-center py-5">
                    <span>
                        <span>Qty</span> <input type="number" v-model="qty" class="border w-20">
                    </span>
                    {{ jumlah }}
                </div>
                <button class="bg-slate-700 text-white hover:bg-slate-800 rounded-lg duration-200 py-1 px-3" @click="cart.order(getdata)">Order</button>
            </div>
        </div>
    </div>
</template>