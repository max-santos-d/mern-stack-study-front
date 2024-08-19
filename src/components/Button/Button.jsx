import { Link } from "react-router-dom";
import { ButtonContent } from "./ButtonStyled";

export function Button({ type, text }) {
    return (
        <ButtonContent type={type}> {text} </ButtonContent>
    )
}