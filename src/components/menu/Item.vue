<script setup>
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
    <div>
        <div :id="props.id" class="flex justify-between items-center  p-3 gap-2 bg-white hover:shadow-2xl active:shadow-none duration-200 rounded-lg">
       <div class="flex gap-2 justify-start items-center">
        <div class="w-24 rounded overflow-hidden">
            <img :src="props.image" alt="" srcset="" class=" rounded">
        </div>
        <span class="text-base">{{ props.title }}</span>
      
       </div>
       <div class="flex items-center gap-3">
        <span class="font-semibold">{{ props.price }}</span>
          <slot />
       </div>
    </div>
    </div>

</template>