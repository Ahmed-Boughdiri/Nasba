import styled,{ css } from "styled-components";
import { Title, Button } from "components";
import theme from "theme";
import { ProductPriceProps } from "./Props";

export const ProductDetailsContainer = styled.div`
    height: calc(100vh - 60px);
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProductDetailsWrapper = styled.div`
    width: 100%;
    max-width: 900px;
    height: 100%;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 920px) {
        flex-direction: column;
    }
`;

export const ProductThumbnail = styled.div`
    height: 400px;
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    &>img {
        width: 100%;
        height: 100%;
    }
    @media only screen and (max-width: 920px) {
        width: 90%;
        display: block;
        max-width: 400px;
        margin: 20px auto 0;
        &>img {
            height: fit-content;
            width: 100%;
        }
    }
`;

export const ProductDetails = styled.div`
    display: block;
    margin-left: 20px;
    @media only screen and (max-width: 920px) {
        width: 90%;
        display: block;
        margin: 20px auto 0;
        max-width: 400px;
    }
`;

export const ProductPriceContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductPrice = styled(Title)<ProductPriceProps>`
    text-align: left;
    font-size: 18px;
    ${
        ({ discount }) =>{
            if(discount)
                return css`
                    color: ${theme.colors.danger};
                    text-decoration: line-through;
                    margin-right: 15px;
                `;
        }
    }
`;

export const ProductMoreDetailsContainer = styled.div`
    margin-top: 8px;
`;

export const ProductMoreDetails = styled(Title)`
    text-align: left;
    font-size: 17px;
    display: list-item;
    list-style-type: disc;
    list-style-position: inside;
    font-weight: 800;
`;

export const ProductDetailsParagraph = styled.p`
    text-align: left;
    font-size: 17px;
    margin-top: 15px;
    line-height: 23px;
`;

export const ProductDetailsButtonsContainer = styled.div`
    width: 100%;
    margin-top: 22px;
`;

export const ProductDetailsButton = styled(Button)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px 0;
    margin-bottom: 10px;
    font-size: 17px;
`;

export const ProductDetailsButtonIcon = styled.img`
    height: 26px;
    width: 26px;
    margin-right: 12px;
`;

