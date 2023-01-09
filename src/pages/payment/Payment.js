import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Badge, Table } from "reactstrap";
import { Cartcontext } from "../../component/reducer/cartReducer";
import "./payment.css";
import MailIcon from "@mui/icons-material/Mail";
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
    // e.preventDefault();
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
    <main className="payment">
      <section className="payment_container">
        <form
          className="payment_info_user"
          onSubmit={handleSubmit(onHandleSubmit)}
        >
          <div className="form_info_user">
            <input
              placeholder="Họ và tên"
              {...register("username", {
                required: true,
                maxLength: 20,
              })}
            />
            {errors?.username?.type === "required" && (
              <p>Vui lòng nhập họ tên</p>
            )}
            {errors?.username?.type === "maxLength" && (
              <p>First name cannot exceed 30 characters</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: true,
              })}
            />
            {errors?.email?.type === "required" && <p>Vui lòng nhập email</p>}

            <input
              placeholder="Số điện thoại"
              type="number"
              name="phone"
              {...register("phone", {
                required: true,
              })}
            />
            {errors?.phone?.type === "required" && (
              <p>Vui lòng nhập số điện thoại</p>
            )}

            <input
              placeholder="Địa chỉ(Tùy chọn)"
              name="address"
              {...register("address", {
                required: true,
              })}
            />
            {errors?.address?.type === "required" && (
              <p>Vui lòng nhập địa chỉ</p>
            )}
            <input
              type=""
              name="note"
              className="payment_note"
              placeholder="Ghi chú (Tùy chọn)"
            />
            <select
              className="select_city"
              value="city"
              onChange={handleChange}
              id="city"
            >
              <option defaultValue={""}>---Chọn Thành Phố---</option>
              {city &&
                city.map((city) => {
                  return (
                    <option key={city.code} value={city.codename}>
                      {city.name}
                    </option>
                  );
                })}
            </select>
            <select
              className="select_district"
              value="district"
              onChange={handleChangeWard}
              id="district"
            >
              <option defaultValue={""}>---Chọn Quận Huyện---</option>
              {district &&
                district.map((district) => {
                  return (
                    <option key={district.code} value={district.codename}>
                      {district.name}
                    </option>
                  );
                })}
            </select>
            <select
              className="select_commune"
              value="commune"
              onChange={handleChange}
              id="commune"
            >
              <option defaultValue={""}>---Chọn Xã---</option>
              {commune &&
                commune.map((ward) => {
                  return (
                    <option key={ward.code} value={ward.codename}>
                      {ward.name}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className="payment_type">
            <h4>Vận chuyển</h4>
            <p>Vui lòng nhập thông tin thanh toán</p>
            <p>Phí vận chuyển:</p>
            <h4>Phương thức thanh toán</h4>
            <span>
              <input
                type="radio"
                id="payment_type"
                {...register("type_payment", {
                  required: true,
                })}
              />
              <label htmlFor="payment_type">Thanh toán khi nhận hàng</label>
              {errors?.type_payment?.type === "required" && (
                <p>Vui lòng chọn phương thức thanh toán</p>
              )}
            </span>
          </div>
          <div className="payment_info_product">
            <Table bordered>
              <thead>
                {state.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th className="payment_img">
                        <Badge color="secondary" badgeContent={99}>
                          <MailIcon />
                        </Badge>
                     
                      </th>
                      <th className="payment_name">{item.name}</th>

                      <th className="payment_total_price">{total}</th>
                    </tr>
                  );
                })}
              </thead>
            </Table>
            <input className="payment_submit" type="submit" />
          </div>
        </form>
      </section>
    </main>
  );
};

export default Payment;
