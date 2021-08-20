import styled from "styled-components";
import { Container } from "react-bootstrap";
import theme from "theme";
import { Title } from "components";

export const CardContainer = styled.div`
    width: 100%;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 20px;
`;

export const CardThumbnail = styled.div`
    width: 100%;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    &>img {
        height: 90%;
    }
`;

export const CardWrapper = styled(Container)`
    margin-top: 10px;
    box-sizing: border-box;
    padding: 0 25px;
`;

export const CardPriceContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const DiscountPrice = styled(Title)`
    text-decoration: line-through;
    color: #7A0012;
    margin-right: 15px;
`;

export const CardDetailsContainer = styled.ul`
    width: 90%;
    display: block;
    margin: 5px auto 0;
    padding: 0 !important;
`;

export const CardDetail = styled.li`
    text-align: left;
    color: ${theme.colors.secondary};
    font-weight: 600;
`;

export const CardButtonContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    &>button {
        width: 100%;
        height: 40px;
    }
`;

