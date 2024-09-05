import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { PofileIconEdit, ProfileActions, ProfileAddPost, ProfileBackground, ProfileComponent, ProfileHeader, ProfilePosts, ProfileUser, ProfileUserAvatar } from "./ProfileStyled";
import { getAllPostsByUser } from "../../services/postsServices";
import { Card } from '../Card/Card';
import { Link } from "react-router-dom";

export function Profile() {
    const { user } = useContext(UserContext);
    const [post, setPost] = useState([]);

    async function showPostUser() {
        const response = await getAllPostsByUser(user._id);
        setPost(response.data);
    };

    useEffect(() => {
        showPostUser();
    }, [user]);

    return (
        <>
            <ProfileComponent>
                <ProfileHeader>
                    <PofileIconEdit>
                        <i className="bi bi-pencil-square"></i>
                    </PofileIconEdit>

                    <ProfileBackground src={user.background} alt='' />

                    <ProfileUser>
                        <ProfileUserAvatar src={user.avatar} alt='Foto do usuário' />
                        <h2>{user.name}</h2>
                        <h3>@{user.username}</h3>
                    </ProfileUser>

                    <ProfileActions>
                        <Link to={'/manage-post/add/add'}>
                            <ProfileAddPost>
                                <i className="bi bi-plus-circle"></i>
                            </ProfileAddPost>
                        </Link>
                    </ProfileActions>
                </ProfileHeader>

                <ProfilePosts>
                    {!post.length && <h3>Nenhum Post encontrado</h3>}

                    {post.length && post.map((post) => {
                        return (
                            <Card
                                key={post._id}
                                id={post._id}
                                title={post.title}
                                text={post.text}
                                banner={post.banner}
                                likes={post.likes}
                                comments={post.comments}
                                actions={true}
                            />
                        )
                    })}
                </ProfilePosts>
            </ProfileComponent>
        </>
    );
};