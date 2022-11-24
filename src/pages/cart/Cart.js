import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
// import { deteleProduct } from "../action/cartAction";
import "./cart.css"
const Cart = () => {
    // const product_current = useSelector((state) => state);
    // const dispatch = useDispatch();
  return (
    <main id="cart">
      <section className="flow-user">
        <Link to={"/"}> Trang chủ </Link>/ Giỏ hàng
      </section>
      <section className="cart-container">
        <Table>
          <thead>
            <tr>
              <th className="cart-img-product">Ảnh sản phẩm</th>
              <th className="cart-name-product">Tên sản phẩm</th>
              <th className="cart-price-product">Giá tiền</th>
              <th className="cart-qty-product">Số lượng</th>
              <th className="cart-total-product">Tổng tiền</th>
              <th className="cart-manipulation">Thao tác</th>
            </tr>
          </thead>
          <tbody>
          {/* {product_current.cartAr.length > 0 ? (
            product_current.cartAr.map((item,index) => {
                console.log(item);
              return (
                <tr key={index}>
                <td scope="row" className="cart-img-product">
                    <img src={item.url} alt=""/>
                </td>
                <td className="cart-name-product">{item.name}</td>
                <td className="cart-price-product">{item.price}</td>
                <td className="cart-qty-product">1</td>
                <td className="cart-total-product">Tổng tiền</td>
                <td className="cart-manipulation">delete</td>
              </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>
                <span className="align-middle">
                  No data available in table
                </span>
              </td>
            </tr>
          )} */}
          </tbody>
        </Table>
      </section>
    </main>
  );
};

export default Cart;
