import { History } from "history";
import { ProductProps } from "types";
import { useDispatch } from "react-redux";

const useHandleOrderNow = (history: History) =>{
    const dispatch = useDispatch();
    const handleOrderNow = (product: ProductProps) =>{
        dispatch({
            type: "STORE_PRODUCT_DATA",
            payload: product
        });
        localStorage.setItem("PRODUCT_ID", product.id as string);
        history.push("/product");
    }
    return handleOrderNow;
}

export default useHandleOrderNow;
