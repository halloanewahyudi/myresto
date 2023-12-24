<script setup>
import { useCustomerStore } from '../stores/customer';

const cust = useCustomerStore()
</script>
<template>
    <div class="text-center flex flex-col items-center justify-center min-h-[80vh] px-6 lg:px-10">
        <h2 class="text-xl"> Terima kasih  <span> {{ cust.customer.nama }} </span></h2>
        <p>Silakan membayar pesanan anda, menu anda akan segera kami sediakan di meja <strong>{{ cust.customer.meja }}  </strong></p>
    </div>
</template>