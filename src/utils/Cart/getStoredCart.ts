
function getStoredCart() {
    try {
        const data = localStorage.getItem("CART_PRODUCTS") || "";
        const result = JSON.parse(data);
        return result.cart || [];
    } catch(err) {
        return [];
    }
}

export default getStoredCart;
