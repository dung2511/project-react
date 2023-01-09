import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import "./product.css";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import Category from "./Category";
import { useDispatch } from "react-redux";
import { Cartcontext } from "../../component/reducer/cartReducer";

const Product = () => {
  const formatPrice = new Intl.NumberFormat("vi", {
    style:"currency", 
    currency:"VND"
  })
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  const [productAll, setproductAll] = useState("");
  const [selectPrice, setSelectPrice] = useState();
  const [order, setOrder] = useState();
  useEffect(() => {
    document.title = "Tất cả sản phẩm";
    try {
      axios({
        method: "get",
        url: `http://localhost:3004/product-all?_sort=${selectPrice}&_order=${order}`,
        param: {
          _sort: selectPrice,
          _order: order,
        },
      }).then(function (res) {
        setproductAll(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [selectPrice, order]);
  return (
    <main id="product">
      <section className="flow-user">
        <Link to={"/"}> Trang chủ </Link>/ Sản phẩm
      </section>
      <section className="product">
        <div className="product-item">
          <Row>
            <Col xs={3}>
              <ul className="product-menu-item">
                <h5>Danh sách sản phẩm</h5>
                <li className="product-list-menu-item">
                  <Link to={"/san-pham-noi-bat"}>Sản phẩm nổi bật</Link>
                </li>
                <li className="product-list-menu-item">
                  <Link to={"/san-pham-noi-bat"}>Sản phẩm khuyến mãi</Link>
                </li>
                <li className="product-list-menu-item">
                  <Link to={"/san-pham-noi-bat"}>Nội thất văn phòng</Link>
                </li>
                <li className="product-list-menu-item">
                  <Link to={"/san-pham-noi-bat"}>Nội thất gia đình</Link>
                </li>
                <li className="product-list-menu-item">
                  <Link to={"/san-pham-noi-bat"}>Phòng bếp</Link>
                </li>
                <li className="product-list-menu-item">
                  <Link to={"/san-pham-noi-bat"}>Phòng khách</Link>
                </li>
              </ul>
            </Col>
            <Col xs={9}>
              <h3>Tất cả sản phẩm</h3>
              <div className="product_category">
                Xếp theo:{" "}
                <Category setSelectPrice={setSelectPrice} setOrder={setOrder} />
              </div>
              <div className="product-list-item">
                {productAll &&
                  productAll.map((item, index) => {
                    item.quantity = 1
                    return (
                      <Card
                        className="home-item-product-feature product-item-all-list"
                        key={index}
                      >
                        <div className="product-item-list">
                          <Link to={`/product/${item.id}`}>
                            <img alt="Card cap" src={item.url} width="100%" />
                          </Link>

                          <CardBody>
                            <CardTitle className="home-item-feature-name">
                              {item.name}
                            </CardTitle>
                            <CardText className="product-price">
                              {formatPrice.format(item.price)}
                            </CardText>
                            <div className="home-btn-item-product">
                              <Button
                                className="home-add-to-card"
                                onClick={() =>
                                  dispatch({ type: "ADD", payload: item })
                                }
                              >
                                Add to Cart
                              </Button>
                              <Button className="home-buy-now">
                                <div>Buy Now</div>
                              </Button>
                            </div>
                          </CardBody>
                        </div>
                      </Card>
                    );
                  })}
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default Product;
