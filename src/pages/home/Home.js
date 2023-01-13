import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Cartcontext } from "../../component/reducer/cartReducer";

const banner = [
  {
    url: "assets/image/banner_1.webp",
  },
  {
    url: "assets/image/banner_2.webp",
  },
  {
    url: "assets/image/banner_3.webp",
  },
  {
    url: "assets/image/banner_4.webp",
  },
];
const Home = () => {
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  document.title = "HomeBeauty";
  const formatPrice = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  const [productfeature, setProductfeature] = useState("");
  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "https://json-server-vercel-amber.vercel.app/product-feature",
      }).then(function (res) {
        setProductfeature(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <main id="home">
      <section className="home-container-banner">
        <div>
          <img src="assets/image/banner.jpg" alt="" />
        </div>
      </section>

      <section className="home-owl-stage">
        {banner &&
          banner.map((item, index) => {
            return (
              <div key={index} className="home-owl-item">
                <img src={item.url} alt="" />
              </div>
            );
          })}
      </section>
      <section className="home-product-feature">
        <h3 className="home-title-section">
          <Link to={"/all-product-feature"}>Sản Phẩm Nổi Bật</Link>
        </h3>
        {productfeature &&
          productfeature.map((item, index) => {
            item.quantity = 1;
            return (
              <Card className="home-item-product-feature" key={index}>
                <div>
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
                        onClick={() => {
                          dispatch({ type: "ADD", payload: item });
                        }}
                        className="home-add-to-card"
                      >
                        Thêm vào giỏ
                      </Button>
                      <Button className="home-buy-now">
                        <Link to="/">Mua ngay</Link>
                      </Button>
                    </div>
                  </CardBody>
                </div>
              </Card>
            );
          })}
      </section>
      <section className="home-product-feature">
        <h3 className="home-title-section">
          <Link to={"/all-product-feature"}>Sản Phẩm Nổi Bật</Link>
        </h3>
        {productfeature &&
          productfeature.map((item, index) => {
            return (
              <Card className="home-item-product-feature" key={index}>
                <div>
                  <Link to={`/product/${item.id}`}>
                    <img alt="Card cap" src={item.url} width="100%" />
                  </Link>
                  <CardBody>
                    <CardTitle className="home-item-feature-name">
                      {item.name}
                    </CardTitle>
                    <CardText>{formatPrice.format(item.price)}</CardText>
                    <div className="home-btn-item-product">
                      <Button className="home-add-to-card">Thêm vào giỏ</Button>
                      <Button className="home-buy-now">
                        <Link to="/">Mua ngay</Link>
                      </Button>
                    </div>
                  </CardBody>
                </div>
              </Card>
            );
          })}
      </section>
      <section className="home-product-feature">
        <h3 className="home-title-section">
          <Link to={"/all-product-feature"}>Sản Phẩm Nổi Bật</Link>
        </h3>
        {productfeature &&
          productfeature.map((item, index) => {
            return (
              <Card className="home-item-product-feature" key={index}>
                <div>
                  <Link to={`/product/${item.id}`}>
                    <img alt="Card cap" src={item.url} width="100%" />
                  </Link>
                  <CardBody>
                    <CardTitle className="home-item-feature-name">
                      {item.name}
                    </CardTitle>
                    <CardText>{formatPrice.format(item.price)}</CardText>
                    <div className="home-btn-item-product">
                      <Button className="home-add-to-card">Thêm vào giỏ</Button>
                      <Button className="home-buy-now">
                        <Link to="/">Mua ngay</Link>
                      </Button>
                    </div>
                  </CardBody>
                </div>
              </Card>
            );
          })}
      </section>
    </main>
  );
};
export default Home;
