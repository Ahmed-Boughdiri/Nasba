import styled from "styled-components";
import theme from "theme";

export const CartContainer = styled.div`
    height: calc(100vh - 60px);
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CartWrapper = styled.div`
    height: 100%;
    width: 100%;
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &>h6 {
        text-align: center;
        font-size: 30px;
        color: ${theme.colors.secondary};
        font-weight: 600;
    }
`;

export const CartItems = styled.div`
    width: 100%;
    display: block;
    margin-top: 20px;
`;

export const CartItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin-bottom: 15px;
`;

export const CartItemContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const CartItemThumbnail = styled.div`
    height: 70px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    &>img {
        height: 100%;
    }
`;

export const CartItemDetails = styled.div`
    display: block;
    margin-left: 15px;
`;

export const CartItemProductName = styled.h5`
    text-align: left;
    color: ${theme.colors.secondary};
    font-size: 18px;
    font-weight: 600;
`;

export const CartItemLabel = styled.h6`
    text-align: left;
    color: #919191;
    font-size: 16px;
    margin-top: -5px;
`;

export const CartItemPrice = styled.h6`
    text-align: left;
    color: ${theme.colors.secondary};
    font-size: 14px;
    margin-top: -5px;
`;

export const CartItemOptions = styled.div`
    display: flex;
    align-items: center;
`;

export const CartItemOption = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    border-radius: 50%;
    margin-left: 15px;
    cursor: pointer;
    &>img {
        height: 60%;
        width: 60%;
    }
`;

