<script setup>
import { useFetch } from "@vueuse/core";
import { ref } from "vue";
import { useCartStore } from "../stores/cart";
const cart = useCartStore()

const postData = ref({
      title: '',
  //    content: 'Ini adalah iput konten',
      acf:{
        hp:'',
        meja:null,
        order:null
      },
      status: 'publish',
    });

    const apiUrl = 'https://resto.ardanadutaperkasa.com/wp/wp-json/wp/v2/customer';
    const username = 'admin'; // Ganti dengan nama pengguna yang sesuai
    const applicationPassword = 'sUHR MncK OFq7 NkgX B4Nw m3rA'; // Ganti dengan kata sandi aplikasi yang telah Anda buat

    const postDataToWordPress = async () => {
      const authHeader = `Basic ${btoa(`${username}:${applicationPassword}`)}`;

      const { response, error } = await useFetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authHeader,
        },
        body:{
            title:postData.value.title,
            acf:{
                hp:postData.value.hp,
                meja:postData.value.meja,
            },
            status:'publish'
        },
      })
      if (error) {
        console.error('Error posting data:', error);
      } else {
        console.log('Post berhasil diposting:', response);
      }

      console.log('Response:', response);
console.log('Status Text:', response.statusText);
console.log('Status Code:', response.status);
    }

</script>

<template>
    <div class="text-center">
        <button @click="postDataToWordPress" class="py-2 px-4 bg-slate-700 text-white">
            Kirim Post
        </button>
{{ response }}
        {{ postData }}

        <form @submit.prevent="postDataToWordPress" class="flex flex-col gap-4">
            <div class="flex flex-col gap-3">
            <label for="nama">Nama</label>
           <input type="text" v-model="postData.title">
            </div>
            <div class="flex flex-col gap-3">
                <label for="nama">Phone</label>
           <input type="text" v-model="postData.acf.hp">
            </div>
            <div class="flex flex-col gap-3">
                <label for="nama">Meja</label>
           <input type="number" v-model="postData.acf.meja">
            </div>
            <button type="submit" class="py-2 px-4 rounded-lg bg-slate-700 text-white hover:bg-slate-800;">
                Submit
            </button>
        </form>

    </div>
</template>