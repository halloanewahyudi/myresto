import { ref } from "vue";
import { defineStore } from "pinia";

export const useCustomerStore = defineStore('customer-store',()=>{
   const nama = ref('')
   const hp = ref('')

   const ambiltanggal = ref('')

   function formatWaktu(waktu) {
    const tanggal = new Date(waktu);
    
    const tahun = tanggal.getFullYear();
    const bulan = String(tanggal.getMonth() + 1).padStart(2, '0');
    const hari = String(tanggal.getDate()).padStart(2, '0');
    
    const jam = String(tanggal.getHours()).padStart(2, '0');
    const menit = String(tanggal.getMinutes()).padStart(2, '0');
    const detik = String(tanggal.getSeconds()).padStart(2, '0');
    
    const formatTerkini = ` ${jam}:${menit}:${detik}`;
     ambiltanggal.value = `${tahun}-${bulan}-${hari}`;
    
    return formatTerkini;
  }
  const meja = ref('')
    return{
        nama,
        hp,
        meja,
        formatWaktu,
        ambiltanggal
    }
})