import { ProductProps } from "types";

export default interface StoreProps {
    products: ProductProps[],
    product: ProductProps,
    cart: ProductProps[]
}
