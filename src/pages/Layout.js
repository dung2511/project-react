import { Outlet } from "react-router-dom";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
