import {
    NavbarBrand,
    NavbarContainer,
    NavbarLink,
    NavbarLinks,
    NavbarWrapper,
    NavbarLogo,
    NavbarMenu,
    NavbarMenuIcon
} from "./Styled";
import { useState } from "react";
import { NavbarProps } from "./Porps";

const Navbar:React.FC<NavbarProps> = ({ history }) =>{
    const [navbarLinksVisible, setNavbarLinksVisible] = useState(false);
    const handleNavbarMenuClick = () => 
        setNavbarLinksVisible(prevState => !prevState);
    return (
        <NavbarContainer>
            <NavbarWrapper>
                <NavbarBrand>
                    <NavbarLogo />
                    <h6>asba</h6>
                </NavbarBrand>
                <NavbarLinks visible={navbarLinksVisible}>
                    <NavbarLink
                        onClick={() => history.push("/")}
                    >
                        Home
                    </NavbarLink>
                    <NavbarLink
                        onClick={() => history.push("/cart")}
                    >
                        Cart
                    </NavbarLink>
                    <NavbarLink
                        onClick={() => history.push("/policy")}
                    >
                        Policy
                    </NavbarLink>
                </NavbarLinks>
                <NavbarMenu onClick={handleNavbarMenuClick}>
                    <NavbarMenuIcon />
                </NavbarMenu>
            </NavbarWrapper>
        </NavbarContainer>
    );
}

export default Navbar;
