import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { BurgerLink } from './BurgerLink';

import colorSwatches from '../../assets/color-swatches.png';
import visagismPen from '../../assets/visagismo-pen.png';
import visagismColoring from '../../assets/visagism-coloring.png';
import aboutMe from '../../assets/about-me.png';

import './/BurgerButton.css';
import { Underline } from '../Underline/Underline';

// eslint-disable-next-line react/prop-types
const BurgerButton = () => {
    const [showLinks, setShowLinks] = useState(false);
    const burgerRef = useRef();
    const location = useLocation();
    const burgerMenuClassNames = classNames(
        'visagismo-coloracao-links-wrapper',
        { 'hidden': !showLinks },
    )

    useEffect(() => {
        setShowLinks(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (burgerRef.current && !burgerRef.current.contains(event.target)) {
                setShowLinks(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    const toggleShowLinks = useCallback(() => {
        setShowLinks(!showLinks);
    }, [showLinks]);

    return (
        <div className='burger-button__wrapper' ref={burgerRef}>
            <div 
                className={classNames('burger-button', {'open': showLinks})} 
                onClick={toggleShowLinks}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={burgerMenuClassNames}>
                <BurgerLink to={'/coloracao'} label={'Coloração Pessoal'} iconImg={colorSwatches} />
                <BurgerLink to={'/visagismo'} label={'Visagismo Simulado'} iconImg={visagismPen} />
                <BurgerLink to={'/visagismoecoloracao'} label={'Coloração/Visagismo'} iconImg={visagismColoring} />
                <div className='underline-burger'>
                    <Underline/>
                </div>
                <BurgerLink to={'/'} label={'Sobre mim'} iconImg={aboutMe} />
            </ul>
        </div>
    );
};

export default memo(BurgerButton);
