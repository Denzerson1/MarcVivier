import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Armband1 from "./pages/Armband1";
import LandingPage from "./pages/LandingPage";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/womenscatalog" element={<Catalog />} />
        <Route path="/armband1" element={<Armband1 />} />
      </Routes>
    </Router>
  );
}

export default App;
