import styled,{ css } from "styled-components";
import theme from "theme";
import { TitleProps } from "./Props";

export default styled.h6<TitleProps>`
    color: ${theme.colors.secondary};
    font-weight: 600;
    ${
        ({ fontSize, textAlign }) =>{
            return css`
                font-size: ${fontSize ? fontSize as string : "22px"};
                text-align: ${textAlign ? textAlign as string : "center"};
            `;
        }
    }
`;
