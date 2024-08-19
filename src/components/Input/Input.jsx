import { InputContent } from "./InputStyled";

export function Input({ type, placeholder, /*register,*/ name }) {
    return (
        <InputContent type={type} placeholder={placeholder} /*{...register(name)}*/ />
    );
}