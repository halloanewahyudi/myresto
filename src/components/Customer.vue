<script setup>
import { useFetch  } from "@vueuse/core";
import axios from 'axios';
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCustomerStore } from "../stores/customer";
const router = useRouter()
 const customer = useCustomerStore()
 const field = ref ({
    nama:'',
    hp:'',
    meja:''
 })
 const post = ref({});

const baseURL = 'https://resto.ardanadutaperkasa.com/wp/wp-json/wp/v2';
const username = 'admin';
const applicationPassword = 'dGi9 FQGJ ta1a uHGf HRrZ CIEC';

 const createPost = async () => {
  try {
    const response = await axios.post(
      `${baseURL}/customer`,
      {
        title: field.value.nama,
        content: 'This is a test post.',
        status: 'publish',
      },
      {
        auth: {
          username,
          password: applicationPassword,
        },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }

  customer.nama = field.value.nama
    customer.hp = field.value.hp
    customer.meja = field.value.meja
      router.push({path:'/thanks', name:'thanks'})
};

 // myresto
 /// dGi9 FQGJ ta1a uHGf HRrZ CIEC
 const submit = () =>{
    customer.nama = field.value.nama
    customer.hp = field.value.hp
    customer.meja = field.value.meja
    console.log(field.value)
    router.push({path:'/thanks', name:'thanks'})
 }
</script>
<template>
    <div class="py-10 px-6">
        <p class="mb-4">Selanjutnya silakakn isi form di bawah ini</p>
        <form @submit.prevent="createPost" class="flex flex-col gap-3">
            <div>
                <label for="name">Nama</label>
                <input type="text" v-model="field.nama" placeholder="Nama">
            </div>
            <div>
                <label for="name">Hp</label>
                <input type="tel" v-model="field.hp" placeholder="Hp">
            </div>
            <div>
                <label for="name">Meja</label>
                <input type="number" v-model="field.meja" placeholder="Meja">
            </div>
            <button class="submit" type="submit"> Submit </button>
        </form>
    </div>
</template>
<style scoped>
label{
    @apply mb-2
}
 input{
    @apply rounded-lg p-2  w-full border
 }
 .submit{
    @apply py-2 px-4 bg-slate-700 hover:bg-slate-800 text-white rounded-lg mt-4
 }
</style>