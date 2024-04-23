import { Link } from 'react-router-dom';

import CrisLogo from '../assets/crisMendes.png';
import Navbar from './Navbar';

import '../styles/header.css';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <Navbar />
            <Link to='/'>
                <img
                    src={CrisLogo}
                    alt='Cris Mendes Logo'
                    className='cris-mendes-header-logo'
                />
            </Link>
        </div>
    );
};

export default Header;
