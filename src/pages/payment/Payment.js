import React from "react";
import "./payment.css";
import PaymentForm from "./PaymentForm";
import PaymentList from "./PaymentList";

const Payment = () => {
  document.title = "Thanh toán";

  return (
    <div className="checkout">
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row">
            <PaymentList />
            <PaymentForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
