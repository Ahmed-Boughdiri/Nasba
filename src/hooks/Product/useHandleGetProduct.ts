import { useSelector, useDispatch } from "react-redux";
import { StoreProps } from "store";
import { useEffect, useState } from "react";
import { sendQuery } from "utils";

const useHandleGetProduct = () =>{
    const product = useSelector((state: StoreProps) => state.product);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const handleGetProduct = async() =>{
        if(product.id)
            return;
        try {
            setLoading(true);
            const productID = localStorage.getItem("PRODUCT_ID");
            const { product } = await sendQuery(`
                query {
                    product(id: "${productID}") {
                        name,
                        label,
                        id,
                        price,
                        discountPrice,
                        size,
                        genre,
                        thumbnail,
                        status
                    }
                }
            `);
            dispatch({
                type: "STORE_PRODUCT_DATA",
                payload: product
            });
            setLoading(false);
        } catch(err) {
            console.log("Error: ", err);
            setError("An Error Occured While Trying To Get Product");
            setLoading(false);
        }
    }
    useEffect(() =>{
        handleGetProduct();
    }, []);
    return {
        product,
        loading,
        error
    };
}

export default useHandleGetProduct;
