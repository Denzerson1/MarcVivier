import Navbar from "./components/Navbar";
import CartFrontend from "./components/CartFrontend";
import Video from "./components/Video";
import ProductRows from "./components/ProductRows";


function App() {

  return (
    <div>
      <Video />
      <Navbar />
      <ProductRows />
      <CartFrontend />
    </div>
  );
}

export default App;
