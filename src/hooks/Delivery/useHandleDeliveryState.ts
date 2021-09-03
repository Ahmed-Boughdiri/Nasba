import React, { useState } from "react";
import { numericalRange } from "global";

const useHandleDeliveryState = () =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState<String>("");
    const [phoneNumber, setPhoneNumber] = useState<String>("");
    const [email, setEmail] = useState("");
    return {
        formState: {
            firstName,
            lastName,
            address,
            city,
            state,
            zipCode,
            phoneNumber,
            email
        },
        controllers: {
            handleFirstName: 
                (e:React.ChangeEvent<HTMLInputElement>) =>
                    setFirstName(e.target.value),
            handleLastName: 
                (e:React.ChangeEvent<HTMLInputElement>) =>
                    setLastName(e.target.value),
            handleAddress: 
                (e:React.ChangeEvent<HTMLInputElement>) =>
                    setAddress(e.target.value),
            handleCity: 
                (e:React.ChangeEvent<HTMLInputElement>) =>
                    setCity(e.target.value),
            handleState: 
                (e:React.ChangeEvent<HTMLInputElement>) =>
                    setState(e.target.value),
            handleZipCode: 
                (e:React.ChangeEvent<HTMLInputElement>) =>{
                    const data = e.target.value;
                    if(numericalRange.includes(data[data.length - 1]))
                        setZipCode(e.target.value)
                },
            handlePhoneNumber: 
                (e:React.ChangeEvent<HTMLInputElement>) =>{
                    const data = e.target.value;
                    if(numericalRange.includes(data[data.length - 1]))
                        setPhoneNumber(e.target.value)
                },
            handleEmail: 
                (e:React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value),
        }
    }
}

export default useHandleDeliveryState;
