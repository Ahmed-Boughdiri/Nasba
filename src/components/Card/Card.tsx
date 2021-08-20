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

import product1 from "assets/product1.png";

const Card = () =>(
    <CardContainer>
        <CardThumbnail>
            <img 
                src={product1}
                alt="" 
            />
        </CardThumbnail>
        <CardWrapper>
            <Title
                textAlign="left"
                fontSize="23px"
            >
                Product Name
            </Title>
            <CardPriceContainer>
                <DiscountPrice fontSize="18px">25.99$</DiscountPrice>
                <Title fontSize="18px">20.99$</Title>
            </CardPriceContainer>
            <CardDetailsContainer>
                <CardDetail>10 picies available for size M</CardDetail>
                <CardDetail>For: Men</CardDetail>
            </CardDetailsContainer>
            <CardButtonContainer>
                <Button>Order Now</Button>
            </CardButtonContainer>
        </CardWrapper>
    </CardContainer>
);

export default Card;
