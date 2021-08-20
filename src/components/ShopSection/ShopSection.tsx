import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Title, Card } from "components";

const ShopSectionContainer = styled(Container)`
    margin-top: 60px;
`;

const ShopSectionWrapper = styled.div`
    width: 100%;
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const ShopSectionItem = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
`;

const ShopSection = () =>(
    <ShopSectionContainer>
        <Title fontSize="45px">Our Products</Title>
        <ShopSectionWrapper>
            <ShopSectionItem>
                <Card />
            </ShopSectionItem>
            <ShopSectionItem>
                <Card />
            </ShopSectionItem>
            <ShopSectionItem>
                <Card />
            </ShopSectionItem>
            <ShopSectionItem>
                <Card />
            </ShopSectionItem>
            <ShopSectionItem>
                <Card />
            </ShopSectionItem>
            <ShopSectionItem>
                <Card />
            </ShopSectionItem>
        </ShopSectionWrapper>
    </ShopSectionContainer>
);

export default ShopSection;
