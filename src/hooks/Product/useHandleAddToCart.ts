import { useDispatch } from "react-redux";
import { ProductProps } from "types";
import { getStoredCart, saveCart } from "utils";
import { useState } from "react";

const useHandleAddToCart = () =>{
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const handleAddToCart = (product: ProductProps) =>{
        try {
            const storedCart = getStoredCart();
            saveCart([ ...storedCart, product ]);
            dispatch({
                type: "ADD_PRODUCT_TO_THE_CART",
                payload: product
            });
            setError("");
            setSuccess("Products Has Been Added Successfully To The Cart");
        } catch(err) {
            console.log("Error: ", err);
            setSuccess("");
            setError("An Error Has Occured Please Try Again");
        }
    }
    const emptyErrorMsg = () => setError("");
    const emptySuccessMsg = () => setSuccess("");
    return {
        handleAddToCart,
        error,
        success,
        emptyErrorMsg,
        emptySuccessMsg
    };
}

export default useHandleAddToCart;
