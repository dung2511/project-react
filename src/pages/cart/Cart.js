import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import { Cartcontext } from "../../component/reducer/cartReducer";
import "./cart.css";
const Cart = () => {
  document.title = "Giỏ hàng";
  const formatPrice = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

 localStorage.setItem("cartItems", JSON.stringify(state));  
 
  return (
    <main id="cart">
      <section className="flow-user">
        <Link to={"/"}> Trang chủ </Link>/ Giỏ hàng
      </section>
      <section className="cart-container">
        <Table bordered>
          <thead>
            <tr>
              <th className="cart-img-product">Ảnh sản phẩm</th>
              <th className="cart-name-product">Tên sản phẩm</th>
              <th className="price-product">Giá tiền</th>
              <th className="cart-qty-product">Số lượng</th>
              <th className="cart-total-product">Tổng tiền</th>
              <th className="cart-manipulation">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {state.length > 0 ? (
              state.map((item, index) => {
                return (
                  <tr key={index}>
                    <th className="cart-img-product" scope="row">
                      <img src={item.url} alt="" />
                    </th>
                    <td className="cart-name-product">{item.name}</td>
                    <td className="price-product">
                      {formatPrice.format(item.price)}
                    </td>
                    <td className="cart-qty-product">
                      <button
                        onClick={() => {
                          if (item.quantity > 1) {
                            dispatch({ type: "DECREASE", payload: item });
                          } else {
                            dispatch({ type: "REMOVE", payload: item });
                          }
                        }}
                        type=""
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        onClick={() =>
                          dispatch({ type: "INCREASE", payload: item })
                        }
                        type=""
                      >
                        +
                      </button>
                    </td>
                    <td className="cart-total-product">
                      {formatPrice.format(item.quantity * item.price)}
                    </td>
                    <td className="cart-manipulation">
                      {" "}
                      <button
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: item })
                        }
                        type=""
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6}>
                  <span className="align-middle ">
                    No data available in table
                  </span>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </section>
      <section className="cart-total">
        Tổng tiền thanh toán: {formatPrice.format(total)}
      </section>
      <section className="go_to_payment">
        <Link to={"/payment"}>{state.length > 0 ? "Thanh toán" : ""}</Link>
      </section>
    </main>
  );
};

export default Cart;
