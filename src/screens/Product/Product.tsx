import { 
    Page, 
    Navbar, 
    Title,
    Alert,
    Footer
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
import { 
    useHandleGetProduct,
    useHandleAddToCart
} from "hooks";
import { RouteComponentProps } from "react-router-dom";

const Product:React.FC<RouteComponentProps> = ({ history }) =>{
    const product = useHandleGetProduct();
    const {
        handleAddToCart,
        error,
        success,
        emptyErrorMsg,
        emptySuccessMsg
    } = useHandleAddToCart();
    return (
        <Page>
            <Navbar />
            {
                error && (
                    <Alert onHide={emptyErrorMsg}>
                        { error }
                    </Alert>
                )
            }
            {
                success && (
                    <Alert 
                        onHide={emptySuccessMsg}
                        success
                    >
                        { success }
                    </Alert>
                )
            }
            <ProductDetailsContainer>
                <ProductDetailsWrapper>
                    <ProductThumbnail>
                        <img 
                            src={`http://localhost:5000/${product.thumbnail[0] || ""}`}
                            alt="" 
                        />
                    </ProductThumbnail>
                    <ProductDetails>
                        <Title
                            fontWeight="800"
                            fontSize="32px"
                            textAlign="left"
                        >
                            { product.name }
                        </Title>
                        <Title
                            fontSize="25px"
                            textAlign="left"
                        >
                            { product.label }
                        </Title>
                        <ProductPriceContainer>
                            {
                                product.discountPrice && (
                                    <ProductPrice discount>
                                        { product.discountPrice }dt -Piece 
                                    </ProductPrice>
                                )
                            }
                            <ProductPrice>
                                { product.price } dt -Piece 
                            </ProductPrice>
                        </ProductPriceContainer>
                        <ProductMoreDetailsContainer>
                            <ProductMoreDetails>
                                Sizes: { product.size }
                            </ProductMoreDetails>
                            <ProductMoreDetails>
                                For: { product.genre }
                            </ProductMoreDetails>
                        </ProductMoreDetailsContainer>
                        <ProductDetailsParagraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </ProductDetailsParagraph>
                        <ProductDetailsButtonsContainer>
                            <ProductDetailsButton 
                                onClick={() =>handleAddToCart(product)}
                            >
                                <ProductDetailsButtonIcon 
                                    src={theme.icons.cart}
                                    alt=""
                                />
                                ADD TO CART
                            </ProductDetailsButton>
                            <ProductDetailsButton
                                onClick={() => history.push("/delivery")}
                            >
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
            <Footer />
        </Page>
    );
}

export default Product;
