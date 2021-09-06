import styled from "styled-components";
import { Container } from "react-bootstrap";

export const ShopSectionContainer = styled(Container)`
    margin-top: 60px;
    margin-bottom: 60px;
`;

export const ShopSectionWrapper = styled.div`
    width: 100%;
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media only screen and (max-width: 990px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 770px) {
        display: block;
    }
`;

export const ShopSectionItem = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
`;

