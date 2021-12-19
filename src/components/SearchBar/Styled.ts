import styled, { css } from "styled-components";
import theme from "theme";

export const SearchBarContainer = styled.div`
    width: 80%;
    max-width: 900px;
    margin-top: 20px;
`;
export const SearchBarInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const SearchInputContainer = styled.div`
    width: 76%;
    height: 45px;
    background: ${theme.colors.white};
    border-radius: 5px;
    padding: 8px 18px;
    padding-left: 22px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const SearchInput = styled.input`
    width: 80%;
    height: 100%;
    transform: translateY(2px);
    font-size: 14px;
`;
export const SearchInputIcon = styled.img`
    height: 22px;
    width: 22px;
`;

export const SearchButton = styled.button`
    height: 45px;
    width: 23%;
    background: ${theme.colors.white};
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    font-size: 14px;
    color: ${theme.colors.primary};
    font-weight: 500;
    padding-top: 2px;
`;

export const SearchBarFiltersContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    margin-top: 15px;
`;
export const SearchBarFilterContainer = styled.div`
    height: 50px;
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    padding-top: 3px;
`;

interface SearchBarFIlterIconProps {
    height?: String;
    width?: String
}

export const SearchBarFilterIcon = styled.img<SearchBarFIlterIconProps>`
    ${
        ({ height="25px", width="25px" }) =>{
            return css`
                height: ${height as string};
                width: ${width as string};
            `;
        }
    }
    margin-right: 5px;
`;

export const SearchBarFilterLabel = styled.h6`
    text-align: center;
    color: #8C8896;
    font-size: 14px;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    transform: translateY(1px);
    user-select: none;
`;
