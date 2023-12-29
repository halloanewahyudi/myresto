import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import { useArrayMap } from "@vueuse/core";


export const useCartStore = defineStore('cart',()=>{

    // menampung list order
  const  listMenu = ref([])
  const itemMenu = ref({})

  // sebagai penanda list ite,
  const listItem = ref([])

    function order(item){
        if (!listMenu.value.find(selectedItem => selectedItem.id === item.id)) {
            listMenu.value = [...listMenu.value , item ]
           
            const getId = document.getElementById('item-'+item.id)
            if(getId){
              const bg =  getId.classList.add('bg-slate-200')
              listItem.value = [...listItem.value, bg]
            }

        }
    }

    const total = computed(() => {
        return listMenu.value.reduce((acc, item) => acc + item.jumlah, 0);
      })

    const keranjang = computed(()=>{
        if(listItem.value.length){
            document.getElementById('keranjang').classList.add('tambah-keranjang')
            setTimeout(() => {
            document.getElementById('keranjang').classList.remove('tambah-keranjang')
            }, 500);
        }
    })
    const persen = computed (()=>{
       const jumlah = ( total.value / 100 ) * 11
       return jumlah
    })

    const grandTotal = computed(()=>{
      const gt = total.value + persen.value
      return gt
   })


      function deleteMenu(item){
        const index = listMenu.value.findIndex(item => item.id === item.id)
        if (index !== -1) {
           // menhhapus price
            // mendelete list
            listMenu.value.splice(index, 1)

        }
    }

    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0 
        }).format(number);
      }

    const resetListMenu = () =>{
      listMenu.value.splice(0, listMenu.value.length)
    
    }
    return {
        listMenu,
        itemMenu,
        total,
        order,
        deleteMenu,
        rupiah,
        listItem,
        resetListMenu,
        keranjang,
        persen,
        grandTotal
    }
})