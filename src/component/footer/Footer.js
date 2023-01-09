import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import "./footer.css";

const info = [
  {
    content:
      "Với kinh nghiệm hơn 0 năm trong ngành nội thất, Beaty Nội Thất tự hào là cung cấp những mẫu sản phẩm nội thất tốt nhất Việt Nam",
  },
  {
    content: "Quận Nam Từ Liêm: tầng 12A, Viwaseen Tower, 48 Tố Hữu",
  },
  {
    content: "0902200090",
  },
  {
    content: "support@beauty.com",
  },
];
const csud = [
  {
    display: "Chính sách thanh toán",
    path: "/",
  },
  {
    display: "Chính sách vận chuyển và giao nhận",
    path: "/",
  },
  {
    display: "Chính sách đổi trả và hoàn tiền",
    path: "/",
  },
  {
    display: "Chính sách bảo hành",
    path: "/",
  },
  {
    display: "Chính sách kiểm hàng",
    path: "/",
  },
  {
    display: "Chính sách xử lý khiếu nại",
    path: "/",
  },
];
const cskh = [
  {
    display: "Hướng dẫn mua hàng",
    path: "/",
  },
  {
    display: "Cam kết chất lượng",
    path: "/",
  },
  {
    display: "Quy định thanh toán",
    path: "/",
  },
];
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer_list">
        <div className="footer_item">
          <h4>Beaty Nội thất</h4>
          <img src="" alt=""/>
          {info &&
            info.map((item, index) => {
              return <p key={index}>{item.content}</p>;
            })}
        </div>
        <div className="footer_item">
          <h4>Hộ trợ khách hàng</h4>
          {cskh &&
            cskh.map((item, index) => {
              return (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              );
            })}
        </div>
        <div className="footer_item">
          <h4>Chính sách ưu đãi</h4>
          {csud &&
            csud.map((item, index) => {
              return (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              );
            })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
