import { 
    SearchBarContainer
} from "./Styled";
import SearchBarInput from "./SearchBarInput";
import SearchBarFilters from "./SearchBarFilters";

const SearchBar = () =>(
    <SearchBarContainer>
        <SearchBarInput />
        <SearchBarFilters />
    </SearchBarContainer>
);

export default SearchBar;