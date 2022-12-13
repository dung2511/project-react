import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Col, Row } from "react-bootstrap";
import {
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  document.title = "HomeBeauty";
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [productfeature, setProductfeature] = useState("");
  const [productSold, setProductSold] = useState("");
  const [productPromotion, setProductPromotion] = useState("");
  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "http://localhost:3004/product-feature",
      }).then(function (res) {
        // console.log(res.data)
        setProductfeature(res.data);
      });
    } catch (error) {
      throw new Error(error);
    }
  }, []);
  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "http://localhost:3004/product-sold",
      }).then(function (resp) {
        setProductSold(resp.data);
      });
    } catch (error) {
      throw new Error(error);
    }
  }, []);
  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "http://localhost:3004/product-promotion",
      }).then(function (promotion) {
        setProductPromotion(promotion.data);
      });
    } catch (error) {
      throw new Error(error);
    }
  },[]);
  return (
    <main id='home'>
      <section className="home-container-banner">
        <div>
          <img src="assets/image/banner.jpg" alt="" />
        </div>
      </section>

      <section className="home-owl-stage">
        <Row>
          <Col>
            <div className="home-owl-item">
              <img src="assets/image/banner_1.webp" alt="" />
            </div>
          </Col>
          <Col>
            <div className="home-owl-item">
              <img src="assets/image/banner_2.webp" alt="" />
            </div>
          </Col>
          <Col>
            <div className="home-owl-item">
              <img src="assets/image/banner_3.webp" alt="" />
            </div>
          </Col>
          <Col>
            <div className="home-owl-item">
              <img src="assets/image/banner_4.webp" alt="" />
            </div>
          </Col>
        </Row>
      </section>
      <section className="home-product-feature">
        <h3 className="home-title-section">
          <Link to={"/all-product-feature"}>Sản Phẩm Nổi Bật</Link>
        </h3>
        <Slider {...settings}>
          {productfeature &&
            productfeature.map((item, index) => {
              return (
                <Card className="home-item-product-feature" key={index}>
                  <div>
                    <img alt="Card cap" src={item.url} width="100%" />
                    <CardBody>
                      <CardTitle className="home-item-feature-name">
                        {item.name}
                      </CardTitle>
                      <CardText>{item.price}đ</CardText>
                      <div className="home-btn-item-product">
                        <Button className="home-add-to-card">
                          Add to Cart
                        </Button>
                        <Button className="home-buy-now">
                          <Link to="/">Buy Now</Link>
                        </Button>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              );
            })}
        </Slider>
      </section>
      <section className="home-product-sold">
        <h3 className="home-title-section">
          <Link to={"/all-product-sold"}>Sản Phẩm Bán Chạy</Link>
        </h3>
        <Slider {...settings}>
          {productSold &&
            productSold.map((item, index) => {
              return (
                <Card className="home-item-product-feature" key={index}>
                  <div>
                    <img alt="Card cap" src={item.url} width="100%" />
                    <CardBody>
                      <CardTitle className="home-item-feature-name">
                        {item.name}
                      </CardTitle>
                      <CardText>{item.price}đ</CardText>
                      <div className="home-btn-item-product">
                        <Button className="home-add-to-card">
                          Add to Cart
                        </Button>
                        <Button className="home-buy-now">
                          <Link to="/">Buy Now</Link>
                        </Button>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              );
            })}
        </Slider>
      </section>
      <section className="home-product-promotion">
        <h3 className="home-title-section">
          <Link to={"/all-product-sold"}>Sản Phẩm Khuyến mãi</Link>
        </h3>
        <Slider {...settings}>
          {productPromotion &&
            productPromotion.map((item, index) => {
              return (
                <Card className="home-item-product-feature" key={index}>
                  <div>
                    <img alt="Card cap" src={item.url} width="100%" />
                    <CardBody>
                      <CardTitle className="home-item-feature-name">
                        {item.name}
                      </CardTitle>
                      <div className="home-item-product-price">
                      <CardText className="home-item-price-promotion">{item.promotion}đ</CardText>
                      <CardText className="home-item-price">{item.price}đ</CardText>
                      </div>

                      <div className="home-btn-item-product">
                        <Button className="home-add-to-card">
                          Add to Cart
                        </Button>
                        <Button className="home-buy-now">
                          <Link to="/">Buy Now</Link>
                        </Button>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              );
            })}
        </Slider>
      </section>
    </main>
  );
};
export default Home;
