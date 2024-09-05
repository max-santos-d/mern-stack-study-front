import { Link } from "react-router-dom";
import { TextLimit } from "../TextLimit/TextLimit";
import { CardActions, CardContainer, CardContent, CardInfo, CardInteractions } from "./Styled";
import { getPostById, likePost } from "../../services/postsServices";
import { useEffect, useState } from "react";

export function Card({
    id,
    top,
    title,
    text,
    banner,
    comments,
    actions = false,
}) {
    const [likes, setLikes] = useState([]);
    const [likeMe, setLikesMe] = useState([]);

    async function likeFunc() {
        try {
            await likePost(id);
            if(likes.length !== 0) getlike();
            console.log(likes)
        } catch (err) {
            console.log(err);
        }
    };

    async function getlike() {
        try {
            const { data } = await getPostById(id);
            if(data.length !== 0 && likes.length !== 0) setLikes(data.news.likes);
        } catch (err) {
            console.log(err);
        };
    };

    
    useEffect(() => {
        console.log(likes);
        getlike();
    }, []);

    return (
        <>
            <CardContainer top={top}>
                <CardContent>

                    {!top && <img src={banner} alt="Imagem" />}

                    <CardActions>
                        <Link to={`/manage-post/edit/${id}`} style={{ textDecoration: 'none' }}>
                            {actions && <i className="bi bi-pencil-square"></i>}
                        </Link>

                        <Link to={`/manage-post/delete/${id}`} style={{ textDecoration: 'none' }}>
                            {actions && <i className="bi bi-trash3"></i>}
                        </Link>
                    </CardActions>

                    <div>
                        <CardInfo>
                            <h2>{title}</h2>
                            <TextLimit text={text} limit={200} />
                        </CardInfo>

                        {!top && <CardInteractions>
                            <section>
                                <i onClick={likeFunc} className="bi bi-heart"></i>
                                <span>{likes && likes?.length}</span>
                            </section>

                            <section>
                                <i className="bi bi-chat"></i>
                                <span>{comments?.length}</span>
                            </section>
                        </CardInteractions>}
                    </div>
                </CardContent>
            </CardContainer>
        </>
    );
};