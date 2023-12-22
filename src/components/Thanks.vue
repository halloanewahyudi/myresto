<script setup>
import { useCartStore } from "../stores/cart";
import { useCustomerStore } from "../stores/customer";
const customer = useCustomerStore()
const cart =  useCartStore()
</script>

<template>
        <div class="text-center px-6 py-10 flex flex-col gap-4 min-h-[90vh] justify-center items-center">
            <h4 class="text-xl">Terimakasih {{ customer.nama }} </h4>
            <p> Pesanan anda pada meja <strong>  {{ customer.meja }} </strong></p>
            <p>Silakan melakukan pembayaran</p>
        </div>
</template>