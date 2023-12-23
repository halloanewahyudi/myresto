<script setup>
import { useFetch } from "@vueuse/core";
import { ref } from "vue";
import { useCartStore } from "../stores/cart";
import Item from "./menu/Item.vue";
const url = 'https://resto.ardanadutaperkasa.com/wp/wp-json/wp/v2/menu?_embed'
const { isFetching, error, data } = useFetch(url).get().json()
const cart = useCartStore()

</script>

<template>
    <div>
        <div class=" px-6 py-10">
            <div v-if="isFetching">
                Loading...
            </div>
            <div v-else>
                <div class="flex flex-col gap-3">
                 {{ cart.menuItem.terpilih }}
                    <item v-for="(item) in data" :key="item.id" :id="item.id"
                        :image="item._embedded['wp:featuredmedia'][0].source_url" :title="item.title.rendered"
                        :price="item.acf.price" :quantity="cart.menuItem.banyaknya" :class="{'bg-green-300': cart.menuItem.terpilih[index]}">
                        <div class="flex gap-2 justify-end items-center w-full">
                            <button @click="cart.tambahItem(item)"
                                class="py-1 px-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 duration-200">
                                Add
                            </button>
                            <button @click="cart.deleteItem(item.id)"> delete</button>
                        </div>
                    </item>
                </div>
            </div>
        </div>
    </div>
</template>