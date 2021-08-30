import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreProps } from "store";
import { sendQuery } from "utils";

const useHandleGetProducts = () =>{
    const products = useSelector((state: StoreProps) => state.products);
    const dispatch = useDispatch();
    const handleGetProducts = async() =>{
        try {
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
        } catch(err) {
            console.log("Error: ", err);
        }
    }
    useEffect(() =>{
        handleGetProducts();
    }, []);
    return products;
}

export default useHandleGetProducts;
