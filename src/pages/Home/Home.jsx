import { useEffect, useState } from "react";

// @ts-ignore
import { Navbar } from "../../components/Navbar/Navbar";
import { Card } from '../../components/Card/Card';
import { HomeContainer } from "./Styled";
import { getAllPosts } from "../../services/postsServices.js";

export default function Home() {
    const [news, setNews] = useState([]);

    async function findAllPosts() {
        const response = await getAllPosts();
        setNews(response.data);
    };

    useEffect(() => {
        findAllPosts();
    }, []);

    console.log(news);

    return (
        <>
            <Navbar />
            <HomeContainer>
                {news.map((item) => (
                    <Card
                        key={item._id}
                        title={item.title}
                        text={item.text}
                        banner={item.banner}
                        likes={item.likes.length}
                        comments={item.comments.length}
                    />
                ))}
            </HomeContainer>
        </>
    )
};