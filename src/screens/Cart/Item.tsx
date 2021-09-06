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
import { History } from "history";
import { useHandleOrderNow } from "hooks";

interface ItemProps {
    thumbnail?: String,
    name: String,
    label: String,
    price: Number,
    history: History,
    genre: String,
    id: String,
    size: String,
    status: "AVAILABLE" | "NOT AVAILABLE",
    discountPrice?: Number,
    onDelete: () => void
}

const Item:React.FC<ItemProps> = ({
    thumbnail="",
    name,
    label,
    price,
    history,
    genre,
    id,
    size,
    status,
    discountPrice,
    onDelete
}) =>{
    const handleOrderNow = useHandleOrderNow(history);
    return (
        <CartItem>
            <CartItemContainer>
                <CartItemThumbnail>
                    <img 
                        src={`https://nasba-backend.herokuapp.com/${thumbnail}`}
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
                <CartItemOption
                    onClick={() => handleOrderNow({
                        genre,
                        id,
                        label,
                        name,
                        price,
                        size,
                        status,
                        thumbnail: [thumbnail],
                        discountPrice
                    })}
                >
                    <img 
                        src={theme.icons.purchase}
                        alt="" 
                    />
                </CartItemOption>
                <CartItemOption onClick={onDelete}>
                    <img 
                        src={theme.icons.remove} 
                        alt="" 
                    />
                </CartItemOption>
            </CartItemOptions>
        </CartItem>
    );
}

export default Item;
