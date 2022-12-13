
import axios from "axios";
import { ADD_TO_CART, ALL_PRODUCT_REQUEST, DELETE_PRODUCT } from "./actionTypes";

export const buyProduct = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const deleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
};
export const getProduct = (currentPage = 1) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_PRODUCT_REQUEST
    })
    const {data} = await axios.get
  } catch (error) {
    
  }
}  