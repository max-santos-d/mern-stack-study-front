import { useNavigate, useParams } from "react-router-dom";
import { AddPostContainer } from "./ManagePostStyle";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema } from "../../schemas/postSchema";
import { Input } from "../../components/Input/Input";
import { ErrorSpan } from "../../components/Navbar/Styled";
import { createPost } from "../../services/postsServices";
import { Button } from "../../components/Button/Button";

export function ManagePost() {
    const { action } = useParams();

    const {
        register: registerPost,
        handleSubmit: handleSubmitPost,
        formState: { errors: errorsPost },
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
        /*
        try {
            await editPost(data);
            navigate('/profile');
        } catch (err) {
            console.log(err);
        };
        */
    };

    return (
        <>
            <AddPostContainer>
                <h2>{action == 'add' ? 'Adicionar' : 'Editar'} Noticia</h2>
                <form onSubmit={
                    action == 'add'
                        ? handleSubmitPost(registerPostSubmit)
                        : handleSubmitPost(editPostSubmit)
                }>
                    <Input
                        type='text'
                        placeholder='Título'
                        name='title'
                        register={registerPost}
                        value={action !== 'add' ? 'title' : ''}
                    />
                    {errorsPost.title && (
                        <ErrorSpan>{errorsPost.title.message}</ErrorSpan>
                    )}

                    <Input
                        type='text'
                        placeholder='Link da Imagem'
                        name='banner'
                        register={registerPost}
                        value={action !== 'add' ? 'banner link' : ''}
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
                        value={action !== 'add' ? 'Text Post' : ''}
                    />
                    {errorsPost.title && (
                        <ErrorSpan>{errorsPost.title.message}</ErrorSpan>
                    )}

                    <Button type='submit' text={action === 'add' ? 'Adicionar' : 'Atualizar'} />

                </form>
            </AddPostContainer>
        </>
    );
};