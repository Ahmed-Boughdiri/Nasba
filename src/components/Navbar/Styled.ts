import styled from "styled-components";
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

export const NavbarLinks = styled.div`
    height: fit-content;
    display: flex;
    margin-left: auto;
    align-items: center;
    transform: translateY(3px);
`;

export const NavbarLink = styled.h6`
    text-align: center;
    color: ${theme.colors.secondary};
    margin: 0 10px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
`;

