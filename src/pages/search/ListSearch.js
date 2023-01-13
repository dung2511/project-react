import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { Cartcontext } from "../../component/reducer/cartReducer";

const ListSearch = () => {
  const formatPrice = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  const [keyword, setKeyword] = useState();
  useEffect(() => {
    const keyword = JSON.parse(localStorage.getItem("keyword"));
    if (keyword) {
      setKeyword(keyword);
    }
  });
  const [productSearch, setProductSearch] = useState();
  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `https://json-server-vercel-amber.vercel.app/product-all?q=${keyword}`,
      }).then(function (res) {
        setProductSearch(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [keyword]);

  return (
    <main id="product">
      <section className="flow-user">
        <Link to={"/"}> Trang chủ </Link>/ Sản phẩm
      </section>
      <section className="product">
        <Row>
          <Col xs={12}>
            <h3>Kết quả tìm kiếm cho : "{keyword}"</h3>
            <div className="product-list-item">
              {productSearch &&
                productSearch.map((item, index) => {
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
                          <CardText className="product-price">
                            {formatPrice.format(item.price)}
                          </CardText>
                          <div className="home-btn-item-product">
                            <Button
                              onClick={() => {
                                dispatch({ type: "ADD", payload: item });
                              }}
                              className="home-add-to-card"
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
            </div>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default ListSearch;
