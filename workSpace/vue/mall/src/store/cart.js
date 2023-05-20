import { defineStore } from "pinia";
import { getCart } from '@/api/service/cart.js'
export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      badge: 0
    }
  },
  actions: {
    async initBadge() {
      const { data } = await getCart()
      console.log(data);
      this.badge = data.length
    }
  }
})

