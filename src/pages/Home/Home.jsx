// @ts-ignore -> ignorar os erros de uma linha abaixo
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'

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

        console.log(posts);
        console.log(topPost);
    };

    useEffect(() => {
        findPosts();
        console.log(Cookies.get('token'));
    }, []);

    return (
        <>
            <HomeCards>
                <HomeHeader>
                    {
                        topPost && <Card
                            top
                            title={topPost.title}
                            text={topPost.text}
                            banner={topPost.banner}
                            likes={topPost.likes}
                            comments={topPost.comments}
                        />
                    }
                </HomeHeader>

                <HomeContainer>
                    {
                        posts && posts.map((item) => (
                            <Card
                                key={item._id}
                                title={item.title}
                                text={item.text}
                                banner={item.banner}
                                likes={item.likes}
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