<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { mycart } from "../stores/cart";
import MenuItem from '../components/menu/MenuItem.vue'
const cart  =  mycart()
const menus = ref({
  title:"",
  price:0,
})
function getProduct(){
    axios.get('https://resto.ardanadutaperkasa.com/wp/wp-json/wp/v2/menu?_embed')
    .then((res)=>{
     cart.menus = res.data
    })
    .catch(console.error())
}
onMounted(()=>{
  getProduct()
})
</script>
<template>
  {{ cart.$state }}
  <div>
   <menu-item v-for="(item, index) in cart.menus" :key="index" 
   :image="item._embedded['wp:featuredmedia'][0].source_url"
   :title="item.title.rendered"
   :price="item.acf.price">
   <button @click.prevent="cart.addItem(item.id)">Add</button>
   <button @click.prevent="cart.removeItem(item.id)">Remove</button>
    </menu-item>
  </div>
</template>