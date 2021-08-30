import { combineReducers, createStore } from "redux";
import { 
    productsReducer, 
    productReducer,
    cartReducer
} from "reducers";
import Store from "./Props";

export default createStore(
    combineReducers({
        products: productsReducer,
        product: productReducer,
        cart: cartReducer
    })
);

export interface StoreProps extends Store {};
