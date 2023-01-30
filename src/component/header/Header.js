import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./header.css";
import React, { useContext } from "react";
import InputSearch from "./InputSearch";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Badge } from "reactstrap";
import { Cartcontext } from "../reducer/cartReducer";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Sản phẩm",
    path: "/product",
  },
  {
    display: "Giới thiệu",
    path: "/introduce",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
];

const Header = () => {
  const Global = useContext(Cartcontext);
  return (
    <>
      <header>
        <div>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand>
                <div className="header__logo">
                  <Link className="header-logo" to={"/"}>
                    <img src="../assets/image/logo-web.png" alt="" />
                  </Link>
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  {mainNav &&
                    mainNav.map((item, index) => {
                      return (
                        <Nav.Link key={index} href={item.path}>
                          {item.display}
                        </Nav.Link>
                      );
                    })}
                </Nav>
                <div className="header-input-search">
                  <InputSearch />
                  <div className="header__shopping">
                    <Link to={"/cart"}>
                      <FaShoppingCart title="cart" />
                      <Badge>{Global.state.length}</Badge>
                    </Link>
                  </div>
                  <div className="header__user">
                    <Link to={"/login"}>
                      <FaUser />
                    </Link>
                  </div>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
    </>
  );
};
export default Header;
