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
import { RouteComponentProps } from "react-router-dom";
import { useHandleDeleteItem } from "hooks";

const Cart:React.FC<RouteComponentProps> = ({ history }) =>{
    const cartItems = useSelector((state: StoreProps) => state.cart);
    const { handleDeletItem } = useHandleDeleteItem();
    return (
        <Page>
            <Navbar history={history} />
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
                                    genre={item.genre}
                                    history={history}
                                    id={item.id}
                                    size={item.size}
                                    status={item.status}
                                    discountPrice={item.discountPrice}
                                    onDelete={() => handleDeletItem(item.id)}
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
