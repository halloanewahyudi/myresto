import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore('cart',()=>{

    // menampung list order
  const  listMenu = ref([])
  const itemMenu = ref({})

  const cartCount = ref(0)

    function order(item){
        if (!listMenu.value.find(selectedItem => selectedItem.id === item.id)) {
            listMenu.value = [...listMenu.value , item ]
            cartCount.value++
        }
    }

    const total = computed(() => {
        return listMenu.value.reduce((acc, item) => acc + item.jumlah, 0);
      })


      function deleteMenu(item){
        const index = listMenu.value.findIndex(item => item.id === item.id)
        if (index !== -1) {
           // menhhapus price
            // mendelete list
            listMenu.value.splice(index, 1)
            cartCount.value++
            // mengurangi jumlah/ total harga apabila list sudah di delete
            // kurang di keranjang
           // tambahKeranjang.value--
        }
    }

    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR"
        }).format(number);
      }

    return {
        listMenu,
        itemMenu,
        total,
        order,
        deleteMenu,
        cartCount,
        rupiah
    }
})