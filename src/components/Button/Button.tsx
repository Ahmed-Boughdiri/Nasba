import styled,{ css } from "styled-components";
import theme from "theme";
import { ButtonProps } from "./Props";

export default styled.button<ButtonProps>`
    border: 0;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    text-align: center;
    font-size: 19px;
    font-weight: 600;
    border-radius: 5px;
    ${
        ({ height, width }) =>{
            if(height)
                return css`
                    height: ${height as string};
                `;
            if(width)
                return css`
                    width: ${width as string};
                `;
        }
    }
`;
