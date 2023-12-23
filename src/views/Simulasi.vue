<script setup>
import { useFetch } from "@vueuse/core";
import { computed, onMounted, reactive, ref, watch, watchEffect } from "vue";
import { useOrderStore } from "../stores/cart2";
const order = useOrderStore()
const url = 'https://resto.ardanadutaperkasa.com/wp/wp-json/wp/v2/menu?_embed'
const { isFetch, data } = useFetch(url).get().json()

const inputValues = reactive(order.listMenu.map(item => ({ value: '' })));
function jumlah(harga, index){
    order.itemMenu.hargaMenu = harga * inputValues[index]
}
const banyaknya = ref(1)
const pilihanMenu = computed(()=>{
       order.listMenu.forEach(element => {
       order.itemMenu.namaMenu = element.title.rendered
       order.itemMenu.hargaMenu = element.acf.price
       order.itemMenu.banyaknyaMenu = banyaknya.value
       order.itemMenu.jumlahMenu = order.itemMenu.banyaknyaMenu * order.itemMenu.hargaMenu
    });
})

</script>

<template>
    <div class="p-10">
     <ul class="py-4 px-6 my-4 bg-white flex flex-col gap-3">
        <li v-for="(item,index) in pilihanMenu" :key="item.id" class="flex justify-between items-center">
            <div>
                {{index+1}} . {{ item.title.rendered }}
            </div>
           <div>
            {{ item.acf.price }}
           </div>
        </li>
     </ul>
       <ul class="flex flex-col gap-3">
        <li v-for="(item,index) in data" :key="index" class="flex gap-3 justify-between" @click="order.pilihMenu(item)">
            <span>{{ item.title.rendered }}</span>
            <span>{{ item.acf.price }}</span>
       
        </li>
       </ul>
    </div>
</template>