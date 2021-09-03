import { DeliverySuccessProps } from "./Props";
import theme from "theme";
import {
    DeliverySuccessViewContainer,
    DeliverySuccessViewLink,
    DeliverySuccessViewMessage,
    DeliverySuccessViewThumbnail
} from "./Styled";

const DeliverySuccess:React.FC<DeliverySuccessProps> = ({ history }) =>(
    <DeliverySuccessViewContainer>
        <DeliverySuccessViewThumbnail 
            src={theme.icons.success}
            alt=""
        />
        <DeliverySuccessViewMessage>
            Your Delivery Has Been 
            Successfully Registered
        </DeliverySuccessViewMessage>
        <DeliverySuccessViewLink
            onClick={() => history.push("/")}
        >
            Go Back To Home Page
        </DeliverySuccessViewLink>
    </DeliverySuccessViewContainer>
);

export default DeliverySuccess;
