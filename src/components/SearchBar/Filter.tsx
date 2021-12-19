import {
    SearchBarFilterContainer,
    SearchBarFilterIcon,
    SearchBarFilterLabel
} from "./Styled";

interface FilterProps {
    label: String,
    icon: String,
    height?: String,
    width?: String
}

const Filter:React.FC<FilterProps> = ({ 
    label, 
    icon,
    height,
    width
}) =>(
    <SearchBarFilterContainer>
        <SearchBarFilterIcon 
            src={icon as string} 
            height={height as string}
            width={width as string}
        />
        <SearchBarFilterLabel>
            { label }
        </SearchBarFilterLabel>
    </SearchBarFilterContainer>
);

export default Filter;
