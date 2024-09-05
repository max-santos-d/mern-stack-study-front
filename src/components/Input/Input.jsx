import { useState } from "react";
import { InputContent, TextAreaSpace } from "./InputStyled";

export function Input({
    type,
    placeholder,
    name,
    register,
    isInput = true,
    value: initialValue,
    disabled = false
}) {

    console.log(disabled)

    const [value, setValue] = useState(initialValue)
    let inputProps = {
        type,
        placeholder,
        ...register(name),
        onChange: (e) => setValue(e.target.value),
        disabled,
    };

    if (value) inputProps.value = value;

    return (
        <>
            {
                isInput
                    ? <InputContent {...inputProps} />
                    : <TextAreaSpace {...inputProps} />
            }            
        </>
    )
}