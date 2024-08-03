import { Paragraph } from "./Styled";

export function TextLimit (props) {
    const {text, limit} = props;
    const textLimited = 
        text.length > limit ? `${text.substring(0, limit)} ...` : text;

    return (
        <Paragraph>{textLimited}</Paragraph>
    );
};