<script setup>
import { onMounted } from 'vue';
import { useCartStore } from '../stores/cart';
import { useCustomerStore } from '../stores/customer';
const cust = useCustomerStore()
const cart = useCartStore()


</script>
<template>
    
    <div class="text-center flex flex-col items-center justify-center min-h-[80vh] px-6 lg:px-10">
        <h2 class="text-xl"> Terima kasih  <strong> {{ cust.nama }} </strong></h2>
        <p>Silakan membayar pesanan anda, menu anda akan segera kami sediakan di meja <strong>{{ cust.meja }}  </strong></p>
    </div>
</template>