<script setup>
import { onMounted } from 'vue';
import { useCartStore } from '../stores/cart';
import { useCustomerStore } from '../stores/customer';
import { animate, stagger } from "motion"
const cust = useCustomerStore()
const cart = useCartStore()

onMounted(() => {
    setTimeout(() => {
        cart.listMenu = []
    }, 1000);

    animate('.anim', {
        opacity: [0, 1],
        scale: 1.2,
        y: [100, 0]
    },
        {
            duration: .2,
            delay: stagger(0.1)
        }
    )
})
</script>
<template>
    <div class="text-center flex flex-col items-center justify-center min-h-[80vh] px-6 lg:px-10">
        <h2 class="text-xl anim"> Terima kasih <strong> {{ cust.nama }} </strong></h2>
        <p class="anim">Pesanan anda akan segera kami sediakan di meja <strong>{{ cust.meja }} </strong></p>
    </div>
</template>