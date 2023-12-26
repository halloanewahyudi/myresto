import { ref } from "vue";
import { defineStore } from "pinia";

export const useCustomerStore = defineStore('customer-store',()=>{
   const nama = ref('')
   const hp = ref('')
  const meja = ref('')
    return{
        nama,
        hp,
        meja
    }
})