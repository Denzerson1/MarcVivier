import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleCart } = useCartStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoHeight = document.getElementById("video-section")?.offsetHeight || 0;
      setIsScrolled(window.scrollY > videoHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 md:backdrop-blur-md 
        ${isScrolled ? "bg-white text-black shadow-md" : "bg-white/10 text-white md:bg-white/10"}
      `}
    >
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 relative">
        {/* Left Side - Menu Button (Mobile) */}
        <button className="md:hidden hover:text-gray-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Center - Dynamic Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <a href="/">
            <img
              src={isScrolled ? "/logo.png" : "/logoWhite.png"}
              alt="Vacier Logo"
              className="h-28 transition-opacity duration-300 cursor-pointer"
            />
          </a>
        </div>

        {/* Right Side - Shopping Bag */}
        <button className="relative hover:text-gray-500 ml-auto">
          <ShoppingBag onClick={toggleCart} className="h-6 w-6" />
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center space-x-8 py-4">
        <Link to="/collection" className="uppercase font-medium text-lg hover:text-gray-500">
          Collection
        </Link>
        <Link to="/reviews" className="uppercase font-medium text-lg hover:text-gray-500">
          Reviews
        </Link>
        <Link to="/about" className="uppercase font-medium text-lg hover:text-gray-500">
          About
        </Link>
        <Link to="/offers" className="uppercase font-medium text-lg hover:text-gray-500">
          Offers
        </Link>
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

              <Link to="/collection" className="uppercase font-medium text-lg hover:text-gray-600">
                Collection
              </Link>
              <Link to="/reviews" className="uppercase font-medium text-lg hover:text-gray-600">
                Reviews
              </Link>
              <Link to="/about" className="uppercase font-medium text-lg hover:text-gray-600">
                About
              </Link>
              <Link to="/offers" className="uppercase font-medium text-lg hover:text-gray-600">
                Offers
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
