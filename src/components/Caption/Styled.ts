import styled from "styled-components";

export const CaptionContainer = styled.div`
    width: 100vw;
    height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #d6d6d6;
    display: flex;
    align-items: center;
    justify-content: center;
    &>h6 {
        text-align: center;
        color: #666666;
        font-size: 16px;
        transform: translateY(20%);
    }
    @media only screen and (max-width: 575px) {
        &>h6 {
            font-size: 14px;
        }
    }
    @media only screen and (max-width: 500px) {
        &>h6 {
            font-size: 13px;
        }
    }
    @media only screen and (max-width: 450px) {
        &>h6 {
            font-size: 12px;
        }
    }
`;
