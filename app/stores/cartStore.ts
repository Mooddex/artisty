import { defineStore } from "pinia";
import type { Art } from "~/types/art";

export const useCartStore = defineStore("cartStore", () => {
  const cart = ref<Art[]>([]);

    const totalUniqueArt = computed(()=>{
        return cart.value.length
    })
    const totalCartArts = computed(() => {
    return cart.value.reduce((total, art) => total + (art.quantity || 0), 0);
  });

  const iteamQuantity = computed((ArtId) => {
    const item = cart.value.find((art) => art.id === ArtId);
    return item?.quantity || 0;
  });

  const totalPrice = computed(()=>{
    return cart.value.reduce((total, art)=> total + (art.id/200*(art.quantity||1)),0)
  })

  const addToCart = (art: Art) => {
    const item = cart.value.find((item) => item.id === art.id);
    if (item) {
      item.quantity = (item.quantity || 0) + 1;
    } else {
      cart.value.push({ ...art, quantity: 1 });
    }
  };

  const deleteItem =(ArtId:number) => {
    //find the art and then take it our of the cart
    const item = cart.value.find((item)=>item.id===ArtId);
    if (item?.quantity && item.quantity > 1 ){
      return item.quantity--
    }else{
      cart.value = cart.value.filter((item)=> item.id !== ArtId) 
    }
  }



  return {
    cart,
    totalCartArts,
    iteamQuantity,
    addToCart,
    totalUniqueArt,
    totalPrice,
    deleteItem,
  };
},
  {
    persist: {
        key: 'cart',
        storage: import.meta.client ? localStorage : undefined,
    }
})