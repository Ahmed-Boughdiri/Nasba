import styled from "styled-components";

import bg from "assets/banner-bg.jpg";

export const BannerContainer = styled.div`
    width: 100vw;
    height: 500px;
    background: url("${bg}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
`;

export const BannerWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.35);
`;

export const BannerTitle = styled.h6`
    width: 95%;
    max-width: 850px;
    text-align: center;
    color: #fff;
    font-weight: 800;
    font-size: 40px;
    line-height: 46px;
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
`;
