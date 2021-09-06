import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreProps } from "store";
import { sendQuery } from "utils";

const useHandleGetProducts = () =>{
    const products = useSelector((state: StoreProps) => state.products);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const handleGetProducts = async() =>{
        try {
            setLoading(true);
            const { products } = await sendQuery(`
                query {
                    products {
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
                type: "STORE_PRODUCTS",
                payload: products
            });
            setError("");
            setLoading(false);
        } catch(err) {
            console.log("Error: ", err);
            setError("Error Occured While Loading Products");
            setLoading(false);
        }
    }
    useEffect(() =>{
        handleGetProducts();
    }, []);
    return {
        products,
        loading,
        error
    };
}

export default useHandleGetProducts;
