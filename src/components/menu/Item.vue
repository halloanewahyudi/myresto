<script setup>
import { computed, ref, watchEffect } from "vue"
import { useCartStore } from "../../stores/cart"
const cart = useCartStore()
const props = defineProps({
    id:{
        type:Number,
        required:true,
    },
    image:{
        type:String
    },
    title:{
        type:String
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        default:1,
    },
    amount:{
        type:Number,
        default:0,
    },
    count:{
        type:Number,
        default:1,
    }
})

</script>
<template>
    <div class="bg-white hover:shadow-2xl active:shadow-none duration-200 rounded-lg p-3 flex flex-col gap-3" >
        <div :id="props.id" class="flex flex-wrap w-full justify-between items-center gap-2 cursor-pointer" @click="open =! open">
       <div class="flex gap-2 justify-start items-center">
        <div class="w-24 rounded overflow-hidden shrink-0">
            <img :src="props.image" alt="" srcset="" class=" rounded">
        </div>
        <span class="text-base">{{ props.title }}</span>
      
       </div>
       <div class="flex items-center gap-3 justify-between w-max">
        <span class="font-semibold ml-auto">{{ cart.rupiah( props.price ) }}</span>
        <slot />
       </div>
    </div>
    </div>

</template>