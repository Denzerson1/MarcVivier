import Navbar from "./components/Navbar";
import CartFrontend from "./components/CartFrontend";
import Video from "./components/Video";
import ProductRows from "./components/ProductRows";
import RichTextSection from "./components/RichtextLandingPage";
import Reviews from "./components/Reviews";

function App() {

  return (
    <div>
      <Video />
      <Navbar />
      <RichTextSection />
      <ProductRows />
      
      <CartFrontend />
    </div>
  );
}

export default App;
