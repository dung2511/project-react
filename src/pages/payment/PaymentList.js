import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Cartcontext } from "../../component/reducer/cartReducer";
const PaymentList = () => {
  const formatPrice = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  console.log(state);
  const dispatch = Globalstate.dispatch;
  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="col-md-4 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
      </h4>
      <ul className="list-group mb-3">
        {state &&
          state.map((item, index) => {
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between lh-condensed"
              >
                <div>
                  <h6 className="my-0">{item.name}</h6>
                  <small className="text-muted">{item.quantity}</small>
                </div>
                <span className="text-muted">
                  {formatPrice.format(item.price)}
                </span>
              </li>
            );
          })}

        <li className="list-group-item d-flex justify-content-between">
          <span>Tổng cộng</span>
          <strong>{formatPrice.format(total)}</strong>
        </li>
      </ul>
    </div>
  );
};

export default PaymentList;
