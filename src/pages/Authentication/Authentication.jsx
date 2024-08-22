import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from 'js-cookie'
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./Authenticationtyled";
import { signinSchema } from "../../schemas/signinSchema";
import { signupSchema } from "../../schemas/signupSchema";
import { ErrorSpan } from "../../components/Navbar/Styled";
import { signin, signup } from "../../services/userServices";
import { useNavigate } from "react-router-dom";

export function Authentication() {
    const {
        register: registerSignin,
        handleSubmit: handleSubmitSignin,
        formState: { errors: errorsSignin }
    } = useForm({ resolver: zodResolver(signinSchema) });

    const {
        register: registerSignup,
        handleSubmit: handleSubmitSingnup,
        formState: { errors: errorsSingnup }
    } = useForm({ resolver: zodResolver(signupSchema) });

    async function inHandleSubmit(data) {
        try {
            const response = (await signin(data)).data;
            Cookies.set('token', response.token, { expires: 1 });
            navigate('/')
        } catch (err) {
            console.log(err);
        };

    };

    const navigate = useNavigate();

    async function upHandleSubmit(data) {
        try {
            const response = (await signup(data)).data.response;
            Cookies.set('token', response.token, { expires: 1 });
            navigate('/');
        } catch (err) {
            console.log(err);
        };
    };

    return (
        <>
            <AuthContainer>
                <Section type='signin'>
                    <h2>Entrar</h2>

                    <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
                        <Input
                            type='email'
                            placeholder='E-mail'
                            name='email'
                            register={registerSignin}
                        />
                        {errorsSignin.email && <ErrorSpan> {errorsSignin.email.message} </ErrorSpan>}

                        <Input
                            type='password'
                            placeholder='Senha'
                            name='password'
                            register={registerSignin}
                        />
                        <Button type='submit' text='Entrar' />
                        {errorsSignin.password && <ErrorSpan> {errorsSignin.password.message} </ErrorSpan>}
                    </form>
                </Section>

                <Section type='signup'>
                    <h2>Cadastrar</h2>

                    <form onSubmit={handleSubmitSingnup(upHandleSubmit)}>
                        <Input
                            type='text'
                            placeholder='Nome Completo'
                            name='name'
                            register={registerSignup}
                        />
                        {errorsSingnup.name && <ErrorSpan> {errorsSingnup.name.message} </ErrorSpan>}

                        <Input
                            type='email'
                            placeholder='E-mail'
                            name='email'
                            register={registerSignup}
                        />
                        {errorsSingnup.email && <ErrorSpan> {errorsSingnup.email.message} </ErrorSpan>}

                        <Input
                            type='password'
                            placeholder='Senha'
                            name='password'
                            register={registerSignup}
                        />
                        {errorsSingnup.password && <ErrorSpan> {errorsSingnup.password.message} </ErrorSpan>}

                        <Input
                            type='password'
                            placeholder='Senha'
                            name='confirmPassword'
                            register={registerSignup}
                        />
                        {errorsSingnup.confirmPassword && <ErrorSpan> {errorsSingnup.confirmPassword.message} </ErrorSpan>}

                        <Button type='submit' text='Entrar' />
                    </form>
                </Section>
            </AuthContainer>
        </>
    );
};