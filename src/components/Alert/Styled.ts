import styled,{ css } from "styled-components";
import { AlertContainerProps } from "./Props";

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
    background-color: rgba(207, 0, 15, 0.9);
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
        ({ success }) =>{
            if(success)
                return css`
                    background-color: rgba(75, 181, 67, 0.9);
                `;
        }
    }
`;
