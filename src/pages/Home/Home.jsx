import { useEffect, useState } from "react";

// @ts-ignore
import { Navbar } from "../../components/Navbar/Navbar";
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
                    <Card
                        top
                        title={topPost.title}
                        text={topPost.text}
                        banner={topPost.banner}
                        likes={topPost.likes}
                        comments={topPost.comments}
                    />
                </HomeHeader>

                <HomeContainer>
                    {posts.map((item) => (
                        <Card
                            key={item._id}
                            title={item.title}
                            text={item.text}
                            banner={item.banner}
                            likes={item.likes}
                            comments={item.comments}
                        />
                    ))}
                </HomeContainer>
            </HomeCards>

        </>
    );
};