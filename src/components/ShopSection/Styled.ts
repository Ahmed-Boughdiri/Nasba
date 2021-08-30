import styled from "styled-components";
import { Container } from "react-bootstrap";

export const ShopSectionContainer = styled(Container)`
    margin-top: 60px;
`;

export const ShopSectionWrapper = styled.div`
    width: 100%;
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

export const ShopSectionItem = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
`;

