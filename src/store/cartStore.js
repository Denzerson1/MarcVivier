import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],
  isOpen: false,

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),

  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    })),

  clearCart: () => set({ cart: [] }),

  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  totalPrice: () =>
    get().cart.reduce((total, item) => total + item.price * item.quantity, 0),
}));
