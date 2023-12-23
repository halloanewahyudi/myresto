import { defineStore } from "pinia";
import { ref } from "vue";
export const useOrderStore =  defineStore('order',()=>{

    const listMenu = ref([])

    const itemMenu = {
        idMenu:0,
        namaMenu:'',
        hargaMenu:0,
        banyaknyaMenu:1,
        jumlahMenu:0,
        statusMenu:false
    }

    const hargaJumlahMenu = ref( itemMenu.hargaMenu * itemMenu.banyaknyaMenu)

    const totalMenu = ref(0)

    function pilihMenu(item){
        if (!listMenu.value.find(selectedItem => selectedItem.id === item.id)) {
        // jika di pilih maka akan tambah list baru sesuai pilihan menu
        itemMenu.value = item
        listMenu.value = [...listMenu.value,  itemMenu.value]

        itemMenu.value.hargaMenu = listMenu.value.map(item => parseInt(item.acf.price, 10)); 
        // mulai menhitung jumlah price
        totalMenu.value = itemMenu.value.hargaMenu.reduce((total, harga) => total + harga, 0);

        }
    }

    return {
        listMenu,
        itemMenu,
        hargaJumlahMenu,
        totalMenu,
        pilihMenu
    }

})