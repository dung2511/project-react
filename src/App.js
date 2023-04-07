import { Route, Routes } from "react-router-dom";
import "./App.css";
import Protected from "./component/protected/Protected";
import Cart from "./pages/cart/Cart";
import CheckOut from "./pages/checkout/CheckOut";
import Detail from "./pages/details/Detail";
import Home from "./pages/home/Home";
import Layout from "./pages/Layout";
import Payment from "./pages/payment/Payment";
import Product from "./pages/product/Product";
import ListSearch from "./pages/search/ListSearch";
import Login from "./pages/user/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<Detail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="search/:keyword" element={<ListSearch />} />
        <Route
          path="payment"
          element={
            <Protected>
              <Payment />
            </Protected>
          }
        />
        <Route
          path="checkout"
          element={
            <Protected>
              <CheckOut />
            </Protected>
          }
        />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
