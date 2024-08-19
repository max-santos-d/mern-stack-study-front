import { InputContent } from "./InputStyled";

export function Input({ type, placeholder, name, register }) {
    return (
        <InputContent type={type} placeholder={placeholder} {...register(name)} />
    );
}