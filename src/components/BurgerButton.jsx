import { memo, useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import burguerButton from '../assets/burguerButton.png';
import '../styles/BurgerButton.css';

// todo: change to burger
// eslint-disable-next-line react/prop-types
const BurgerButton = () => {
    const [showLinks, setShowLinks] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setShowLinks(false);
    }, [location.pathname]);

    useEffect(() => {
        console.log('IM RENDERED');
    });

    const toggleShowLinks = useCallback(() => {
        setShowLinks(!showLinks);
    }, [showLinks]);

    return (
        <div className='burger-button__wrapper'>
            <button className='burger-button' onClick={toggleShowLinks}>
                <img src={burguerButton} alt='menu-button' />
            </button>
            {showLinks ? (
                <div className='visagismo-coloracao-links-wrapper'>
                    <Link to='/coloracao'>Coloração Pessoal</Link>
                    <Link to='/visagismo'>Visagismo Simulado</Link>
                    <Link to='/visagismoecoloracao'>Coloração/Visagismo</Link>
                    <Link to='/'>Sobre mim</Link>
                    <Link to='/carrinho'>Carrinho</Link>
                </div>
            ) : null}
        </div>
    );
};

export default memo(BurgerButton);
