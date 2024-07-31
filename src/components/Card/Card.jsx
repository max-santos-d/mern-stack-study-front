import { CardContainer, CardContent, CardInteractions } from "./Styled";

export function Card({ news }) {
    return (
        <>
            <CardContainer>
                <CardContent>
                    <div>
                        <h2>{news.title}</h2>
                        <p>{news.text}</p>
                    </div>
                    <img src={news.banner} alt="Imagem" />
                </CardContent>

                <CardInteractions>
                    <div>
                        <i className="bi bi-heart"></i>
                        <span>{news.likes}</span>
                    </div>

                    <div>
                        <i className="bi bi-chat"></i>
                        <span>{news.comments}</span>
                    </div>
                </CardInteractions>
            </CardContainer>
        </>
    );
};