import './Navbar.css';
import logo from '../../assets/logo.png';

export function Navbar() {
    return (
        <>
            <nav>
                <div className="input-search-space">
                    <i className='bi bi-search'></i>
                    <input type="text" placeholder='Pesquisa' />
                </div>

                <img src={logo} alt="Logo Facebook" />

                <button>Login</button>
            </nav>
        </>
    );
}