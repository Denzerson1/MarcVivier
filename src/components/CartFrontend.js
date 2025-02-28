import Cart from "./Cart";
import { useCartStore } from "../store/cartStore";

const products = [
    { id: "1", name: "Laptop", price: 999, image: "/images/laptop.jpg" },
    { id: "2", name: "Phone", price: 499, image: "/images/phone.jpg" },
    { id: "3", name: "Headphones", price: 199, image: "/images/headphones.jpg" },
];



function CartFrontend() {
    const { addToCart, toggleCart, cart } = useCartStore();

    return (
        <div className="p-6">
            {/* Header with Cart Button */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Webshop</h1>
                <button
                    onClick={toggleCart}
                    className="relative bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Cart
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            {cart.length}
                        </span>
                    )}
                </button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded-lg shadow-md">
                        <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md mb-2" />
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-gray-700">${product.price}</p>
                        <button
                            onClick={() => addToCart(product)}
                            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            {/* Sliding Cart Component */}
            <Cart />
        </div>
    );
};
export default CartFrontend;