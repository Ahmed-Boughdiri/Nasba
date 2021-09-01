
export interface InputContainerProps {
    dualInput?: Boolean
}

export interface InputProps {
    placeholder?: String,
    dualInput?: Boolean,
    value?: String,
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void
}

