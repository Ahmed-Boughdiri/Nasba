import { AnyAction } from "redux";
import { ProductProps } from "types";

export interface CartAction extends AnyAction {
    payload: ProductProps
}
