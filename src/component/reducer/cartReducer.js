import { createSlice } from "@reduxjs/toolkit";
import { ADD_TO_CART, DELETE_PRODUCT } from "../actions/actionTypes";

const item = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];
const totalAmount = localStorage.getItem("totalAmount")
  ? JSON.parse(localStorage.getItem("totalAmount"))
  : [];
const totalQty = localStorage.getItem("totalQty")
  ? JSON.parse(localStorage.getItem("totalQty"))
  : [];
const setItemFunc = (item, totalAmount, totalQty) => {
  localStorage.setItem("cartItem", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQty", JSON.stringify(totalQty));
};
const initialState = {
  cartArray: item,
  totalQty: totalQty,
  totalAmount: totalAmount,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log(action);
      const newItem = action.payload;
      const productInCart = state.cartArray.find(
        (item) => (item.id = action.payload.id)
      );
      state.totalQty++;
      if (!productInCart) {
        console.log(state.cartArray);
        return {
          cartArray: [...state.cartArray, action.payload],
        };
      } else {
        const newCart = state.cartArray;
        const objIndex = newCart.findIndex(
          (obj) => obj.id === action.payload.id
        );
      }

      state.totalAmount = state.cartArray.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      setItemFunc(
        state.cartArray.map((item) => item),
        state.totalAmount,
        state.totalQty
      );
    }

    case DELETE_PRODUCT: {
      const newCart = state.cartArray;
      const objIndex = newCart.findIndex((obj) => (obj.id = action.payload.id));
      newCart.splice(objIndex, 1);
      return { cartArray: [...newCart] };
    }

    default:
      return state;
  }
};
export default cartReducer;
