import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import { Cartcontext } from "../../component/reducer/cartReducer";
import "./cart.css";
import { FaTrash } from "react-icons/fa";
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
  console.log(state);

  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2">
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">Giỏ hàng</h1>
                        <h6 className="mb-0 text-muted">
                          {state.length} Sản phẩm
                        </h6>
                      </div>
                      <hr className="my-4" />
                      {state &&
                        state.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="row mb-4 d-flex justify-content-between align-items-center"
                            >
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src={item.url}
                                  className="img-fluid rounded-3"
                                  alt={item.name}
                                />
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted">{item.name}</h6>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex cart__btn">
                                <button
                                  onClick={() => {
                                    if (item.quantity > 1) {
                                      dispatch({
                                        type: "DECREASE",
                                        payload: item,
                                      });
                                    } else {
                                      dispatch({
                                        type: "REMOVE",
                                        payload: item,
                                      });
                                    }
                                  }}
                                  type=""
                                >
                                  -
                                </button>
                                {item.quantity}
                                <button
                                  onClick={() =>
                                    dispatch({
                                      type: "INCREASE",
                                      payload: item,
                                    })
                                  }
                                  type=""
                                >
                                  +
                                </button>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 cart__price">
                                <h6 className="mb-0">
                                  {formatPrice.format(item.price)}
                                </h6>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <button
                                  onClick={() =>
                                    dispatch({ type: "REMOVE", payload: item })
                                  }
                                  className="text-muted"
                                >
                                  <FaTrash />
                                </button>
                              </div>
                            </div>
                          );
                        })}

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <Link to={"/product"} className="text-body">
                            <i className="fas fa-long-arrow-alt-left me-2"></i>
                            Back to shop
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">
                          {state.length} Sản phẩm
                        </h5>
                        <h5>{formatPrice.format(total)}</h5>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>{formatPrice.format(total)}</h5>
                      </div>
                      <Link to={"/payment"}>
                        <button
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Thanh toán
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
