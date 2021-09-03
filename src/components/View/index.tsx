import DeliveryError from "./DeliveryError/DeliveryError";
import DeliverySuccess from "./DeliverySuccess/DeliverySuccess";
import { ViewProps } from "./Props";

const View:React.FC<ViewProps> = ({ type, history }) =>(
    <>
        {
            (type === "DELIVERY-ERROR") && <DeliveryError history={history} />
        }
        {
            (type === "DELIVERY-SUCCESS") && <DeliverySuccess history={history} />
        }
    </>
);

export default View;
