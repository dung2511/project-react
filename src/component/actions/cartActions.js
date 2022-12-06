import { ADD_TO_CART, DELETE_PRODUCT } from "./actionTypes";

export const buyProduct = (product) => async (dispatch) => {
  // kiểm tra cart
  const cart = localStorage.getItem("cart") ? localStorage.getItem("cart") : [];
  // check if duplicates (trùng lặp)
const duplicates = cart.filter((cartItem) => cartItem.id === product.id);
  console.log(product);
  // check if no duplicates, proceed
  if (duplicates.length === 0) {
    // prep product data ( cb dữ liệu sản phẩm)
    const productToAdd = {
      ...product,
      count: 1,
    };
    // add product data to cart
    cart.push(productToAdd);
    // add cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    // add cart to redux
    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
  }
};
export const deleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
};
