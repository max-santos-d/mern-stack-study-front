import { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Cookies from 'js-cookie'

import { Nav, ImgNav, InputSpace, ErrorSpan, UserLogged } from './Styled';
import logo from '../../assets/logo.png';
import { Button } from '../Button/Button';
import { searchSchema } from '../../schemas/navBarSchema';
import { userLogged } from '../../services/userServices';
import { UserContext } from '../../Context/UserContext';



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
    const { user, setUser } = useContext(UserContext);

    function onSearch(data) {
        const { title } = data;
        navigate(`/search/${title}`);
        reset();
    };

    async function findUserLogged() {
        try {
            const response = await userLogged();
            setUser(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    function signout() {
        Cookies.remove('token');
        setUser(undefined);
        navigate('/');
    };

    useEffect(() => {
        if (Cookies.get('token')) findUserLogged();
    }, []);

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
                    <ImgNav src={logo} alt="Logo" />
                </Link>

                {user ? (
                    <UserLogged>
                        <Link to={'/profile'} style={{textDecoration: 'none'}}>
                            <h2>Bem vindo(a) {user.name}</h2>
                        </Link>

                        <i onClick={signout} className='bi bi-box-arrow-right'></i>
                    </UserLogged>
                ) : (
                    <Link to='/auth'>
                        <Button onClick={goAuth} type='button' text='Entrar' >Login</Button>
                    </Link>
                )}
            </Nav>

            {errors.title && <ErrorSpan> {errors.title.message} </ErrorSpan>}

            <Outlet />
        </>
    );
}