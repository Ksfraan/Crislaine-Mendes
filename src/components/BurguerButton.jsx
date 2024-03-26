import { useState } from 'react';
import { Link } from 'react-router-dom';

import burguerButton from '../assets/burguerButton.png';

// eslint-disable-next-line react/prop-types
const BurguerButton = () => {
    const [showLinks, setShowLinks] = useState(false);

    const toggleShowLinks = () => {
        setShowLinks(!showLinks);
    };
    return (
        <button className='burger-button' onClick={toggleShowLinks}>
            {showLinks ? (
                <div className='visagismo-coloracao-links-wrapper'>
                    <Link to='/visagismo'>Visagismo Simulado</Link>
                    <br />
                    <Link to='/coloracao'>Coloração Pessoal</Link> <br />
                    <Link to='/'>Sobre mim</Link>
                </div>
            ) : null}
            <img src={burguerButton} alt='menu-button' />
        </button>
    );
};

export default BurguerButton;
