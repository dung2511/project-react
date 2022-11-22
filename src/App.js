import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./pages/details/Detail";
// import Details from "./pages/details/Details";
import Home from "./pages/home/Home";
import Layout from "./pages/Layout";
import Product from "./pages/product/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/product' element={<Product/>}/>
          <Route path='product/:id' element={<Detail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
