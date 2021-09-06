import { Title, Button } from "components";
import {
    CardButtonContainer,
    CardContainer,
    CardDetail,
    CardDetailsContainer,
    CardPriceContainer,
    CardThumbnail,
    CardWrapper,
    DiscountPrice
} from "./Styled";
import { CardProps } from "./Props";
import { handleTitle } from "utils";

const Card:React.FC<CardProps> = ({
    thumbnail,
    discountPirce,
    genre,
    name,
    price,
    size,
    onClick
}) =>(
    <CardContainer>
        <CardThumbnail>
            <img 
                src={`https://nasba-backend.herokuapp.com/${thumbnail}`}
                alt="" 
            />
        </CardThumbnail>
        <CardWrapper>
            <Title
                textAlign="left"
                fontSize="23px"
            >
                { handleTitle(name) }
            </Title>
            <CardPriceContainer>
                {
                    discountPirce && (
                        <DiscountPrice fontSize="18px">
                            { discountPirce }
                        </DiscountPrice>
                    )
                }
                <Title fontSize="18px">
                    { price }
                </Title>
            </CardPriceContainer>
            <CardDetailsContainer>
                <CardDetail>
                    Sizes: { size }
                </CardDetail>
                <CardDetail>
                    For: { genre } 
                </CardDetail>
            </CardDetailsContainer>
            <CardButtonContainer>
                <Button onClick={onClick}>Order Now</Button>
            </CardButtonContainer>
        </CardWrapper>
    </CardContainer>
);

export default Card;
