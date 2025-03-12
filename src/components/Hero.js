import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Import Lucide icons

// Sample products with fancy jewelry names
const products = {
  bracelets: [
    { id: 1, image: "/product/1.jpeg", label: "Eternal Gold Bracelet" },
    { id: 2, image: "/product/2.jpeg", label: "Twilight Silver Bracelet" },
    { id: 3, image: "/product/3.jpeg", label: "Celestial Pearl Bracelet" },
  ],
  necklaces: [
    { id: 4, image: "/product/chain1.jpeg", label: "Majestic Diamond Necklace" },
    { id: 5, image: "/product/chain2.jpeg", label: "Golden Princess Necklace" },
    { id: 6, image: "/product/chain3.jpeg", label: "Moonlit Sapphire Necklace" },
  ]
};

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState("bracelets");
  const [prevTab, setPrevTab] = useState("bracelets");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true); // To check if it's the first load

  const handleTabChange = (newTab) => {
    setPrevTab(activeTab); // Store the previous tab
    setActiveTab(newTab);   // Change to the new tab
    setFirstLoad(false);    // Allow animation after the first load
  };

  // Mobile image navigation handlers
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? products[activeTab].length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % products[activeTab].length);
  };

  return (
    <div className="w-full pb-16">
      <div className="max-w-screen-xl mx-auto overflow-hidden"> {/* Added overflow-hidden here */}
        {/* Category selection buttons */}
        <div className="relative mb-4 flex justify-center">
          <button
            className={`text-lg font-medium px-4 py-2 mx-4 transition-all duration-200 
              ${activeTab === "bracelets"
                ? "text-silver-500 border-b-4 border-silver-500"
                : "text-gray-800 hover:text-silver-500"}`}
            onClick={() => handleTabChange("bracelets")}
          >
            Bracelets
          </button>
          <button
            className={`text-lg font-medium px-4 py-2 mx-4 transition-all duration-200 
              ${activeTab === "necklaces"
                ? "text-silver-500 border-b-4 border-silver-500"
                : "text-gray-800 hover:text-silver-500"}`}
            onClick={() => handleTabChange("necklaces")}
          >
            Necklaces
          </button>

          {/* Sliding indicator under active tab */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-silver-500"
            initial={{ width: 0, left: prevTab === "bracelets" ? "0%" : "100%" }}
            animate={{ width: "100%", left: activeTab === "bracelets" ? "0%" : "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ width: activeTab === "bracelets" ? "50%" : "50%" }} // Ensure the width covers only the tab area
          />
        </div>

        {/* Product display */}
        <div className="relative">
          <div className="hidden sm:block">
            {/* Large screen: show all products at once */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-8"
              initial={{ x: prevTab === "bracelets" ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: activeTab === "bracelets" ? "100%" : "-100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {products[activeTab].map((product) => (
                <motion.div
                  key={product.id}
                  className="relative group"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <motion.div
                    className="w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1 }} // No zooming on hover
                    transition={{ duration: 0.2 }} // Smooth transition for hover effects
                  >
                    <img
                      src={product.image}
                      alt={product.label}
                      className="w-full h-full object-cover rounded-lg group-hover:opacity-90 transition-opacity duration-300"
                    />
                    {/* Light shadow overlay on hover */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </motion.div>
                  <div className="absolute bottom-2 left-2 text-white text-sm sm:text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="sm:hidden">
            {/* Mobile view: only one image at a time */}
            <div className="relative w-full h-[500px] sm:h-[600px] rounded-lg overflow-hidden">
              <motion.div
                key={products[activeTab][currentImageIndex].id}
                initial={{ opacity: 0 }} // Fade out the old image initially
                animate={{ opacity: 1 }} // Fade in the new image
                exit={{ opacity: 0 }} // Fade out the current image when switching
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img
                  src={products[activeTab][currentImageIndex].image}
                  alt={products[activeTab][currentImageIndex].label}
                  className="w-full h-full object-cover rounded-lg px-4" // Added padding left and right
                />
                {/* Light shadow overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                {/* Display label always visible on mobile */}
                <div className="absolute bottom-2 left-2 text-white text-sm sm:text-lg font-semibold opacity-100 transition-opacity duration-300">
                  {products[activeTab][currentImageIndex].label}
                </div>
              </motion.div>
            </div>

            {/* Slider buttons for mobile */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
              <button
                className="border-2 border-black text-black p-2 rounded-full hover:bg-black hover:text-white transition duration-200"
                onClick={handlePrevImage}
              >
                <ArrowLeft size={16} /> {/* Using Lucide's ArrowLeft */}
              </button>
              <button
                className="border-2 border-black text-black p-2 rounded-full hover:bg-black hover:text-white transition duration-200"
                onClick={handleNextImage}
              >
                <ArrowRight size={16} /> {/* Using Lucide's ArrowRight */}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-6">
        <a
          href="collection"
          className="px-6 py-2 md:px-16 md:py-3 border border-black text-black tracking-[0.25em] text-[12px] md:text-[12px] uppercase hover:bg-black hover:text-white transition-all duration-300 max-w-xs md:max-w-none cursor-pointer"
        >
          Shop Now
        </a>
      </div>


    </div>
  );
}
