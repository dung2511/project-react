import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
const PaymentForm = () => {
  const onHandleSubmit = () => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("phone", JSON.stringify(phone));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("address", JSON.stringify(address));
    localStorage.setItem("note", JSON.stringify(note));
  };
  const handleChangeCity = (e) => {
    e.preventDefault();
    let huyen = e.target.value;
    for (let i in city) {
      if (city[i].codename === huyen) {
        let huyens = city[i].districts;
        setDistrict(huyens);
        localStorage.setItem("city", JSON.stringify(city[i].name));
      }
    }
  };
  const handleChangeDistrict = (e) => {
    e.preventDefault();
    let xa = e.target.value;
    for (let i in district) {
      if (district[i].codename === xa) {
        let xas = district[i].wards;
        setCommune(xas);
        localStorage.setItem("district", JSON.stringify(district[i].name));
      }
    }
  };
  const handleChangeCommune = (e) => {
    e.preventDefault();
    for (let i in commune) {
      if (commune[i].codename === e.target.value) {
        localStorage.setItem("district", JSON.stringify(commune[i].name));
      }
    }
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAdress] = useState("");
  const [note, setNote] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [commune, setCommune] = useState("");
  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "https://provinces.open-api.vn/api/?depth=3",
      }).then(function (res) {
        setCity(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="col-md-8 order-md-1">
      <h4 className="mb-3">Thông tin giao hàng</h4>
      <form className="needs-validation" onSubmit={onHandleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="name" className="form-label">
              Họ tên
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="name"
              required
            />

            <div className="invalid-feedback">Vui lòng điền thông tin</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="phone" className="form-label">
              Số điện thoại
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              className="form-control"
              id="phone"
              placeholder=""
              required
              max={10}
            />
            <div className="invalid-feedback">Vui lòng điền thông tin</div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email <span className="text-muted">(Optional)</span>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="email"
            placeholder="you@example.com"
            required
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
              onChange={handleChangeCity}
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
              onChange={handleChangeDistrict}
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
              onChange={handleChangeCommune}
              className="form-select d-block w-100"
              id="zip"
              required
            >
              <option value="">Chọn xã</option>
              {commune &&
                commune.map((item, index) => {
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
            onChange={(e) => setAdress(e.target.value)}
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
            onChange={(e) => setNote(e.target.value)}
            type="text"
            className="form-control form-note"
            id="note"
            placeholder="Ghi chú"
          />
        </div>
        <hr className="mb-4" />{" "}
        <Link to={"/checkout"}>
          <button type="submit" className="btn btn-dark px-4">
            Đặt hàng
          </button>
        </Link>
      </form>
    </div>
  );
};

export default PaymentForm;
