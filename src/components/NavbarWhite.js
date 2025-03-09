import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";

function WhiteNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const { toggleCart } = useCartStore();

  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  const toggleMobileDropdown = (category) => {
    setMobileDropdown(mobileDropdown === category ? null : category);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white text-black shadow-md">
      <Cart />
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 relative">
        {/* Left Side - Menu Button (Mobile) */}
        <button className="md:hidden hover:text-gray-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Center - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img src="/logo.png" alt="Vacier Logo" className="h-28 cursor-pointer" />
          </Link>
        </div>

        {/* Right Side - Shopping Bag */}
        <button className="relative hover:text-gray-500 ml-auto" onClick={toggleCart}>
          <ShoppingBag className="h-6 w-6" />
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center space-x-8 py-4">
        {["Männer", "Frauen", "Bewertungen", "Info", "Aktionen", "Non-Violence"].map((category) => (
          <div key={category} className="relative group dropdown">
            <button
              className="uppercase font-medium text-lg hover:text-gray-500"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown(category);
              }}
            >
              {category}
            </button>
            <AnimatePresence>
              {openDropdown === category && ["Männer", "Frauen", "Info"].includes(category) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 mt-2 w-48 bg-white p-4 space-y-2 text-black text-sm shadow-lg"
                >
                  <Link to="/armband1" className="block hover:text-gray-500">Armbänder</Link>
                  <Link to="#" className="block hover:text-gray-500">Ohrringe</Link>
                  <Link to="#" className="block hover:text-gray-500">Halsketten</Link>
                  <Link to="#" className="block hover:text-gray-500">Ringe</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Background overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setIsMenuOpen(false)}></div>

            {/* Mobile Menu Sidebar */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-y-0 left-0 w-3/4 bg-white text-black flex flex-col space-y-4 p-6 z-50 shadow-lg"
            >
              <button className="self-end hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>

              {["Männer", "Frauen", "Bewertungen", "Info", "Aktionen", "Non-Violence"].map((category) => (
                <div key={category} className="border-b pb-2">
                  <button
                    className="w-full text-left flex justify-between items-center uppercase font-medium text-lg hover:text-gray-600"
                    onClick={() => toggleMobileDropdown(category)}
                  >
                    {category}
                    {["Männer", "Frauen", "Info"].includes(category) ? (
                      mobileDropdown === category ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />
                    ) : null}
                  </button>

                  {/* Mobile Dropdown Items */}
                  <AnimatePresence>
                    {mobileDropdown === category && ["Männer", "Frauen", "Info"].includes(category) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 mt-2 space-y-2 text-gray-700 text-sm"
                      >
                        <Link to="/armband1" className="block hover:text-gray-500">Armbänder</Link>
                        <Link to="#" className="block hover:text-gray-500">Ohrringe</Link>
                        <Link to="#" className="block hover:text-gray-500">Halsketten</Link>
                        <Link to="#" className="block hover:text-gray-500">Ringe</Link>
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

export default WhiteNavbar;
