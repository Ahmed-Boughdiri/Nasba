import { Page, Navbar } from "components";
import {
    DeliveryContainer,
    DeliveryForm,
    DeliveryFormButton,
    DeliveryFormInput,
    DeliveryFormInputContainer,
    DeliveryTotalPrice,
    DeliveryWrapper
} from "./Styled";

const Delivery = () =>(
    <Page>
        <Navbar />
        <DeliveryContainer>
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
                        />
                        <DeliveryFormInput 
                            placeholder="Last Name"
                            dualInput
                        />
                    </DeliveryFormInputContainer>
                    <DeliveryFormInputContainer>
                        <DeliveryFormInput 
                            placeholder="Full Address"
                        />
                    </DeliveryFormInputContainer>
                    <DeliveryFormInputContainer>
                        <DeliveryFormInput 
                            placeholder="City"
                        />
                    </DeliveryFormInputContainer>
                    <DeliveryFormInputContainer>
                        <DeliveryFormInput 
                            placeholder="State"
                        />
                    </DeliveryFormInputContainer>
                    <DeliveryFormInputContainer>
                        <DeliveryFormInput 
                            placeholder="Zip Code"
                        />
                    </DeliveryFormInputContainer>
                    <DeliveryFormInputContainer>
                        <DeliveryFormInput 
                            placeholder="Phone Number"
                        />
                    </DeliveryFormInputContainer>
                    <DeliveryFormInputContainer>
                        <DeliveryFormInput 
                            placeholder="Email (Optional)"
                        />
                    </DeliveryFormInputContainer>
                    <DeliveryFormButton>
                        Make A Delivery
                    </DeliveryFormButton>
                </DeliveryForm>
            </DeliveryWrapper>
        </DeliveryContainer>
    </Page>
);

export default Delivery;
