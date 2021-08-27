import { 
    Page, 
    Navbar, 
    Title
} from "components";
import {
    ProductDetails,
    ProductDetailsButton,
    ProductDetailsButtonIcon,
    ProductDetailsButtonsContainer,
    ProductDetailsContainer,
    ProductDetailsParagraph,
    ProductDetailsWrapper,
    ProductMoreDetails,
    ProductMoreDetailsContainer,
    ProductPrice,
    ProductPriceContainer,
    ProductThumbnail
} from "./Styled";
import theme from "theme";

import product from "assets/product1.png";

const Product = () =>(
    <Page>
        <Navbar />
        <ProductDetailsContainer>
            <ProductDetailsWrapper>
                <ProductThumbnail>
                    <img 
                        src={product}
                        alt="" 
                    />
                </ProductThumbnail>
                <ProductDetails>
                    <Title
                        fontWeight="800"
                        fontSize="32px"
                        textAlign="left"
                    >
                        Levis T-shirt
                    </Title>
                    <Title
                        fontSize="25px"
                        textAlign="left"
                    >
                        Simple T-shirt For Teenagers
                    </Title>
                    <ProductPriceContainer>
                        <ProductPrice discount>
                            160dt -Piece 
                        </ProductPrice>
                        <ProductPrice>
                            100 dt -Piece 
                        </ProductPrice>
                    </ProductPriceContainer>
                    <ProductMoreDetailsContainer>
                        <ProductMoreDetails>
                            10 picies available for size M
                        </ProductMoreDetails>
                        <ProductMoreDetails>
                            For: Men
                        </ProductMoreDetails>
                    </ProductMoreDetailsContainer>
                    <ProductDetailsParagraph>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </ProductDetailsParagraph>
                    <ProductDetailsButtonsContainer>
                        <ProductDetailsButton>
                            <ProductDetailsButtonIcon 
                                src={theme.icons.cart}
                                alt=""
                            />
                            ADD TO CART
                        </ProductDetailsButton>
                        <ProductDetailsButton>
                            <ProductDetailsButtonIcon 
                                src={theme.icons.purchase}
                                alt=""
                            />
                            PURCHASE NOW
                        </ProductDetailsButton>
                    </ProductDetailsButtonsContainer>
                </ProductDetails>
            </ProductDetailsWrapper>
        </ProductDetailsContainer>
    </Page>
);

export default Product;
