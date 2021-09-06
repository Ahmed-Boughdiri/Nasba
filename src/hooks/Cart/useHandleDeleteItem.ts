import { useDispatch } from "react-redux";
import { getStoredCart, saveCart } from "utils";
import { useState } from "react";

const useHandleDeleteItem = () =>{
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const handleDeletItem = (productID: String) =>{
        try {
            const storedCart = getStoredCart();
            const itemID = storedCart.findIndex((item: any) => item.id === productID);
            if(itemID === -1)
                return;
            const newCart = storedCart.splice(itemID, 1);
            saveCart([ ...newCart ]);
            dispatch({
                type: "DELETE_PRODUCT_FROM_THE_CART",
                payload: productID
            });
            setError("");
            setSuccess("Products Has Been Added Successfully To The Cart");
        }  catch(err) {
            console.log("Error: ", err);
            setSuccess("");
            setError("An Error Has Occured Please Try Again");
        }
    }
    return {
        handleDeletItem
    }
}

export default useHandleDeleteItem;
