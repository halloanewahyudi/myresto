import { ref, computed, watch, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    // list dari product
    const list = ref([])

    const menuItem = ref({
        id:0,
        judul:'',
        harga:0,
        banyaknya:1,
        tambaharga:0,
        terpilih:false,
    })

    //const price = ref(0)

    const amount = ref()
    const tambahKeranjang = ref(0)
   // const aktif = ref(false)
    //const getId = ref(0)

    const tampungOrder = ref({})


    function tambahItem(item) {

        if (!list.value.find(selectedItem => selectedItem.id === item.id)) {

            // mebuat list add menu
           list.value = [...list.value, item]
            //list.value = [...list.value, menuItem.value]
           

            //  mengambi price dari list menu
            // const defaultPrice = 
            menuItem.value.harga = list.value.map(item => parseInt(item.acf.price, 10)); 
           
            // mulai menhitung jumlah price
            amount.value = menuItem.value.harga.reduce((total, harga) => total + harga, 0);
     
            // itung di kranjang
            tambahKeranjang.value++

            // terpilih
            menuItem.value.terpilih = true

        } else {
            console.log('sudah ada')
        }

    }

    function deleteItem(id) {
        const index = list.value.findIndex(item => item.id === id)
        if (index !== -1) {
           // menhhapus price
           menuItem.value.harga.splice(index,1)
    
            // mendelete list
            list.value.splice(index, 1)
            // mengurangi jumlah/ total harga apabila list sudah di delete
            amount.value = item.acf.price.reduce((total, harga) => total + harga, 0);
       
            // kurang di keranjang
            tambahKeranjang.value--
        }
    }

    function editOrder(item){
        menuItem.value.tambaharga = item.tambaharga
        menuItem.value.harga = list.value.map(item => parseInt(item.tambaharga, 10)); 
        amount.value = menuItem.value.harga.reduce((total, harga) => total + harga, 0);
       console.log(menuItem.value.harga )
    }

    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR"
        }).format(number);
      }

    return{
        list,
        menuItem,
        amount,
        tambahKeranjang,
       editOrder,
        tampungOrder,
        tambahItem,
        deleteItem,
        rupiah
    }
})
