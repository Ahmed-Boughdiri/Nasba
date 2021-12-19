import {
    NavbarBrand,
    NavbarContainer,
    NavbarLink,
    NavbarLinks,
    NavbarWrapper,
    NavbarLogo,
    NavbarMenu,
    NavbarMenuIcon,
    NavbarOptions,
    NavbarOption
} from "./Styled";
import { useState } from "react";
import { NavbarProps } from "./Porps";

import cartIcon from "assets/cart.png";
import InfoIcon from "assets/info.svg";
import frenshFlag from "assets/francais.svg";
import downArrow from "assets/down-arrow.svg";

const Navbar:React.FC<NavbarProps> = ({ history }) =>{
    const [navbarLinksVisible, setNavbarLinksVisible] = useState(false);
    const handleNavbarMenuClick = () => 
        setNavbarLinksVisible(prevState => !prevState);
    return (
        <NavbarContainer>
            <NavbarWrapper>
                <NavbarBrand onClick={() => history.push("/")}>
                    {/* <NavbarLogo /> */}
                    <h6>Nasba</h6>
                </NavbarBrand>
                <NavbarLinks visible={navbarLinksVisible}>
                    <NavbarLink
                        onClick={() => history.push("/")}
                    >
                        Home
                    </NavbarLink>
                    <NavbarLink
                        onClick={() => window.open("/#/register")}
                    >
                        Register
                    </NavbarLink>
                    <NavbarLink
                        onClick={() => history.push("/login")}
                    >
                        Login
                    </NavbarLink>
                </NavbarLinks>
                <NavbarOptions>
                    <NavbarOption onClick={() => history.push("/cart")}>
                        <img
                            alt=""
                            src={cartIcon}
                        />
                    </NavbarOption>
                    <NavbarOption 
                        languageOption 
                        height="23px" 
                        width="23px"
                    >
                        <img
                            alt=""
                            src={frenshFlag}
                        />
                        <img
                            alt=""
                            src={downArrow}
                            id="down-arrow"
                        />
                    </NavbarOption>
                    <NavbarOption 
                        height="22px" 
                        width="22px"
                        onClick={() => history.push("/policy")}
                    >
                        <img
                            alt=""
                            src={InfoIcon}
                        />
                    </NavbarOption>
                </NavbarOptions>
                <NavbarMenu onClick={handleNavbarMenuClick}>
                    <NavbarMenuIcon />
                </NavbarMenu>
            </NavbarWrapper>
        </NavbarContainer>
    );
}

export default Navbar;
