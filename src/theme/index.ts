import cartIcon from "assets/cart.png";
import purchaseIcon from "assets/purchase.png";
import removeIcon from "assets/remove.svg";
import removeIconLight from "assets/remove-light.svg";
import errorIcon from "assets/error.png";
import successIcon from "assets/success.png";
import menuIcon from "assets/menu.svg";
import errorMsgIcon from "assets/error.svg";

const theme = {
    colors: {
        primary: "#FFD800",
        secondary :"#2C3539",
        danger: "#cf000fe6",
        success: "#4bb543e6"
    },
    icons: {
        cart: cartIcon,
        purchase: purchaseIcon,
        remove: removeIcon,
        light: {
            remove: removeIconLight
        },
        error: errorIcon,
        success: successIcon,
        menu: menuIcon,
        errorMsgIcon
    }
}

export default theme;
