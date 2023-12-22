import { defineStore } from "pinia";
import { ref } from "vue";

export const useCustomerStore =  defineStore('customer',()=>{
    const nama = ref('')
    const hp = ref(0)
    const meja = ref(0)
 
    return {
        nama,
        hp,
        meja
    }
})