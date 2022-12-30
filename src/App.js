import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/cart/Cart";
import Detail from "./pages/details/Detail";
import Home from "./pages/home/Home";
import Layout from "./pages/Layout";
import Payment from "./pages/payment/Payment";
import Product from "./pages/product/Product";
// import ListSearch from "./pages/search/ListSearch";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="product/:id" element={<Detail />} />
        <Route path="cart" element={<Cart />} />
        {/* <Route path="search/:keyword" element={<ListSearch />} /> */}
        <Route path="payment" element={<Payment />} />
      </Route>
    </Routes>
  );
}

export default App;
