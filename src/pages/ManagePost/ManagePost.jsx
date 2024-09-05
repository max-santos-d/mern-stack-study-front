import { useNavigate, useParams } from "react-router-dom";
import { AddPostContainer } from "./ManagePostStyle";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema } from "../../schemas/postSchema";
import { Input } from "../../components/Input/Input";
import { ErrorSpan } from "../../components/Navbar/Styled";
import { createPost, deletePost, editPost, getPostById } from "../../services/postsServices";
import { Button } from "../../components/Button/Button";
import { useEffect } from "react";

export function ManagePost() {
    const { action, id } = useParams();

    const {
        register: registerPost,
        handleSubmit: handleSubmitPost,
        formState: { errors: errorsPost },
        setValue,
    } = useForm({ resolver: zodResolver(postSchema) });
    const navigate = useNavigate();

    async function registerPostSubmit(data) {
        try {
            await createPost(data);
            navigate('/profile');
        } catch (err) {
            console.log(err);
        };
    };

    async function editPostSubmit(data) {
        try {
            await editPost(data, id);
            navigate('/profile');
        } catch (err) {
            console.log(err);
        };
    };

    async function deletePostSubmit() {
        try {
            await deletePost(id);
            navigate('/profile');
        } catch (err) {
            console.log(err);
        };
    }

    async function findPostById() {
        try {
            const { data } = await getPostById(id);

            setValue('title', data.news.title);
            setValue('banner', data.news.banner);
            setValue('text', data.news.text);
        } catch (err) {
            console.log(err);
        };
    };

    useEffect(() => {
        if (action === 'edit' || action === 'delete') findPostById(id);
    });

    return (
        <>
            <AddPostContainer>
                <h2>
                    {action === 'add'
                        ? 'Adicionar'
                        : action === 'edit'
                            ? 'Editar'
                            : action === 'delete'
                                ? 'Apagar'
                                : 'Outro'
                    }
                    {' '}
                    Noticia
                </h2>

                <form onSubmit={
                    action === 'add'
                        ? handleSubmitPost(registerPostSubmit)
                        : action === 'edit'
                            ? handleSubmitPost(editPostSubmit)
                            : action === 'delete'
                                ? handleSubmitPost(deletePostSubmit)
                                : navigate('/profile')
                }>
                    <Input
                        type='text'
                        placeholder='Título'
                        name='title'
                        register={registerPost}
                        disabled={action === 'delete' ? true : undefined}
                    />
                    {errorsPost.title && (
                        <ErrorSpan>{errorsPost.title.message}</ErrorSpan>
                    )}

                    <Input
                        type='text'
                        placeholder='Link da Imagem'
                        name='banner'
                        register={registerPost}
                        disabled={action === 'delete' ? true : undefined}
                    />
                    {errorsPost.title && (
                        <ErrorSpan>{errorsPost.title.message}</ErrorSpan>
                    )}

                    <Input
                        type='text'
                        placeholder='Texto'
                        name='text'
                        register={registerPost}
                        isInput={false}
                        disabled={action === 'delete' ? true : undefined}
                    />
                    {errorsPost.title && (
                        <ErrorSpan>{errorsPost.title.message}</ErrorSpan>
                    )}

                    <Button type='submit' text={
                        action === 'add'
                            ? 'Adicionar'
                            : action === 'edit'
                                ? 'Editar'
                                : action === 'delete'
                                    ? 'Apagar'
                                    : 'Outro'
                    } />
                </form>
            </AddPostContainer>
        </>
    );
};