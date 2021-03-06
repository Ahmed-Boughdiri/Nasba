import styled,{ css } from "styled-components";
import { AlertContainerProps } from "./Props";
import theme from "theme";

export const AlertContainer = styled.div<AlertContainerProps>`
    width: 95%;
    max-width: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    height: 40px;
    background-color: ${theme.colors.danger};
    border-radius: 5px;
    box-sizing: border-box;
    padding: 12px 20px;
    &>img {
        height: 20px;
        width: 20px;
        margin-left: auto;
        cursor: pointer;
    }
    &>h6 {
        text-align: center;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        margin: 0;
        padding: 0;
        margin-left: auto;
    }
    ${
        ({ success, width }) =>{
            if(success)
                return css`
                    background-color: rgba(75, 181, 67, 0.9);
                `;
            if(width)
                return css`
                    width: ${width as string}
                `;
        }
    }
`;
