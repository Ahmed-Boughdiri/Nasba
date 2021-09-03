import theme from "theme";
import {
    DeliveryErrorViewContainer,
    DeliveryErrorViewLink,
    DeliveryErrorViewMessage,
    DeliveryErrorViewThumbnail
} from "./Styled";
import { DeliveryErrorProps } from "./Props";

const DeliveryError:React.FC<DeliveryErrorProps> = ({ history }) =>(
    <DeliveryErrorViewContainer>
        <DeliveryErrorViewThumbnail 
            src={theme.icons.error}
            alt=""
        />
        <DeliveryErrorViewMessage>
            An Error Has Occured Please 
            Try Again Later
        </DeliveryErrorViewMessage>
        <DeliveryErrorViewLink
            onClick={() => history.push("/")}
        >
            Go Back To Home Page
        </DeliveryErrorViewLink>
    </DeliveryErrorViewContainer>
);

export default DeliveryError;
