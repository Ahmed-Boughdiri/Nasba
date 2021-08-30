import {
    CartItem,
    CartItemContainer,
    CartItemDetails,
    CartItemLabel,
    CartItemOption,
    CartItemOptions,
    CartItemPrice,
    CartItemProductName,
    CartItemThumbnail
} from "./Styled";
import theme from "theme";

interface ItemProps {
    thumbnail?: String,
    name: String,
    label: String,
    price: Number,
}

const Item:React.FC<ItemProps> = ({
    thumbnail="",
    name,
    label,
    price,
}) =>(
    <CartItem>
        <CartItemContainer>
            <CartItemThumbnail>
                <img 
                    src={`http://localhost:5000/${thumbnail}`}
                    alt="" 
                />
            </CartItemThumbnail>
            <CartItemDetails>
                <CartItemProductName>
                    { name }
                </CartItemProductName>
                <CartItemLabel>
                    { label }
                </CartItemLabel>
                <CartItemPrice>
                    { price }$
                </CartItemPrice>
            </CartItemDetails>
        </CartItemContainer>
        <CartItemOptions>
            <CartItemOption>
                <img 
                    src={theme.icons.purchase}
                    alt="" 
                />
            </CartItemOption>
            <CartItemOption>
                <img 
                    src={theme.icons.remove} 
                    alt="" 
                />
            </CartItemOption>
        </CartItemOptions>
    </CartItem>
);

export default Item;
