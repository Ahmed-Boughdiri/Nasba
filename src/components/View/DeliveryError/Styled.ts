import styled from "styled-components";
import theme from "theme";

export const DeliveryErrorViewContainer = styled.div`
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

export const DeliveryErrorViewThumbnail = styled.img`
    height: 150px;
    width: 150px;
`;

export const DeliveryErrorViewMessage = styled.h6`
    text-align: center;
    width: 95%;
    max-width: 400px;
    color: ${theme.colors.secondary};
    font-size: 25px;
    line-height: 32px;
    font-weight: 600;
    margin-top: 10px;
`;

export const DeliveryErrorViewLink = styled.p`
    text-align: center;
    color: ${theme.colors.danger};
    font-size: 20px;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

