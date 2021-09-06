import { 
    Title, 
    Card, 
    Loader,
    Error
} from "components";
import {
    ShopSectionContainer,
    ShopSectionItem,
    ShopSectionWrapper
} from "./Styled";
import { 
    useHandleGetProducts,
    useHandleOrderNow
} from "hooks";
import { History } from "history";

const ShopSection:React.FC<{ history: History }> = ({ history }) =>{
    const {
        products,
        loading,
        error
    } = useHandleGetProducts();
    const handleOrderNow = useHandleOrderNow(history);    
    return (
        <ShopSectionContainer>
            <Title fontSize="45px">Our Products</Title>
            {
                loading ? (
                    <Loader />
                ) : (
                    <>
                        {
                            error ? (
                                <Error errorMsg={error} />
                            ) : (
                                <ShopSectionWrapper>
                                    {
                                        products.map((product, index) =>(
                                            <ShopSectionItem key={index}>
                                                <Card 
                                                    name={product.name}
                                                    discountPirce={product.discountPrice}
                                                    genre={product.genre}
                                                    price={product.price}
                                                    size={product.size}
                                                    thumbnail={product.thumbnail[0] || undefined}
                                                    onClick={() => handleOrderNow(product)}
                                                />
                                            </ShopSectionItem>
                                        ))
                                    }
                                </ShopSectionWrapper>
                            )
                        }
                    </>
                )
            }
        </ShopSectionContainer>
    );
}

export default ShopSection;
