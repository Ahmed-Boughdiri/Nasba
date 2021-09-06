import styled, { css } from "styled-components";
import { Container } from "react-bootstrap";
import theme from "theme";

import logo from "assets/logo.png";

export const NavbarContainer = styled.div`
    width: 100vw;
    height: 60px;
    background-color: ${theme.colors.primary};
`;

export const NavbarWrapper = styled(Container)`
    height: 100%;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 575px) {
        box-sizing: border-box;
        padding: 0 20px;
    }
`;

export const NavbarBrand = styled.div`
    height: 40px;
    display: flex;
    align-items: flex-end;  
    &>h6 {
        text-align: left;
        color: ${theme.colors.secondary};
        font-size: 23px;
        margin-left: 5px;
        font-weight: bolder;
        transform: translateY(6px);
    }
`;

export const NavbarLogo = styled.img.attrs(_ =>({
    src: logo,
    alt: ""
}))`
    height: 38px;
`;

interface NavbarLinksProps {
    visible?: Boolean
}

export const NavbarLinks = styled.div<NavbarLinksProps>`
    height: fit-content;
    display: flex;
    margin-left: auto;
    align-items: center;
    transform: translateY(3px);
    @media only screen and (max-width: 600px) {
        width: 100vw;
        height: 90px;
        justify-content: space-around;
        flex-direction: column;
        background-color: ${theme.colors.primary};
        position: absolute;
        top: 57px;
        left: 0;
        z-index: 990;
        box-sizing: border-box;
        padding-bottom: 10px;
        ${
            ({ visible }) =>{
                return css`
                    display: ${visible ? "flex" : "none"};
                `;
            }
        }
    }
`;

export const NavbarLink = styled.h6`
    text-align: center;
    color: ${theme.colors.secondary};
    margin: 0 10px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
`;

export const NavbarMenu = styled.div`
    height: 40px;
    width: 40px;
    display: none;
    cursor: pointer;
    @media only screen and (max-width: 600px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
    }
`;
export const NavbarMenuIcon = styled.img.attrs(_ =>({
    src: theme.icons.menu
}))`
    height: 35px;
    width: 35px;
    transform: translateY(2px);
`;

