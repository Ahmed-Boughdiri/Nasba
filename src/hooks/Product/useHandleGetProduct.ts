import { useSelector, useDispatch } from "react-redux";
import { StoreProps } from "store";
import { useEffect } from "react";
import { sendQuery } from "utils";

const useHandleGetProduct = () =>{
    const product = useSelector((state: StoreProps) => state.product);
    const dispatch = useDispatch();
    const handleGetProduct = async() =>{
        if(product.id)
            return;
        try {
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
        } catch(err) {
            console.log("Error: ", err);
        }
    }
    useEffect(() =>{
        handleGetProduct();
    }, []);
    return product;
}

export default useHandleGetProduct;
