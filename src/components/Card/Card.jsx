import { TextLimit } from "../TextLimit/TextLimit";
import { CardContainer, CardContent, CardInfo, CardInteractions } from "./Styled";

export function Card(props) {
    const { top, title, text, banner, likes, comments } = props;

    return (
        <>
            <CardContainer top={top}>
                <CardContent>
                    
                    {<img src={banner} alt="Imagem" />}

                    <div>
                        <CardInfo>
                            <h2>{title}</h2>
                            <TextLimit text={text} limit={200} />
                        </CardInfo>

                        <CardInteractions>
                            <section>
                                <i className="bi bi-heart"></i>
                                <span>{likes?.length}</span>
                            </section>

                            <section>
                                <i className="bi bi-chat"></i>
                                <span>{comments?.length}</span>
                            </section>
                        </CardInteractions>
                    </div>
                </CardContent>
            </CardContainer>
        </>
    );
};