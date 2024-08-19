import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./Authenticationtyled";

export function Authentication() {
    const {
        register: registerSignin,
        handleSubmit: handleSubmitSignin,
        formState: { errors: errorsSignin }
    } = useForm();
    
    const {
        register: registerSingnup,
        handleSubmit: handleSubmitSingnup,
        formState: { errors: errorsSingnup }
    } = useForm();

    function inHandleSubmit(data) {
        console.log(data);
    };

    function upHandleSubmit(data) {
        console.log(data);
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
                        <Input
                            type='password'
                            placeholder='Senha'
                            name='password'
                            register={registerSignin}
                        />
                        <Button type='submit' text='Entrar' />
                    </form>
                </Section>

                <Section type='signup'>
                    <h2>Cadastrar</h2>

                    <form onSubmit={handleSubmitSingnup(upHandleSubmit)}>
                        <Input
                            type='text'
                            placeholder='Nome Completo'
                            name='name'
                            register={registerSingnup}
                        />
                        <Input
                            type='email'
                            placeholder='E-mail'
                            name='email'
                            register={registerSingnup}
                        />
                        <Input
                            type='password'
                            placeholder='Senha'
                            name='password'
                            register={registerSingnup}
                        />
                        <Button type='submit' text='Entrar' />
                    </form>
                </Section>
            </AuthContainer>
        </>
    );
};