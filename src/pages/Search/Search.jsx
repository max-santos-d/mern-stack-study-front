import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { searchPost } from "../../services/postsServices";
import { SearchPosts, SectionSearch, TextResults } from "./SearchStyled";
import { Card } from "../../components/Card/Card";

export function Search() {
    const { title } = useParams();
    const [posts, setPosts] = useState([]);

    async function search() {
        try {
            const postsResponse = await searchPost(title);
            setPosts(postsResponse.data.result);
        } catch (err) {
            console.log(err);
            setPosts([]);
        };
    };

    useEffect(() => {
        search();
    }, [title]);

    console.log(posts);

    return (
        <>
            <SectionSearch>

                <TextResults>
                    <span>
                        {posts.length
                            ? `Resultado: ${posts.length} ${posts.length > 1 ? 'Posts Encontrados' : 'Post Encontrado'}`
                            : `Sem resultado para: "${title}"`
                        };
                    </span>
                </TextResults>

                <SearchPosts>
                    {posts.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            text={item.text}
                            banner={item.banner}
                            likes={item.likes}
                            comments={item.comments}
                        />
                    ))}
                </SearchPosts>
            </SectionSearch>
        </>
    );
};