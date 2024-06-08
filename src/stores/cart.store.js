import { create } from 'zustand'

export const useCartStore = create((set) => ({
    cart: [],
    addItemToCart: (addItem) => set((state) => {
        const existingItem = state.cart.find((item) => item.id === addItem.id);

        if (existingItem) {
            return {
                cart: state.cart.map((item) => item.id === addItem.id ? { ...item, quantity: item.quantity + 1, totalPrice: addItem.price } : item),
            }
        } else {
            return {
                cart: [...state.cart, { ...addItem, quantity: 1, totalPrice: addItem.price }]
            }
        }
    }),
    clearCart: () => set({ cart: [] }),
    deleteItem: (id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id)
    })),
    incrementItem: (addItem) => set((state) => ({
        cart: state.cart.map((item) => item.id === addItem.id ? { ...item, quantity: item.quantity + 1, totalPrice: addItem.price } : item)
    })),
    decrementItem: (id) => set((state) => ({
        cart: state.cart.map((item) => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)
    }))
}))