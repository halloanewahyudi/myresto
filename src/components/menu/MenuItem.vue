<script setup>
import { ref } from "vue"
const props = defineProps(['image','title','description','price'])

</script>
<template>
    <div class="flex justify-between items-center gap-3 p-2 hover:bg-slate-100 duration-300">
        <div class="flex items-center flex-wrap gap-2">
            <img :src="props.image" alt="" srcset="" class="w-24">
            <span>{{ props.title }}</span>
        </div>
        <div class="flex items-center gap-3">
            <span>{{ props.price }} </span>
  <slot />
        </div>

    </div>
</template>