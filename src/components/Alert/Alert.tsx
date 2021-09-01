import theme from "theme";
import { AlertContainer } from "./Styled";
import { AlertProps } from "./Props";

const Alert:React.FC<AlertProps> = ({ 
    children, 
    onHide,
    success,
    width
}) =>(
    <AlertContainer 
        success={success}
        width={width}
    >
        <h6>
            { children }
        </h6>
        <img 
            src={theme.icons.light.remove}
            alt="" 
            onClick={onHide}
        />
    </AlertContainer>
);

export default Alert;
