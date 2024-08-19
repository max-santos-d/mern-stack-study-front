import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Nav, ImgNav, InputSpace, ErrorSpan } from './Styled';

const searchSchema = z.object({    
    title: z
        .string()
        .nonempty({ message: 'A pesquisa não pode estar vazia' })
        .refine(value => !/^\s/.test(value), { message: 'A pesquisa não pode conter apenas espaços' }),
});

export function Navbar() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(searchSchema),
    });
    const navigate = useNavigate();

    function onSearch(data) {
        const { title } = data;
        title && navigate(`/search/${title}`);
        reset();
    };

    return (
        <>
            <Nav>
                <form onSubmit={handleSubmit(onSearch)}>
                    <InputSpace>

                        <button type='sunmit'>
                            <i className='bi bi-search'></i>
                        </button>

                        <input
                            {...register("title")}
                            type="text"
                            placeholder='Pesquisa'
                        />
                    </InputSpace>
                </form>

                <Link to='/'>
                    <ImgNav src={logo} alt="Logo Facebook" />
                </Link>

                <Button>Login</Button>
            </Nav>

            {errors.title && <ErrorSpan> {errors.title.message} </ErrorSpan>}

            <Outlet />
        </>
    );
}