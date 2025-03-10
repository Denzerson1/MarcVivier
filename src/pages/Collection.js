import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Catalog from "../components/Catalog";
import Richtext from "../components/RichtextLandingPage";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

function Collections() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Video Banner Section */}
      <div className="relative w-full h-[60vh] md:h-[55vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/demovideo.mp4" type="video/mp4" />
        </video>

        {/* Smooth Scroll Shop Now Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ScrollLink
            to="catalog-section"
            smooth={true}
            duration={800}
            className="px-6 py-2 md:px-16 md:py-3 border border-white text-white tracking-[0.25em] text-[12px] md:text-[12px] uppercase hover:bg-white hover:text-black transition-all duration-300 max-w-xs md:max-w-none cursor-pointer"
          >
            Shop Now
          </ScrollLink>
        </motion.div>
      </div>
      <div id="catalog-section">
        <Richtext />
      </div>
      <Catalog />
      <Reviews />
      <Cart />
      <Footer />
    </div>
  );
}

export default Collections;
