import {
    SearchBarInputContainer,
    SearchInputContainer,
    SearchInput,
    SearchInputIcon,
    SearchButton
} from "./Styled";

import searchIcon from "assets/search.svg";

const SearchBarInput = () =>(
    <SearchBarInputContainer>
        <SearchInputContainer>
            <SearchInput placeholder="Rechercher des produits ou des marques..." />
            <SearchInputIcon src={searchIcon} />
        </SearchInputContainer>
        <SearchButton>
            SUBMIT SEARCH
        </SearchButton>
    </SearchBarInputContainer>
);

export default SearchBarInput;
