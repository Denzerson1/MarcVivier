import Navbar from "../components/Navbar";
import CartFrontend from "../components/CartFrontend";
import Video from "../components/Video";
import RichTextSection from "../components/RichtextLandingPage";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import LandingpageVideo from "../components/LandingpageVideo";
import Hero from "../components/Hero"

function LandingPage() {

  return (
    <div>
      <Video />
      <Navbar />
      <div id="Richtext">
        <RichTextSection />
      </div>
      <Hero />
      <Reviews />
      <LandingpageVideo />
      <Footer />
      <Cart />
    </div>
  );
}

export default LandingPage;
