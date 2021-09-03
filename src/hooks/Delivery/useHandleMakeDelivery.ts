import useHandleDeliveryState from "./useHandleDeliveryState";
import { sendQuery, validateDeliveryData } from "utils";
import { DeliveryProps } from "types";
import { useState } from "react";
import { useSelector } from "react-redux";
import { StoreProps } from "store";

const useHandleMakeDelivery = () =>{
    const state = useHandleDeliveryState();
    const [error, setError] = useState(false);
    const [validationError, setValidationError] = useState("");
    const [success, setSuccess] = useState(false);
    const product = useSelector((state: StoreProps) => state.product);
    const handleMakeDelivery = async() =>{
        try {
            validateDeliveryData(state.formState);
        } catch(err:any) {
            return setValidationError(err.message);
        }
        try {
            const result:DeliveryProps = {
                ...state.formState,
                zipCode: +state.formState.zipCode,
                phoneNumber: +state.formState.phoneNumber
            }
            if(!result.email)
                delete result.email;
            await sendQuery(`
                mutation {
                    createDelivery(delivery:{
                        firstName: "${state.formState.firstName}",
                        lastName: "${state.formState.lastName}",
                        address: "${state.formState.address}",
                        city: "${state.formState.city}",
                        zipCode: ${state.formState.zipCode},
                        email: "${state.formState.email}",
                        phoneNumber: ${state.formState.phoneNumber},
                        productID: "${product.id}"
                    }){
                        firstName,
                        lastName,
                        address,
                        city,
                        zipCode,
                        email,
                        phoneNumber,
                        status,
                        id,
                        productName,
                        productLabel,
                        productPrice,
                        productDiscountPrice,
                        productSize,
                        productGenre,
                        productThumbnail,
                        productID
                    }
                }
            `);
            setSuccess(true);
        } catch(err) {
            console.log("Error: ", err);
            setError(true);
        }
    }
    const emptyValidationErrorMsg = () => setValidationError("");
    return {
        handleMakeDelivery,
        state,
        success,
        error,
        validationError,
        emptyValidationErrorMsg,
    };
}

export default useHandleMakeDelivery;
