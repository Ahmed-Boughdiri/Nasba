import styled from "styled-components";
import theme from "theme";
import { Input, Button } from "components";

export const DeliveryContainer = styled.div`
    height: calc(100vh - 60px);
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const DeliveryWrapper = styled.div`
    height: 100%;
    width: 100%;
    max-width: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media only screen and (max-width: 550px) {
        box-sizing: border-box;
        padding: 0 20px;
    }
`;

export const DeliveryTotalPrice = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid #919191;
    &>h6 {
        text-align: left;
        color: #919191;
        font-size: 20px;
        font-weight: 600;
    }
`;

export const DeliveryForm = styled.div`
    display: block;
    width: 100%;
    margin-top: 15px;
    &>h6 {
        text-align: center;
        color: ${theme.colors.secondary};
        font-size: 25px;
        font-weight: 800;
        margin-bottom: 15px;
    }
`;

export const DeliveryFormInputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 550px) {
        display: block;
    }
`;

export const DeliveryFormInput = styled(Input)`
    width: 100%;
`;

export const DeliveryFormButton = styled(Button)`
    width: 100%;
    font-size: 18px;
    height: 40px;
`;
