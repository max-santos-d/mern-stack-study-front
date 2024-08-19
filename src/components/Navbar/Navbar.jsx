import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useForm } from 'react-hook-form';

import { Button, Nav, ImgNav, InputSpace } from './Styled';

export function Navbar() {
    const { register, handleSubmit, reset } = useForm();
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
            <Outlet />
        </>
    );
}