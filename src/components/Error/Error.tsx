import theme from "theme";
import {
    ErrorContainer,
    ErrorIcon,
    ErrorMsg
} from "./Styled";
import { ErrorProps } from "./Props";

const Error:React.FC<ErrorProps> = ({ errorMsg }) =>(
    <ErrorContainer>
        <ErrorIcon src={theme.icons.errorMsgIcon} />
        <ErrorMsg>
            { errorMsg }
        </ErrorMsg>
    </ErrorContainer>
);

export default Error;
