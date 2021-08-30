import { ProductProps } from "types";
import { ProductAction } from "./Props";

const initialState:ProductProps = {
    genre: "",
    id: "",
    label: "",
    name: "",
    price: 0,
    size: "",
    status: "NOT AVAILABLE",
    thumbnail: [],
    discountPrice: 0
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(
    state=initialState,
    action: ProductAction
) {
    switch(action.type) {
        case "STORE_PRODUCT_DATA":
            return state = { ...action.payload }
        default:
            return state;
    }
}

