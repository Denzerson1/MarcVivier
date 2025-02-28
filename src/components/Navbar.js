import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBagIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "../store/cartStore";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { toggleCart } = useCartStore();

  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 backdrop-blur-md bg-transparent relative">
        
        {/* Left Side - Menu Button */}
        <button className="md:hidden text-white hover:text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>

        {/* Center - Logo (Bigger) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src="/logo.png" alt="Vacier Logo" className="h-10 md:h-14" />
        </div>

        {/* Right Side - Icons */}
        <div className="flex items-center space-x-6 text-white">
          <button className="hover:text-gray-300">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
          <button className="relative hover:text-gray-300">
            <ShoppingBagIcon onClick={toggleCart} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (75% width) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dark Overlay on Remaining 25% */}
            <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setIsMenuOpen(false)}></div>

            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-y-0 left-0 w-3/4 bg-white text-black flex flex-col space-y-4 p-6 z-50 shadow-lg"
            >
              {/* Close Button */}
              <button className="self-end text-black hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>
                <XMarkIcon className="h-6 w-6" />
              </button>

              {/* Menu Items */}
              {["Männer", "Frauen", "Bewertungen", "Info", "Aktionen", "Non-Violence"].map((category) => (
                <div key={category} className="border-b pb-2">
                  <button 
                    className="w-full text-left flex justify-between items-center uppercase font-medium text-lg hover:text-gray-600"
                    onClick={() => toggleDropdown(category)}
                  >
                    {category}
                    {["Männer", "Frauen", "Info"].includes(category) && <span>{openDropdown === category ? "▲" : "▼"}</span>}
                  </button>

                  {/* Dropdown Items */}
                  <AnimatePresence>
                    {openDropdown === category && ["Männer", "Frauen", "Info"].includes(category) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 pt-2 space-y-2 text-gray-700 text-sm"
                      >
                        <a href="#" className="block hover:text-gray-500">Armbänder</a>
                        <a href="#" className="block hover:text-gray-500">Ohrringe</a>
                        <a href="#" className="block hover:text-gray-500">Halsketten</a>
                        <a href="#" className="block hover:text-gray-500">Ringe</a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
