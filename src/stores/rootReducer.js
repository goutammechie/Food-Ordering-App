import { combineReducers } from "redux";
import cartReducer from "./cart/cartSlice";
import productReducer from "./cart/menu/productsSlice";
// import addressReducer from "./cart/userInfo/addressSlice";

const rootReducer = combineReducers(
    {
        cart: cartReducer,
        products: productReducer,
        // address: addressReducer
    }
);

export default rootReducer;