import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import "./details.css";
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
                <img src={detailProduct.url} alt={detailProduct.name} />
              </div>
              <div className="detail-product-img_2">
                <img
                  src="https://salt.tikicdn.com/cache/750x750/ts/product/02/6e/fe/afc3de59c477638a510370165ed5ce96.jpg.webp"
                  alt=""
                />
                <img src={detailProduct.img_detail_2} alt="" />
                <img src={detailProduct.img_detail_3} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default Detail;
