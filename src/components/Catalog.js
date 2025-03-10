import { useState } from "react";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Square Bracelet", price: "23,00€", image: "/product/1schatten.jpeg" },
  { id: 2, name: "Braid Bracelet", price: "23,00€", image: "/product/2.jpeg" },
  { id: 3, name: "Fluid Bracelet", price: "23,00€", image: "/product/3.jpeg" },
  { id: 4, name: "Box Bracelet", price: "23,00€", image: "/product/4.jpeg" },
  { id: 5, name: "Fluid Earrings", price: "24,00€", image: "/product/5.jpeg" },
  { id: 6, name: "Fluid Ring", price: "19,00€", image: "/product/6.jpeg" },
  { id: 7, name: "Fluid Bangle", price: "26,00€", image: "/product/7.jpeg" },
  { id: 8, name: "Fluid Set", price: "42,00€", image: "/product/chain1.jpeg", discount: "38% OFF" },
];

export default function ProductGrid() {
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      className="relative w-full max-w-[300px] sm:max-w-[600px] h-[250px] sm:h-[400px] mx-auto cursor-pointer mb-10"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="w-full h-full overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      {product.discount && (
        <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
          {product.discount}
        </span>
      )}
      <div className="text-gray-800 text-sm sm:text-base tracking-wide mt-2 text-left">
        {product.name}
      </div>
      <div className="text-gray-600 text-sm tracking-wide text-left">
        {product.price}
      </div>
    </motion.div>
  );
}
