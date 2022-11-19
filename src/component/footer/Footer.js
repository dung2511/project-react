import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import './footer.css'
const Footer = () => {
  return (
    <footer id="footer">
      <div>
        <Row xs={4}>
          <Col>
            <h4>Beaty Nội thất</h4>
            <p>
              Với kinh nghiệm hơn 0 năm trong ngành nội thất, Beaty Nội Thất tự
              hào là cung cấp những mẫu sản phẩm nội thất tốt nhất Việt Nam.
            </p>
            <p>Quận Nam Từ Liêm: tầng 12A, Viwaseen Tower, 48 Tố Hữu</p>
            <p>0902209022</p>
            <p>support@beaty.com</p>
          </Col>
          <Col>
            <h4>Về Chúng Tôi</h4>
            <p>
              <Link to={"/"}>Trang chủ</Link>
            </p>
            <p>
              <Link to={"/"}>Giới thiệu</Link>
            </p>
            <p>
              <Link to={"/"}>Sản phẩm</Link>
            </p>
            <p>
              <Link to={"/"}>Tin tức</Link>
            </p>
            <p>
              <Link to={"/"}>Liên hệ</Link>
            </p>
          </Col>
          <Col>
            <h4>Hộ trợ khách hàng</h4>
            <p>
              <Link to={"/"}>Hướng dẫn mua hàng</Link>
            </p>
            <p>
              <Link to={"/"}>Cam kết chất lượng</Link>
            </p>
            <p>
              <Link to={"/"}>Quy định thang toán</Link>
            </p>
            <p>
            </p>
          </Col>
          <Col>
            <h4>Chính sách ưu đãi</h4>
            <p>
              <Link to={"/"}>Chính sách thanh toán</Link>
            </p>
            <p>
              <Link to={"/"}>Chính sách vận chuyển và giao nhận</Link>
            </p>
            <p>
              <Link to={"/"}>Chính sách đổi trả và hoàn tiền</Link>
            </p>
            <p>
              <Link to={"/"}>Chính sách bảo mật thông tin</Link>
            </p>
            <p>
              <Link to={"/"}>Chính sách bảo hành</Link>
            </p>
            <p>
              <Link to={"/"}>Chính sách kiểm hàng</Link>
            </p>
            <p>
              <Link to={"/"}>Chính sách xử lý khiếu nại</Link>
              </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
