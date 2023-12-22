import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    const list = ref([])
    const price = ref(0)
    const amount = ref()
    const tambahKeranjang = ref(0)
    const aktif = ref(false)
    const getId = ref(0)

    const tampungOrder = ref({})


    function tambahItem(item) {

        if (!list.value.find(selectedItem => selectedItem.id === item.id)) {
            // mebuat list add menu
            list.value = [...list.value, item]

            //  mengambi price dari list menu
            // const defaultPrice = 
            price.value = list.value.map(item => parseInt(item.acf.price, 10)); 
           
            // mulai menhitung jumlah price
            amount.value = price.value.reduce((total, harga) => total + harga, 0);
     
            // itung di kranjang
            tambahKeranjang.value++

        } else {
            console.log('sudah ada')
        }

    }

    function deleteItem(id) {
        const index = list.value.findIndex(item => item.id === id)
        if (index !== -1) {
           // menhhapus price
            price.value.splice(index,1)
    
            // mendelete list
            list.value.splice(index, 1)
            // mengurangi jumlah/ total harga apabila list sudah di delete
            amount.value = price.value.reduce((total, harga) => total + harga, 0);
       
            // kurang di keranjang
            tambahKeranjang.value--
        }
    }

    return{
        list,
        price,
        amount,
        tambahKeranjang,
        aktif,
        getId,
        tampungOrder,
        tambahItem,
        deleteItem
    }
})
