import { 
    Page, 
    Navbar,
    Alert,
    View,
    Footer
} from "components";
import {
    DeliveryContainer,
    DeliveryForm,
    DeliveryFormButton,
    DeliveryFormInput,
    DeliveryFormInputContainer,
    DeliveryTotalPrice,
    DeliveryWrapper
} from "./Styled";
import { 
    useHandleMakeDelivery,
    useHandleGetProduct
} from "hooks";
import { RouteComponentProps } from "react-router-dom";

const Delivery:React.FC<RouteComponentProps> = ({ history }) =>{
    useHandleGetProduct();
    const {
        state,
        handleMakeDelivery,
        validationError,
        emptyValidationErrorMsg,
        error,
        success
    } = useHandleMakeDelivery();
    return (
        <Page>
            <Navbar />
            <DeliveryContainer>
                {
                    validationError && (
                        <Alert 
                            width="550px"
                            onHide={emptyValidationErrorMsg}    
                        >
                            { validationError }
                        </Alert>
                    )
                }
                <DeliveryWrapper>
                    <DeliveryTotalPrice>
                        <h6>YOUR DELIVERY TOTAL PRICE:</h6>
                        <h6>250.00$</h6>
                    </DeliveryTotalPrice>
                    <DeliveryForm>
                        <h6>Delivery Form</h6>
                        <DeliveryFormInputContainer>
                            <DeliveryFormInput 
                                placeholder="First Name"
                                dualInput
                                value={state.formState.firstName}
                                onChange={state.controllers.handleFirstName}
                            />
                            <DeliveryFormInput 
                                placeholder="Last Name"
                                dualInput
                                value={state.formState.lastName}
                                onChange={state.controllers.handleLastName}
                            />
                        </DeliveryFormInputContainer>
                        <DeliveryFormInputContainer>
                            <DeliveryFormInput 
                                placeholder="Full Address"
                                value={state.formState.address}
                                onChange={state.controllers.handleAddress}
                            />
                        </DeliveryFormInputContainer>
                        <DeliveryFormInputContainer>
                            <DeliveryFormInput 
                                placeholder="City"
                                value={state.formState.city}
                                onChange={state.controllers.handleCity}
                            />
                        </DeliveryFormInputContainer>
                        <DeliveryFormInputContainer>
                            <DeliveryFormInput 
                                placeholder="State"
                                value={state.formState.state}
                                onChange={state.controllers.handleState}
                            />
                        </DeliveryFormInputContainer>
                        <DeliveryFormInputContainer>
                            <DeliveryFormInput 
                                placeholder="Zip Code"
                                value={state.formState.zipCode + ""}
                                onChange={state.controllers.handleZipCode}
                            />
                        </DeliveryFormInputContainer>
                        <DeliveryFormInputContainer>
                            <DeliveryFormInput 
                                placeholder="Phone Number"
                                value={state.formState.phoneNumber}
                                onChange={state.controllers.handlePhoneNumber}
                            />
                        </DeliveryFormInputContainer>
                        <DeliveryFormInputContainer>
                            <DeliveryFormInput 
                                placeholder="Email (Optional)"
                                value={state.formState.email}
                                onChange={state.controllers.handleEmail}
                            />
                        </DeliveryFormInputContainer>
                        <DeliveryFormButton onClick={handleMakeDelivery}>
                            Make A Delivery
                        </DeliveryFormButton>
                    </DeliveryForm>
                </DeliveryWrapper>
            </DeliveryContainer>
            {
                error && (
                    <View 
                        type="DELIVERY-ERROR"
                        history={history} 
                    />
                ) 
            }
            {
                success && (
                    <View 
                        type="DELIVERY-SUCCESS" 
                        history={history}
                    />
                )
            }
            <Footer />
        </Page>
    );
}

export default Delivery;
