import { useState } from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    image: "product/1.jpeg",
    video: "/videos/bracelet-men.mp4",
    url: "/product/bracelet1",
    label: "MÄNNERARMBÄNDER",
  },
  {
    id: 2,
    image: "product/2.jpeg",
    video: "/videos/bracelet-women.mp4",
    url: "/product/bracelet-women",
    label: "FRAUENARMBÄNDER",
  },
  {
    id: 3,
    image: "product/DSC05856.jpeg",
    video: "/videos/ring-men.mp4",
    url: "/product/ring-men",
    label: "MÄNNERRINGE",
  },
  {
    id: 4,
    image: "/product/4.jpeg",
    video: "/videos/ring-women.mp4",
    url: "/product/ring-women",
    label: "FRAUENRINGE",
  },
  
];

export default function ProductGrid() {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const [hover, setHover] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-[450px] aspect-[3/4] mx-auto cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => window.location.href = product.url}
      
    >
      {!hover && !isVideoPlaying ? (
        <img
          src={product.image}
          alt={product.label}
          className="w-full h-full object-cover"
        />
      ) : (
        <video
          src={product.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onTouchStart={() => setIsVideoPlaying(true)}
        />
      )}
      <div className="absolute bottom-2 left-2 text-white text-sm sm:text-lg font-semibold">
        {product.label}
      </div>
    </motion.div>
  );
}
