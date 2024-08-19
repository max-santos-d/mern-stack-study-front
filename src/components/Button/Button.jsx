import { Link } from "react-router-dom";
import { ButtonContent } from "./ButtonStyled";

export function Button({ type, text, toLink }) {
    return (
        <Link to={toLink}>
            <ButtonContent type={type}> {text} </ButtonContent>
        </Link>
    )
}