import styled from "styled-components";
import { Title } from "components";

export const PolicyContainer = styled.div`
    width: 100%;
    max-width: 900px;
    display: block;
    margin: 20px auto 80px;
    @media only screen and (max-width: 920px) {
        box-sizing: border-box;
        padding: 0 20px;
    }
`;

export const PolicyTitle = styled(Title)`
    text-align: center;
    font-size: 30px;
    margin-top: 40px;
    margin-bottom: 30px;
    font-weight: 800;
`;

export const ParagraphContainer = styled.div`
    display: block;
    margin-bottom: 20px;
`;

export const ParagraphTitle = styled(Title)`
    text-align: left;
    font-size: 25px;
    margin-bottom: 8px;
`;

export const ParagraphText = styled.p`
    text-align: left;
    font-size: 17px;
`;

