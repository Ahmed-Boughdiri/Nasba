import styled from "styled-components";
import theme from "theme";

import bg from "assets/banner-bg.jpg";

const BannerContainer = styled.div`
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

const Banner = () =>(
    <BannerContainer>
        
    </BannerContainer>
);

export default Banner;
