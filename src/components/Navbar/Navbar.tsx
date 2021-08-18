import {
    NavbarBrand,
    NavbarContainer,
    NavbarLink,
    NavbarLinks,
    NavbarWrapper,
    NavbarLogo
} from "./Styled";

const Navbar = () =>(
    <NavbarContainer>
        <NavbarWrapper>
            <NavbarBrand>
                <NavbarLogo />
                <h6>asba</h6>
            </NavbarBrand>
            <NavbarLinks>
                <NavbarLink>Home</NavbarLink>
                <NavbarLink>Shop</NavbarLink>
                <NavbarLink>Policy</NavbarLink>
            </NavbarLinks>
        </NavbarWrapper>
    </NavbarContainer>
);

export default Navbar;
