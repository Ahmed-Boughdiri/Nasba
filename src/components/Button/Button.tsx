import styled,{ css } from "styled-components";
import theme from "theme";
import { ButtonComponentProps } from "./Props";

interface ButtonProps extends ButtonComponentProps {
    onClick?: () => void
}

const ButtonComponent = styled.button<ButtonComponentProps>`
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

const Button:React.FC<ButtonProps> = ({ 
    children, 
    onClick ,
    height,
    width
}) =>(
    <ButtonComponent 
        onClick={onClick}
        height={height}
        width={width}
    >
        { children }
    </ButtonComponent>
)

export default Button;
