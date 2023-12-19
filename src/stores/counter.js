import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const jumlah = ref(0)
  function $reset() {
    count.value = 0
  }
  function tambah(index){
    count.value++
  }
  function kurang(index){
    count.value--
  }
  function harga(nominal){
    jumlah.value.push({...count.value * nominal})
  }

  return { count, $reset, tambah, kurang, jumlah, harga }
})