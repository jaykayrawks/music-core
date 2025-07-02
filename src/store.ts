import { create } from "zustand";

export const useCartStore = create((set) => ({
cart:[{id:0,name:'abc'}],
addProducts: product => {
    set(state => {
        return {
            ...state,
            cart:[...state.cart, product]
        }
    })
},
clearCart: () => set((state) =>  state.cart = [])
}));