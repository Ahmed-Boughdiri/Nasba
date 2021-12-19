import styled from "styled-components";
import { Button } from "components";

import bg from "assets/banner-bg.png";
import theme from "theme";

export const BannerContainer = styled.div`
    width: 100vw;
    min-height: calc(100vh - 110px);
    max-height: 800px;
    background: url(https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=auto);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
`;

export const BannerWrapper = styled.div`
    height: calc(100vh - 110px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(
            180deg,
            rgba(0,0,0,0.5) 0%,
            rgba(0,0,0,0.5) 100%
        ),
        linear-gradient(
            180deg,
            rgba(0,0,0,0.5) 0%,
            rgba(0,0,0,0) 100%
        );
`;

export const BannerTitle = styled.h6`
    width: 90%;
    max-width: 600px;
    text-align: center;
    color: #fff;
    font-weight: bolder;
    font-size: 35px;
    line-height: 46px;
    text-transform: uppercase;
    @media only screen and (max-width: 700px) {
        font-size: 32px;
    }
    @media only screen and (max-width: 575px) {
        font-size: 28px;
    }
    @media only screen and (max-width: 500px) {
        font-size: 25px;
        line-height: 32px;
    }
`;

export const BannerSubTitle = styled.p`
    text-align: center;
    width: 95%;
    max-width: 600px;
    color: #fff;
    font-size: 28px;
    font-weight: 500;
    line-height: 35px;
    margin-top: 5px;
    @media only screen and (max-width: 700px) {
        font-size: 25px;
    }
    @media only screen and (max-width: 575px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 500px) {
        font-size: 18px;
        line-height: 22px;
    }
`;

export const BannerButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3px;
    @media only screen and (max-width: 500px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const BannerButton = styled.button`
    background: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    width: 250px;
    height: 50px;
    border: 0;
    font-weight: 800;
    border-radius: 3px;
    padding: 11px 28px;
    &:nth-child(2) {
        margin-left: 20px;
    }
    @media only screen and (max-width: 500px) {
        width: 90%;
        &:nth-child(2) {
            margin-left: 0;
            margin-top: 7px;
        }
    }
`;
