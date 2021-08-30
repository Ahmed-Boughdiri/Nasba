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

import product from "assets/product1.png";

const Item = () =>(
    <CartItem>
        <CartItemContainer>
            <CartItemThumbnail>
                <img 
                    src={product}
                    alt="" 
                />
            </CartItemThumbnail>
            <CartItemDetails>
                <CartItemProductName>
                    Product Name
                </CartItemProductName>
                <CartItemLabel>
                    Product Label
                </CartItemLabel>
                <CartItemPrice>
                    250.00$
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
