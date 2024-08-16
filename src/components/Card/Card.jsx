import { TextLimit } from "../TextLimit/TextLimit";
import { CardContainer, CardContent, CardInteractions } from "./Styled";

export function Card(props) {
    const { title, text, banner, likes, comments } = props;

    return (
        <>
            <CardContainer>
                <CardContent>
                    <div>
                        <h2>{title}</h2>
                        {banner.length && <img src={banner} alt="Imagem" />}
                        <TextLimit text={text} limit={100}/>
                    </div>
                </CardContent>

                <CardInteractions>
                    <div>
                        <i className="bi bi-heart"></i>
                        <span>{likes}</span>
                    </div>

                    <div>
                        <i className="bi bi-chat"></i>
                        <span>{comments}</span>
                    </div>
                </CardInteractions>
            </CardContainer>
        </>
    );
};