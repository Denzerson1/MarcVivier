import { create } from "zustand";

export const useCartStore = create((set, get) => {
  // Load cart from localStorage on initialization
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return {
    cart: storedCart,
    isOpen: false,

    addToCart: (item) =>
      set((state) => {
        const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
        let updatedCart;

        if (existingItem) {
          updatedCart = state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        } else {
          updatedCart = [...state.cart, { ...item, quantity: 1 }];
        }

        updateLocalStorage(updatedCart);
        return { cart: updatedCart };
      }),

    increaseQuantity: (id) =>
      set((state) => {
        const updatedCart = state.cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );

        updateLocalStorage(updatedCart);
        return { cart: updatedCart };
      }),

    decreaseQuantity: (id) =>
      set((state) => {
        const updatedCart = state.cart
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0);

        updateLocalStorage(updatedCart);
        return { cart: updatedCart };
      }),

    removeFromCart: (id) =>
      set((state) => {
        const updatedCart = state.cart.filter((cartItem) => cartItem.id !== id);

        updateLocalStorage(updatedCart);
        return { cart: updatedCart };
      }),

    clearCart: () => {
      updateLocalStorage([]);
      set({ cart: [] });
    },

    toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

    totalPrice: () =>
      get().cart.reduce((total, item) => total + item.price * item.quantity, 0),
  };
});
