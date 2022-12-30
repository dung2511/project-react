import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import "./details.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Detail = () => {
  const formatPrice = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const param = useParams(); // lấy ID
  const [detailProduct, setDetailProduct] = useState("");
  const [qty, setQty] = useState(1);
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

  useEffect(() => {
    document.title = detailProduct.name;
    var imgFeature = document.querySelector(".detail-img_feature");
    var listImg = document.querySelectorAll(".detail-product-img_2 img");
    var currentIndex = 0;
    function updateImg(index) {
      document.querySelectorAll(".detail-product-img_2 div").forEach((item) => {
        item.classList.remove("active");
      });
      currentIndex = index;
      imgFeature.src = listImg[index].getAttribute("src");
      listImg[index].parentElement.classList.add("active");
    }
    listImg.forEach((imgFeature, index) => {
      imgFeature.addEventListener("click", (e) => {
        updateImg(index);
      });
    });
    updateImg(0);
    if (detailProduct.qty > 0) {
      document.querySelector(".detail-product_update_2").innerHTML = "Còn hàng";
    } else {
      document.querySelector(".detail-product_update_2").innerHTML = "Hết hàng";
    }
  }, [detailProduct]);

  const handleOnchangInp = (e) => {
    if (e.target.value === String) {
      return false;
    }
  };

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
                <div className="detail-item-img active ">
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
                  <h1>{detailProduct.name}</h1>
                </div>
                <div className="detail-product-feature d-flex">
                  <span className="detail-product_feature d-flex">
                    Thương hiệu:{" "}
                    <p className="detail-product_update_1">
                      {detailProduct.feature}
                    </p>
                  </span>
                  <span style={{ margin: "0 12px" }}>|</span>
                  <span className="detail-product_qty d-flex">
                    Tình trạng: <p className="detail-product_update_2"></p>
                  </span>
                </div>
                <div className="detail-product_price">
                  {formatPrice.format(detailProduct.price)}
                </div>
                <div className="detail-product_detail">
                  <div className="detail-product_material d-flex align-item-end">
                    <h5 className="mb-0">Vật liệu</h5>
                    <p className="detail_material mb-0">
                      {" "}
                      {detailProduct.material}
                    </p>
                  </div>
                  <div className="detail-product_size d-flex align-item-end ">
                    <h5 className="mb-0">Kích thước</h5>
                    <p className="detail_size mb-0"> {detailProduct.size}</p>
                  </div>
                </div>
                <div className="detail-btn-amount">
                  <button className="detail-btn">-</button>
                  <input
                    type="number"
                    onChange={handleOnchangInp}
                    name="quantity"
                    defaultValue={qty}
                  />
                  <button className="detail-btn">+</button>
                </div>
                <div className="detail-add-buy">
                  <Link to={"/"} className="detail-buy_now">
                    <button type="">Mua ngay</button>
                  </Link>
                  <button className="detail-add_to_cart">Thêm giỏ hàng</button>
                </div>
              </div>
              <div className="detail-product_transport">
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="Mô tả" {...a11yProps(0)} />
                      <Tab label="Vận chuyển" {...a11yProps(1)} />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    - {detailProduct.material} <br />-{" "}
                    {detailProduct.kich_thuoc} <br /> - {detailProduct.bao_hanh}
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    GIAO HÀNG TẬN NƠI <br /> - MIỄN PHÍ giao hàng trong các Quận
                    nội thành Tp.Hồ Chí Minh và Hà Nội, áp dụng cho các đơn hàng
                    trị giá trên 5 triệu. <br />- Đối với khu vực các tỉnh lân
                    cận: Tính phí hợp lý theo dựa trên quãng đường vận chuyển
                  </TabPanel>
                </Box>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default Detail;
