import { BUY_PRODUCT } from "../action/actionType";


const initialState = {
    cartArray: []
}
const cartReducer = (state = initialState, action) => {
switch (action.type) {
    case BUY_PRODUCT:
        const productInCart = state.cartArray.find(
            (p) => p.id === action.payload.id
        );
        if(!productInCart) {
            return {
                cartArray: [...state.cartArray, action.payload]
            }
        } else{
            const newCart = state.cartArray;
            const objestIndex = newCart.findIndex(
                (obj)=> obj.id === action.payload.id
            )
        }
        

    default:
        break;
}
}
export default cartReducer;