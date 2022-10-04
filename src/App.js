import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import {
  Home,
  About,
  Error,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  Private,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
