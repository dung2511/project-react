import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Cartcontext } from "../../component/reducer/cartReducer";
import "./payment.css";

const Payment = () => {
  document.title = "Thanh toán";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onHandleSubmit = (e) => {
    console.log(e);
  };
  const handleChange = (e) => {
    e.preventDefault();
    let huyen = e.target.value;
    for (let i in city) {
      if (city[i].codename === huyen) {
        let huyens = city[i].districts;
        setDistrict(huyens);
      }
    }
  };
  const handleChangeWard = (e) => {
    e.preventDefault();
    let xa = e.target.value;
    for (let i in district) {
      if (district[i].codename === xa) {
        let xas = district[i].wards;
        setCommune(xas);
      }
    }
  };

  const [city, setCity] = useState();
  const [district, setDistrict] = useState();
  const [commune, setCommune] = useState();
  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "https://provinces.open-api.vn/api/?depth=3",
      }).then(function (res) {
        setCity(res.data);
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="checkout">
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Product name</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$12</span>
                </li>

                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li>
              </ul>
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Billing address</h4>
              <form
                onSubmit={handleSubmit(onHandleSubmit)}
                className="needs-validation"
                
              >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      required
                    />

                    <div className="invalid-feedback">
                      Vui lòng điền thông tin
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Vui lòng điền thông tin
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="country" className="form-label">
                      Thành phố
                    </label>
                    <select
                      onChange={handleChange}
                      className="form-select d-block w-100"
                      id="country"
                      required
                    >
                      <option value="">Chọn Thành Phố</option>
                      {city &&
                        city.map((item, index) => {
                          return (
                            <option value={item.codename} key={index}>
                              {item.name}
                            </option>
                          );
                        })}
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state" className="form-label">
                      Quận/Huyện
                    </label>
                    <select
                    onChange={handleChangeWard}
                      className="form-select d-block w-100"
                      id="state"
                      required
                    >
                      <option value="">Chọn Quận/Huyện</option>
                      {district &&
                        district.map((item, index) => {
                        
                          return (
                            <option value={item.codename} key={index}>
                              {item.name}
                            </option>
                          );
                        })}
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                  <label htmlFor="zip" className="form-label">
                     Xã
                    </label>
                    <select
                      className="form-select d-block w-100"
                      id="zip"
                      required
                    >
                      <option value="">Chọn xã</option>
                      {commune &&
                        commune.map((item, index) => {
                          console.log(item);
                          return (
                            <option value={item.codename} key={index}>
                              {item.name}
                            </option>
                          );
                        })}
                    </select>
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>{" "}
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                  <div className="invalid-feedback">Vui lòng nhập địa chỉ</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address2" className="form-label">
                    Ghi chú <span className="text-muted">(Tùy chọn)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="note"
                    placeholder="Ghi chú"
                  />
                </div>
                <hr className="mb-4" />
                <button
                  className="btn btn-dark px-4 rounded-pill"
                
                >
                  Đặt hàng
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
