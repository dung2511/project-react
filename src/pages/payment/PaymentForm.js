import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onHandleSubmit = (e) => {
    console.log(e);
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
        localStorage.setItem("commune", JSON.stringify(commune[i].name));
      }
    }
  };

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [address, setAdress] = useState();
  const [note, setNote] = useState();
  const [city, setCity] = useState();
  const [district, setDistrict] = useState();
  const [commune, setCommune] = useState();

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("phone", JSON.stringify(phone));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("address", JSON.stringify(address));
    localStorage.setItem("note", note);
  }, [name, phone, email, note, address, city, district, commune]);
  const onChangeLocal = (e) => {};
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
  }, [city]);
  return (
    <div className="col-md-8 order-md-1">
      <h4 className="mb-3">Th??ng tin giao h??ng</h4>
      <form
        action={"checkout"}
        onSubmit={handleSubmit(onHandleSubmit)}
        className="needs-validation"
      >
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="name" className="form-label">
              H??? t??n
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="name"
              required
            />

            <div className="invalid-feedback">Vui l??ng ??i???n th??ng tin</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="phone" className="form-label">
              S??? ??i???n tho???i
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
            <div className="invalid-feedback">Vui l??ng ??i???n th??ng tin</div>
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
          />
          <div className="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 mb-3">
            <label htmlFor="country" className="form-label">
              Th??nh ph???
            </label>
            <select
              onChange={handleChangeCity}
              className="form-select d-block w-100"
              id="country"
              required
            >
              <option value="">Ch???n Th??nh Ph???</option>
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
              Qu???n/Huy???n
            </label>
            <select
              onChange={handleChangeDistrict}
              className="form-select d-block w-100"
              id="state"
              required
            >
              <option value="">Ch???n Qu???n/Huy???n</option>
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
              X??
            </label>
            <select
              onChange={handleChangeCommune}
              className="form-select d-block w-100"
              id="zip"
              required
            >
              <option value="">Ch???n x??</option>
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
            ?????a ch???
          </label>
          <input
            onChange={(e) => setAdress(e.target.value)}
            type="text"
            className="form-control"
            id="address"
            placeholder="1234 Main St"
            required
          />
          <div className="invalid-feedback">Vui l??ng nh???p ?????a ch???</div>
        </div>
        <div className="mb-3">
          <label htmlFor="address2" className="form-label">
            Ghi ch?? <span className="text-muted">(T??y ch???n)</span>
          </label>
          <input
            onChange={(e) => setNote(e.target.value)}
            type="text"
            className="form-control form-note"
            id="note"
            placeholder="Ghi ch??"
          />
        </div>
        <hr className="mb-4" />
        <button type="button" className="btn btn-dark px-4 rounded-pill">
          <Link to={"/checkout"}>?????t h??ng</Link>
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
