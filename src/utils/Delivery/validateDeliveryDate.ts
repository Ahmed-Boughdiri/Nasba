import { DeliveryProps } from "types";

function validateDeliveryData(delivery: DeliveryProps) {
    if(!delivery.firstName)
        throw Error("First Name Needs To Be Provided");
    else if(delivery.firstName.length < 3)
        throw Error("First Name Needs To Have More Characters");
    else if(!delivery.lastName)
        throw Error("Last Name Needs To Be Provided");
    else if(delivery.lastName.length < 3)
        throw Error("Last Name Needs To Have More Characters");
    else if(!delivery.address)
        throw Error("Address Needs To Be Provided");
    else if(delivery.address.length < 5)
        throw Error("Address Needs To Have More Characters");
    else if(!delivery.city)
        throw Error("City Needs To Be Provided");
    else if(!delivery.state)
        throw Error("State Needs To Be Provided");
    else if(!delivery.zipCode)
        throw Error("Zip Code Needs To Be Provided");
    else if(!delivery.phoneNumber)
        throw Error("Phone Number Needs To Be Provided");                
    else if(typeof delivery.phoneNumber === "string")
        if(delivery.phoneNumber.length < 5)
            throw Error("Phone Number Is Shorter Than Required");
}

export default validateDeliveryData;
