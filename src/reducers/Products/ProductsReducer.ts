import { ProductProps } from "types";
import { ProductsAction } from "./Props";

const initialState:ProductProps[] = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default function(
    state=initialState,
    action: ProductsAction
) {
    switch(action.type) {
        case "STORE_PRODUCTS":
            return state = [ ...action.payload ];
        default:
            return state;
    }
}
