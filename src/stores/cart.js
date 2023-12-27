import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";


export const useCartStore = defineStore('cart',()=>{

    // menampung list order
  const  listMenu = ref([])
  const itemMenu = ref({})

  // sebagai penanda list ite,
  const listItem = ref(null)

    function order(item){
        if (!listMenu.value.find(selectedItem => selectedItem.id === item.id)) {
            listMenu.value = [...listMenu.value , item ]
            listItem.value = item
            console.log(listMenu.value.length)
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

        }
    }

    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR"
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
        resetListMenu
    }
})