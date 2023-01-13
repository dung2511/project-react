import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./product.css";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import Category from "./Category";
import { Cartcontext } from "../../component/reducer/cartReducer";
import { Spinner } from "react-bootstrap";

const list = [
  {
    display: "Sản phẩm nổi bật",
    path: "/san-pham-noi-bat",
  },
  {
    display: "Sản phẩm khuyến mãi",
    path: "/san-pham-noi-bat",
  },
  {
    display: "Nội thất gia đình",
    path: "/san-pham-noi-bat",
  },
  {
    display: "Nội thất văn phòng",
    path: "/san-pham-noi-bat",
  },
];
const Product = () => {
  const formatPrice = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  const limit = 8;
  const [isLoading, setLoading] = useState(false);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  const [productAll, setproductAll] = useState("");
  const [selectPrice, setSelectPrice] = useState();
  const [order, setOrder] = useState();
  useEffect(() => {
    document.title = "Sản phẩm";
    try {
      axios({
        method: "get",
        url: `https://json-server-vercel-amber.vercel.app/product-all?_sort=${selectPrice}&_order=${order}`,
        param: {
          _limit: limit,
          _sort: selectPrice,
          _order: order,
        },
      }).then(function (res) {
        setproductAll(res.data);
        setLoading(false);
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
         
          <div className="product__list__item">
            <h3>Sản phẩm</h3>
            <div className="product_category">
              Xếp theo:{" "}
              <Category setSelectPrice={setSelectPrice} setOrder={setOrder} />
            </div>
            <div className="product-list-item">
              {!isLoading &&
                productAll &&
                productAll.map((item, index) => {
                  item.quantity = 1;
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
                          <CardText>{formatPrice.format(item.price)}</CardText>
                          <div className="home-btn-item-product">
                            <Button
                              className="home-add-to-card"
                              onClick={() => {
                                dispatch({ type: "ADD", payload: item });
                              }}
                            >
                              Thêm giỏ hàng
                            </Button>
                            <Button className="home-buy-now">
                              <div>Mua ngay</div>
                            </Button>
                          </div>
                        </CardBody>
                      </div>
                    </Card>
                  );
                })}
              {isLoading && (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
