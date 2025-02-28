import { useCartStore } from "../store/cartStore";
import { motion } from "framer-motion";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, isOpen, toggleCart, totalPrice } = useCartStore();
  const handleCheckout = async (cart) => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    });
  
    const data = await response.json();
    if (data.url) {
      window.location.href = data.url; // Redirect to Stripe Checkout
    }
  };
  
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleCart}></div>}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 p-6 flex flex-col"
      >
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <button onClick={toggleCart} className="text-gray-500 text-2xl">&times;</button>
        </div>

        <div className="flex-grow overflow-y-auto mt-4 space-y-4">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md" />
                <div className="flex-1 ml-2">
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>

                {/* Quantity Buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
                  >-</button>
                  <span className="text-sm font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
                  >+</button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>${totalPrice().toFixed(2)}</span>
            </div>
            <button 
              className="mt-4 bg-blue-500 text-white px-4 py-3 rounded-md w-full font-semibold"
              onClick={() => handleCheckout(cart)}
            >
              Checkout
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Cart;
