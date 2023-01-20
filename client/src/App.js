import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:id" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
