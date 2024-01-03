<script setup>

import { createToast } from 'mosha-vue-toastify';
// import the styling for the toast
import 'mosha-vue-toastify/dist/style.css'
import { onMounted } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter()
const props = defineProps(['title'])
const refresh = () =>{
    setTimeout(() => {
        router.go(0)
    }, 1000);
}
const toast = () => {
    createToast(props.title, {
        showIcon: 'true',
        type: 'success',
        transition: 'bounce',
       // toastBackgroundColor: '#dfeefefe',
       onClose: refresh()
    })
}

onMounted(() => {
    toast()
})
</script>
