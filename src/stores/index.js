// store.js
import { defineStore } from 'pinia';
import axios from 'axios';
export const useStore = defineStore({
  id: 'main',
  state: () => ({
    products: [],
    title: "",
    price: "",
    jumlah: 0,
    total: 0,
    menus: [],
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get('https://resto.ardanadutaperkasa.com/wp/wp-json/wp/v2/menu?_embed');
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },

    getprice(index) {
      this.title = this.products[index].title.rendered
      this.price = this.products[index].acf.price
      this.menus.push({ ...this.products[index] })
      this.jumlah++
      this.menus.reduce((acc, product) => {
        return acc + (product.price * this.jumlah);
      }, 0);
    },

  },
});

// Make sure to install the pinia plugin in your main.js or equivalent
// Vue.use(pinia);
