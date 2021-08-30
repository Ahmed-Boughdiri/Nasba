import cartIcon from "assets/cart.png";
import purchaseIcon from "assets/purchase.png";
import removeIcon from "assets/remove.svg";
import removeIconLight from "assets/remove-light.svg";

const theme = {
    colors: {
        primary: "#FFD800",
        secondary :"#2C3539",
        danger: "#7A0012"
    },
    icons: {
        cart: cartIcon,
        purchase: purchaseIcon,
        remove: removeIcon,
        light: {
            remove: removeIconLight
        }
    }
}

export default theme;
