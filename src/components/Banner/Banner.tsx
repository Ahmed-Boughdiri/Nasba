import {
    BannerContainer,
    BannerSubTitle,
    BannerTitle,
    BannerWrapper,
    BannerButton,
    BannerButtonsContainer
} from "./Styled";

const Banner = () =>(
    <BannerContainer>
        <BannerWrapper>
            <BannerTitle>
                Welcome To Nasba.tn E-coomerce Website
            </BannerTitle>
            <BannerSubTitle>
                Your First Option When It Comes To Shopping Clothes Online, 
                And We Wish You Happy Shopping.
            </BannerSubTitle>
            <BannerButtonsContainer>
                <BannerButton>
                    BECAME SELLER
                </BannerButton>
                <BannerButton>
                    OPEN AN ACCOUNT
                </BannerButton>
            </BannerButtonsContainer>
        </BannerWrapper>
    </BannerContainer>
);

export default Banner;
