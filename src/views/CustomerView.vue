<script setup>
import Customer from '../components/Customer.vue';
import { useCartStore } from '../stores/cart';
 const cart = useCartStore()
</script>
<template>
        <Customer />
</template>