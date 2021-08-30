import { CartAction } from "./Props";
import { ProductProps } from "types";
import { getStoredCart } from "utils";

const initialState:ProductProps[] = getStoredCart() || [];

// eslint-disable-next-line import/no-anonymous-default-export
export default function(
    state=initialState,
    action: CartAction
) {
    switch(action.type) {
        case "ADD_PRODUCT_TO_THE_CART":
            return state = [ ...state, action.payload ];
        default:
            return state;
    }
}
