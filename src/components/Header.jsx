import { Link } from 'react-router-dom';

import CrisLogo from '../assets/extended-logo.png';

import '../styles/header.css';
import BurgerButton from './BurgerButton/BurgerButton';
import { CartIcon } from './CartIcon/CartIcon';

const Header = () => {
    return (
        <header className='header-wrapper'>
            <BurgerButton />
            <div className='header-logo-container'>
                <Link to='/'>
                    <div className='header-logo-container'>
                        <img
                            className='header-logo'
                            src={CrisLogo}
                            alt='Cris Mendes Logo'
                        />
                    </div>
                </Link>
                <span className='logo-message'>Consultora De Imagem</span>
            </div>
            <CartIcon/>
        </header>
    );
};

export default Header;
