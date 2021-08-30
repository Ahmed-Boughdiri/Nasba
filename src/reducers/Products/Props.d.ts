import { AnyAction } from "redux";
import { ProductProps } from "types";

export interface ProductsAction extends AnyAction {
    payload: ProductProps[]
}

