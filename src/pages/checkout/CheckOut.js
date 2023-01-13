import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Cartcontext } from "../../component/reducer/cartReducer";
import "./checkout.css";
const CheckOut = () => {
  document.title = "Beauty - Cảm ơn bạn đã mua hàng";
  const formatPrice = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [address, setAdress] = useState();
  const [note, setNote] = useState("");
  const [city, setCity] = useState();
  const [district, setDistrict] = useState();
  const [commune, setCommune] = useState();
  useEffect(() => {
    const name = JSON.parse(localStorage.getItem("name"));
    if (name) {
      setName(name);
    }
    const phone = JSON.parse(localStorage.getItem("phone"));
    if (phone) {
      setPhone(phone);
    }
    const email = JSON.parse(localStorage.getItem("email"));
    if (email) {
      setEmail(email);
    }
    const address = JSON.parse(localStorage.getItem("address"));
    if (address) {
      setAdress(address);
    }
    const note = JSON.parse(localStorage.getItem("note"));
    if (note) {
      setNote(note);
    }
    const city = JSON.parse(localStorage.getItem("city"));
    if (city) {
      setCity(city);
    }
    const district = JSON.parse(localStorage.getItem("district"));
    if (district) {
      setDistrict(district);
    }
    const commune = JSON.parse(localStorage.getItem("commune"));
    if (commune) {
      setCommune(commune);
    }
  }, []);
  return (
    <div id="checkout">
      <section className="checkout__info">
        <div className="section section--icon-heading">
          <div className="section__icon unprintable">
            <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
              <g fill="none" stroke="#8EC343" strokeWidth="2">
                <circle cx="36" cy="36" r="35"></circle>
                <path d="M17.417,37.778l9.93,9.909l25.444-25.393"></path>
              </g>
            </svg>
          </div>
          <div className="thankyou-message-container">
            <h2 className="section__title">Cảm ơn bạn đã đặt hàng</h2>

            <p className="section__text">
              Một email xác nhận đã được gửi tới {email} <br />
              Xin vui lòng kiểm tra email của bạn
            </p>
          </div>
        </div>
      </section>
      <section className="checkout__product">
        <div className="col--primary">
          <section className="section__info">
            <div className="section__content section__content--bordered">
              <div className="row">
                <div className="col col--md-two">
                  <h3>Thông tin khách hàng</h3>
                  <p>Họ tên: {name} </p>

                  <p>Email: {email} </p>

                  <p>SĐT: {phone}</p>
                </div>
              </div>
            </div>
            <div className="section__content section__content--bordered">
              <div className="row">
                <div className="col col--md-two">
                  <h3>Địa chỉ nhận hàng</h3>

                  <p>Địa chỉ: {address}</p>

                  <p>
                    Địa chỉ: {commune}, {district}, {city}
                  </p>
                </div>
              </div>
            </div>
            <div className="section__content section__content--bordered">
              <div className="row">
                <div className="col col--md-two">
                  <h3>Ghi chú:</h3>

                  <p>{note}</p>
                </div>
              </div>
            </div>
          </section>
          <hr className="my-4" />
        </div>
        <div className="col--secondary">
          <aside
            className="order-summary order-summary--bordered order-summary--is-collapsed"
            id="order-summary"
          >
            <div className="order-summary__header">
              <div className="order-summary__title">
                <h3>Đơn hàng ({state.length})</h3>
              </div>
            </div>
            {state.length > 0 &&
                state.map((item, index) => {
                  return (
                    <div className="order-summary__sections" key={index}>
                      <div className="order-summary__section order-summary__section--product-list order-summary__section--is-scrollable order-summary--collapse-element">
                        <table className="product-table">
                          <tbody>
                            <tr className="product">
                              <td className="product__image">
                                <div className="product-thumbnail">
                                  <div className="product-thumbnail__wrapper">
                                    <img
                                      src={item.url}
                                      alt=""
                                      className="product-thumbnail__image"
                                    />
                                  </div>
                                  <span className="badge product-thumbnail__quantity unprintable">
                                    {item.quantity}
                                  </span>
                                </div>
                              </td>
                              <th className="product__description">
                                <div className="product__description__name">
                                  {item.name}
                                </div>
                              </th>
                              <td className="product__price">
                                {formatPrice.format(item.price)}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <hr className="my-4" />
                    </div>
                  );
                })}
            {/* <div className="order-summary__sections">
              <div className="order-summary__section order-summary__section--product-list order-summary__section--is-scrollable order-summary--collapse-element">
                <table className="product-table">
                  <tbody>
                    <tr className="product">
                      <td className="product__image">
                        <div className="product-thumbnail">
                          <div className="product-thumbnail__wrapper">
                            <img
                              src="../assets/image/ghe-phong-khach-1.jpg"
                              alt=""
                              className="product-thumbnail__image"
                            />
                          </div>
                          <span className="badge product-thumbnail__quantity unprintable">
                            1
                          </span>
                        </div>
                      </td>
                      <th className="product__description">
                        <div className="product__description__name">
                          Ghế Phòng khách
                        </div>
                      </th>
                      <td className="product__price">
                        {formatPrice.format(2000000)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <hr className="my-4" />
            </div> */}
            <div className="order-summary__section">
              <table className="total-line-table">
                <tbody className="total-line-table__tbody">
                  <tr className="total-line total-line--subtotal">
                    <th className="total-line__name">Tạm tính</th>
                    <td className="total-line__price">
                      {formatPrice.format(total)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="order-summary__section">
              <table className="total-line-table">
                <tbody className="total-line-table__tbody">
                  <tr className="total-line payment-due">
                    <th className="total-line__name">
                      <span className="payment-due__label-total">
                        Tổng cộng
                      </span>
                    </th>
                    <td className="total-line__price">
                      <span className="payment-due__price">
                        {formatPrice.format(total)}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </aside>
        </div>
      </section>
      <section className="section unprintable">
        <div className="field__input-btn-wrapper field__input-btn-wrapper--floating">
          <Link to={"/product"} className="btn btn--large">
            Tiếp tục mua hàng
          </Link>
          <Link to={"/"} className="btn btn--large">
            Trang chủ
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CheckOut;
