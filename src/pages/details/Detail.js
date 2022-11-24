import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import "./details.css";
import "./updateImg";

const Detail = () => {
  const param = useParams(); // lấy ID
  const [detailProduct, setDetailProduct] = useState("");

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `http://localhost:3004/product-all/${param.id}`,
      }).then(function (response) {
        // console.log(response.data);
        setDetailProduct(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  document.title = detailProduct.name;

  return (
    <main id="details">
      <section className="flow-user">
        <Link to={"/"}> Trang chủ </Link>/{" "}
        <Link to={"/product"}> Sản phẩm</Link> / {detailProduct.name}
      </section>
      <section className="detail-container">
        <div className="detail-product">
          <Row>
            <Col xs={6}>
              <div className="detail-product-img_0">
                <img
                  className="detail-img_feature"
                  src={detailProduct.img_detail_1}
                  alt={detailProduct.name}
                />
              </div>
              <div className="detail-product-img_2">
                <div className="detail-item-img">
                  <img src={detailProduct.img_detail_1} />
                </div>
                <div className="detail-item-img">
                  <img src={detailProduct.img_detail_2} />
                </div>
                <div className="detail-item-img">
                  <img src={detailProduct.img_detail_3} />
                </div>
                <div className="detail-item-img">
                  <img src={detailProduct.img_detail_4} />
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="detail-product-title">
                <div className="detail-product_name">
                  <h3>{detailProduct.name}</h3>
                </div>
                <div className="detail-product_price">
                  {detailProduct.price}đ
                </div>
                <div className="detail-product_detail">
                  {detailProduct.description}
                </div>
                  
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default Detail;
