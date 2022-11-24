import { createStore } from "redux";
import cartReducer from "./pages/reducer/cartReducer";

const store = createStore(cartReducer)

export default store