import styled,{ css } from "styled-components";
import theme from "theme";
import { InputContainerProps } from "./Props";

export const InputContainer =  styled.div<InputContainerProps>`
    height: 39px;
    width: 100%;
    border: 1px solid #919191;
    border-radius: 5px;
    font-size: 16px;
    color: ${theme.colors.secondary};
    text-align: left;
    padding: 0 15px;
    display: flex;
    align-items: center;
    background-color: #fff;
    margin-bottom: 12px;
    ${
        ({ dualInput }) =>{
            if(dualInput) 
                return css`
                    @media only screen and (min-width: 550px) {
                        width: 49%;
                    }
                    @media only screen and (max-width: 550px) {
                        width: 100% !important;
                    }
                `;
        }
    }
`;

export const InputComponent = styled.input`
    width: 100%;
    border: 0;
    background-color: transparent;
    outline: none;
`;

