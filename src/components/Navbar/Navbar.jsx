import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Nav, ImgNav, InputSpace, ErrorSpan } from './Styled';
import { Button } from '../Button/Button';
import { searchSchema } from '../../schemas/navBarSchema';



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
        navigate(`/search/${title}`);
        reset();
    };

    function goAuth() {
        navigate('/auth');
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

                <Link to='/auth'>
                    <Button onClick={goAuth} type='button' text='Entrar' >Login</Button>
                </Link>

            </Nav>

            {errors.title && <ErrorSpan> {errors.title.message} </ErrorSpan>}

            <Outlet />
        </>
    );
}