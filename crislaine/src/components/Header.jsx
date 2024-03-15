import CrisLogo from '../assets/crisMendes.png';
import '../styles/header.css';

function Header() {
    return (
        <img
            src={CrisLogo}
            alt='Cris Mendes Logo'
            className='cris-mendes-header-logo'
        />
    );
}

export default Header;
