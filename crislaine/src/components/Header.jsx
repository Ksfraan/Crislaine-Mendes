import CrisLogo from '../assets/crisMendes.png';
import Navbar from './Navbar';

import '../styles/header.css';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <Navbar />
            <img
                src={CrisLogo}
                alt='Cris Mendes Logo'
                className='cris-mendes-header-logo'
            />
        </div>
    );
};

export default Header;
