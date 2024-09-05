// @ts-ignore -> ignorar os erros de uma linha abaixo
import { useEffect, useState } from "react";

import { Card } from '../../components/Card/Card';
import { HomeCards, HomeContainer, HomeHeader } from "./Styled";
import { getAllPosts, getTopPost } from "../../services/postsServices.js";


export default function Home() {
    const [posts, setPosts] = useState([]);
    const [topPost, setTopPost] = useState({});

    async function findPosts() {
        const postResponse = await getAllPosts();
        const topPostResponse = await getTopPost();

        setPosts(postResponse.data);
        setTopPost(topPostResponse.data.news);
    };

    useEffect(() => {
        findPosts();
    }, []);

    return (
        <>
            <HomeCards>
                <HomeHeader>
                    {
                        topPost && <Card
                            top='true'
                            title={topPost.title}
                            text={topPost.text}
                            banner={topPost.banner}
                            comments={topPost.comments}
                        />
                    }
                </HomeHeader>

                <HomeContainer>
                    {
                        posts && posts.map((item) => (
                            <Card
                                key={item._id}
                                id={item._id}
                                title={item.title}
                                text={item.text}
                                banner={item.banner}
                                comments={item.comments}
                            />
                        ))
                    }
                </HomeContainer>

                {!topPost && !posts.length && <span><h2>Sem posts Cadastrados!</h2></span>}
            </HomeCards>
        </>
    );
};