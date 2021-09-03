import { 
    Page, 
    Navbar,
    Footer
} from "components";
import Item from "./Item";
import {
    CartContainer,
    CartWrapper,
    CartItems
} from "./Styled";
import { useSelector } from "react-redux";
import { StoreProps } from "store";

const Cart = () =>{
    const cartItems = useSelector((state: StoreProps) => state.cart);
    return (
        <Page>
            <Navbar />
            <CartContainer>
                <CartWrapper>
                    <h6>YOUR CART</h6>
                    <CartItems>
                        {
                            cartItems.map((item, index) =>(
                                <Item 
                                    key={index}
                                    label={item.label}
                                    name={item.name}
                                    price={item.price}
                                    thumbnail={item.thumbnail[0] || ""}

                                />
                            ))
                        }
                    </CartItems>
                </CartWrapper>
            </CartContainer>
            <Footer/>
        </Page>
    );
}

export default Cart;
