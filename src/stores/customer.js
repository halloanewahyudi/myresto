import { ref } from "vue";
import { defineStore } from "pinia";

export const useCustomerStore = defineStore('customer-store',()=>{
    const customer = ref({
        nama:'',
        phone:'',
        meja:''
    })

    return{
        customer
    }
})