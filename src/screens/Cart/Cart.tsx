import { Page, Navbar } from "components";
import Item from "./Item";
import {
    CartContainer,
    CartWrapper,
    CartItems
} from "./Styled";

const Cart = () =>(
    <Page>
        <Navbar />
        <CartContainer>
            <CartWrapper>
                <h6>YOUR CART</h6>
                <CartItems>
                    <Item />
                    <Item />
                    <Item />
                </CartItems>
            </CartWrapper>
        </CartContainer>
    </Page>
);

export default Cart;
