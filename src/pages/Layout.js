import {Outlet } from "react-router-dom";
import Header from "../component/header/Header";
// import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
     <Header/>
      <Outlet />
      
    </>
  );
};
export default Layout;
