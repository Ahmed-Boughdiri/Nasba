import {
    InputComponent,
    InputContainer
} from "./Styled";
import { InputProps } from "./Props";

const Input:React.FC<InputProps> = ({ 
    placeholder="",
    dualInput
}) =>(
    <InputContainer dualInput={dualInput}>
        <InputComponent 
            placeholder={placeholder as string}
        />
    </InputContainer>
);

export default Input;
