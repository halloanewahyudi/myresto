import { createToast } from "mosha-vue-toastify";
import { defineStore } from "pinia";
import 'mosha-vue-toastify/dist/style.css'
import { useRouter } from "vue-router";
export const useToastStore = defineStore('toast-store', () => {
     const router = useRouter()

     const refresh = () =>{
        setTimeout(() => {
            router.go()
        }, 1000);
       
     }
      const doneAlert = (text) => {
        if (text) {
            createToast(text,{
            showIcon:true,
            onClose: refresh()
            })
        }
    }
    
    return {
        doneAlert,
        refresh
    }
})