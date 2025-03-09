import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Catalog from "../components/Catalog";
import Richtext from "../components/RichtextLandingPage";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Minimalist Silver Bracelet",
    image: "/product/3.jpeg",
    price: "$49.99",
    link: "/product/bracelet",
  },
  {
    id: 2,
    name: "Gold Chain Necklace",
    image: "/product/1.jpeg",
    price: "$69.99",
    link: "/product/necklace",
  },
  {
    id: 3,
    name: "Elegant Ring",
    image: "/product/2.jpeg",
    price: "$39.99",
    link: "/product/ring",
  },
  {
    id: 4,
    name: "Classic Watch",
    image: "/product/watch.jpg",
    price: "$129.99",
    link: "/product/watch",
  },
  {
    id: 5,
    name: "Minimalist Silver Bracelet",
    image: "/products/bracelet.jpg",
    price: "$49.99",
    link: "/product/bracelet",
  },
  {
    id: 6,
    name: "Gold Chain Necklace",
    image: "/products/necklace.jpg",
    price: "$69.99",
    link: "/product/necklace",
  },
  {
    id: 7,
    name: "Elegant Ring",
    image: "/products/ring.jpg",
    price: "$39.99",
    link: "/product/ring",
  },
  {
    id: 8,
    name: "Classic Watch",
    image: "/products/watch.jpg",
    price: "$129.99",
    link: "/product/watch",
  },
];

function Collections() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Video Banner Section */}
      <div className="relative w-full h-[60vh] md:h-[55vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/demovideo.mp4" type="video/mp4" />
        </video>

        {/* Shop Now Button at Bottom of Video */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="/shop"
            className="px-16 py-3 border border-white text-white tracking-[0.25em] text-[12px] uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>
      <Richtext />
      <Catalog />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Collections;
