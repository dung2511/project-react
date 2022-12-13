import { Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import Search from "../../pages/search/Search";
const Header = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <>
      <header>
        <Container className="header-container">
          <Row>
            <Col className="header-logo" sm="3" xs="12">
              <Link to={"/"}>
                <img src="assets/image/logo-web-1.png" alt="" />
              </Link>
            </Col>
            <Col className="header-input-search" sm="3" xs="12">
              <Search setKeyword={setKeyword} />
            </Col>
            <Col className="header-hotline">
              <Link>0389851108</Link>
            </Col>
            <Col className="header-icon-user" sm="3">
              <Button>
                <Link to={"/cart"}>Giỏ hàng</Link>
              </Button>
              <Link>
                <Button>Đăng Nhập</Button>
              </Link>
              <Link>
                <Button>Đăng Ký</Button>
              </Link>
            </Col>
          </Row>
        </Container>
        <div>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title="Sản phẩm" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/product">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Phòng" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Trang trí và gia dụng"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Phòng" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link to={"khuyen-mai"}>Khuyến mãi</Nav.Link>
                  <Nav.Link to={"gioi-thieu"}>Giới Thiệu</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
    </>
  );
};
export default Header;
