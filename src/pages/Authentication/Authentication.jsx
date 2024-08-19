import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./Authenticationtyled";

export function Authentication() {
    return (
        <>
            <AuthContainer>
                <Section type='signin'>
                    <h2>Entrar</h2>

                    <form>
                        <Input type='email' placeholder='E-mail' name='email' /*register={inRegister}*/ />
                        <Input type='password' placeholder='Senha' name='password' /*register={inRegister}*/ />
                        <Button type='submit' text='Entrar' />
                    </form>
                </Section>

                <Section type='signup'>
                    <h2>Cadastrar</h2>

                    <form>
                        <Input type='text' placeholder='Nome' name='name' /*register={inRegister}*/ />
                        <Input type='text' placeholder='Username' name='username' /*register={inRegister}*/ />
                        <Input type='email' placeholder='E-mail' name='email' /*register={inRegister}*/ />
                        <Input type='password' placeholder='Senha' name='password' /*register={inRegister}*/ />
                        <Input type='text' placeholder='Avatar' name='avatar' /*register={inRegister}*/ />
                        <Input type='text' placeholder='Background' name='background' /*register={inRegister}*/ />
                        <Button type='submit' text='Entrar' />
                    </form>
                </Section>
            </AuthContainer>
        </>
    );
};