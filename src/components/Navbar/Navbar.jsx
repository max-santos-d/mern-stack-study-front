import logo from '../../assets/logo.png';
import { Button, Nav, ImgNav, InputSpace } from './NavbarStyled';

export function Navbar() {
    return (
        <>
            <Nav>
                <InputSpace>
                    <i className='bi bi-search'></i>
                    <input type="text" placeholder='Pesquisa' />
                </InputSpace>

                <ImgNav src={logo} alt="Logo Facebook" />

                <Button>Login</Button>
            </Nav>
        </>
    );
}