import { Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import ProductDetails from "./pages/Productdetails";
import Products from "./pages/Products";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />

          <Route path="favorites" element={<Wishlist />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
