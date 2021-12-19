import {
    BannerContainer,
    BannerSubTitle,
    BannerTitle,
    BannerWrapper,
    BannerButton,
    BannerButtonsContainer
} from "./Styled";
import { SearchBar } from "components";

const Banner = () =>(
    <BannerContainer>
        <BannerWrapper>
            <BannerTitle>
                rechercher des produits ou des marques
            </BannerTitle>
            {/* <BannerSubTitle>
                Your First Option When It Comes To Shopping Clothes Online, 
                And We Wish You Happy Shopping.
            </BannerSubTitle> */}
            {/* <BannerButtonsContainer>
                <BannerButton>
                    BECAME SELLER
                </BannerButton>
                <BannerButton>
                    OPEN AN ACCOUNT
                </BannerButton>
            </BannerButtonsContainer> */}
            <SearchBar />
        </BannerWrapper>
    </BannerContainer>
);

export default Banner;
