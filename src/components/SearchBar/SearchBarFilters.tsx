import { SearchBarFiltersContainer } from "./Styled";
import Filter from "./Filter";

import locationIcon from "assets/location.png";
import budgetIcon from "assets/budget.png";
import qualityIcon from "assets/quality.png";
import shopIcon from "assets/shop.svg";
import genreIcon from "assets/genre.svg";

const SearchBarFilters = () =>(
    <SearchBarFiltersContainer>
        <Filter 
            label="LOCATION"
            icon={locationIcon}
        />
        <Filter 
            label="BUDGET"
            icon={budgetIcon}
            height="32px"
            width="32px"
        />
        <Filter 
            label="QUALITY"
            icon={qualityIcon}
        />
        <Filter 
            label="SHOP"
            icon={shopIcon}
            height="30px"
            width="30px"
        />
        <Filter 
            label="GENRE"
            icon={genreIcon}
            height="32px"
            width="32px"
        />
    </SearchBarFiltersContainer>
);

export default SearchBarFilters;
