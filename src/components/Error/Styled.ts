import styled from "styled-components";
import theme from "theme";

export const ErrorContainer = styled.div`
    height: 100%;
    width: 100%;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ErrorIcon = styled.img`
    height: 160px;
    width: 160px;
`;

export const ErrorMsg = styled.h6`
    text-align: center;
    color: ${theme.colors.secondary};
    font-size: 25px;
    max-width: 500px;
    width: 95%;
    margin-top: 20px;
    font-weight: 600;
`;

