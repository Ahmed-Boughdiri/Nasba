import {
    InputComponent,
    InputContainer
} from "./Styled";
import { InputProps } from "./Props";

const Input:React.FC<InputProps> = ({ 
    placeholder="",
    dualInput,
    value="",
    onChange
}) =>(
    <InputContainer dualInput={dualInput}>
        <InputComponent 
            placeholder={placeholder as string}
            value={value as string}
            onChange={onChange}
        />
    </InputContainer>
);

export default Input;
