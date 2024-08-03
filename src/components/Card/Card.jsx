import { CardContainer, CardContent, CardInteractions } from "./Styled";

export function Card(props) {
    const { title, text, banner, likes, comments } = props;

    return (
        <>
            <CardContainer>
                <CardContent>
                    <div>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                    <img src={banner} alt="Imagem" />
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