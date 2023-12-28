<script setup>

</script>
<template>
    <div class="flex flex-col justify-center items-center gap-5 text-center px-8 py-10 min-h-[80vh]">
        <img src="../assets/logo-qris.png" class="w-20" alt="" srcset="">
       <img src="../assets/qr.jpg" alt="" srcset="">
       <p>Silakan sreen Capture Qris, untukmelakukan transaksi</p>
       <p>Selanjutnya silakan konfirmasi dengan menekan tombol di bawah ini</p>
       <button @click="$router.push('/thanks')" class="py-2 px-4 rounded-lg bg-slate-700 hover:bg-slate-800 text-white hover:scale-105 duration-200">
        Konfirmasi Pembayaran
       </button>
    </div>
</template>