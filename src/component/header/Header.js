import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
function Header() {
  return (
    <header >
      <Navbar id="header" bg="light" expand="lg">
        <Container fluid>
          <Nav.Link to="/">
            <img src="assets/image/logo.png" alt="" />
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown
                title="Danh sách sản phẩm"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item to="#action3">
                  Sữa tăng cân cho bé
                </NavDropdown.Item>
                <NavDropdown.Item to="#action4">
                  Sữa tăng chiều cao
                </NavDropdown.Item>
                <NavDropdown.Item to="#action4">
                  Sữa tăng chiều cao
                </NavDropdown.Item>
                <NavDropdown.Item to="#action4">
                  Sữa tăng chiều cao
                </NavDropdown.Item>
                <NavDropdown.Item to="#action4">
                  Sữa tăng chiều cao
                </NavDropdown.Item>
                <NavDropdown.Item to="#action4">
                  Sữa tăng chiều cao
                </NavDropdown.Item>
                <NavDropdown.Item to="#action4">
                  Sữa tăng chiều cao
                </NavDropdown.Item>
                <NavDropdown.Item to="#action4">
                  Sữa tăng chiều cao
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link to="#action2">Giới Thiệu</Nav.Link>
              <Nav.Link to="#action2">Liên Hệ</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
