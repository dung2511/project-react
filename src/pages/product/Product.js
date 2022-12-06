import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import "./product.css";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { buyProduct } from "../../component/actions/cartActions";

const Product = () => {
  const dispatch = useDispatch();
  const [productAll, setproductAll] = useState("");
  const [selectPrice, setSelectPrice] = useState();
  const [order, setOrder] = useState();
  useEffect(() => {
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
  document.title = "Tất cả sản phẩm";
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
                <Category
                  // setCategory={setCategory}
                  setSelectPrice={setSelectPrice}
                  setOrder={setOrder}
                />
              </div>
              <div className="product-list-item">
                {productAll &&
                  productAll.map((item, index) => {
                    const product_current = {
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      url: item.url,
                    };
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
                              {item.price}đ
                            </CardText>
                            <div className="home-btn-item-product">
                              <Button
                                className="home-add-to-card"
                                onClick={()=>dispatch(buyProduct(product_current))}
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
