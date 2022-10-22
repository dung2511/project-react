import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
const Home = () => {
  return (
    <main id="main">
      <section className="main-banner">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/image/banner-1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/image/bannerlogo.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="main-trademark">
        <div className="row list-trademark d-flex justify-content-between">
          <div className="col-2 item-trademark d-flex justify-content-center">
            <img src="assets/image/thtruemilk.png" alt="" />
          </div>
          <div className=" col-2 item-trademark d-flex justify-content-center">
            <img src="assets/image/thtruemilk.png" alt="" />
          </div>
          <div className=" col-2 item-trademark d-flex justify-content-center">
            <img src="assets/image/thtruemilk.png" alt="" />
          </div>
          <div className=" col-2 item-trademark d-flex justify-content-center">
            <img src="assets/image/thtruemilk.png" alt="" />
          </div>
          <div className="col-2 item-trademark d-flex justify-content-center">
            <img src="assets/image/thtruemilk.png" alt="" />
          </div>
          <div className="col-2 item-trademark d-flex justify-content-center">
            <img src="assets/image/thtruemilk.png" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
