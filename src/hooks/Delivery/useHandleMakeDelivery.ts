import useHandleDeliveryState from "./useHandleDeliveryState";
import { sendQuery, validateDeliveryData } from "utils";
import { DeliveryProps } from "types";
import { useState } from "react";

const useHandleMakeDelivery = () =>{
    const state = useHandleDeliveryState();
    const [error, setError] = useState("");
    const [validationError, setValidationError] = useState("");
    const [success, setSuccess] = useState("");
    const handleMakeDelivery = async() =>{
        try {
            validateDeliveryData(state.formState);
        } catch(err) {
            return setValidationError(err.message);
        }
        try {
            // const result:DeliveryProps = {
            //     ...state.formState,
            //     zipCode: +state.formState.zipCode
            // }
            // if(!result.email)
            //     delete result.email;
            // await sendQuery(``);
            // setSuccess("Your Delivery Has Been Registered Successfully");
        } catch(err) {
            console.log("Error: ", err);
        }
    }
    const emptyErrorMsg = () => setError("");
    const emptyValidationErrorMsg = () => setValidationError("");
    const emptySuccessMsg = () => setSuccess("");
    return {
        handleMakeDelivery,
        state,
        success,
        error,
        validationError,
        emptyErrorMsg,
        emptyValidationErrorMsg,
        emptySuccessMsg
    };
}

export default useHandleMakeDelivery;
