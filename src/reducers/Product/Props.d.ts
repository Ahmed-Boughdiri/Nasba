import { AnyAction } from "redux";

export interface ProductAction extends AnyAction {
    payload: ProductProps
}
