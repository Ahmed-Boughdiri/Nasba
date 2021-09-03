import styled from "styled-components";
import theme from "theme";

export const DeliverySuccessViewContainer = styled.div`
    height: calc(100vh - 60px);
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    top: 60px;
    left: 0;
    background-color: #f3f3f3;
`;

export const DeliverySuccessViewThumbnail = styled.img`
    height: 150px;
    width: 150px;
`;

export const DeliverySuccessViewMessage = styled.h6`
    width: 95%;
    max-width: 440px;
    text-align: center;
    color: ${theme.colors.secondary};
    font-size: 25px;
    font-weight: 600;
    line-height: 35px;
    margin-top: 20px;
`;

export const DeliverySuccessViewLink = styled.p`
    text-align: center;
    font-size: 20px;
    color: ${theme.colors.success};
    cursor: pointer;
    margin-top: 10px;
    &:hover {
        text-decoration: underline;
    }
`;

