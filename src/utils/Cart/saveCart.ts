import { ProductProps } from "types";

function saveCart(cart: ProductProps[]) {
    try {
        const result = JSON.stringify({
            cart
        });
        localStorage.setItem("CART_PRODUCTS", result);
    } catch(err) {
        throw err;
    }
}

export default saveCart;
