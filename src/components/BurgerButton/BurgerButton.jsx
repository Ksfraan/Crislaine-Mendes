import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../../context/Auth.context';
import { BurgerLink } from './BurgerLink';
import { Underline } from '../Underline/Underline';
import classNames from 'classnames';

import colorSwatches from '../../assets/color-swatches.png';
import visagismPen from '../../assets/visagismo-pen.png';
import visagismColoring from '../../assets/visagism-coloring.png';
import aboutMe from '../../assets/about-me.png';
import addUser from '../../assets/add-user.png';
import loginIcon from '../../assets/login.png';
import profileIcon from '../../assets/profile-icon.png';
import logOutIcon from '../../assets/log-out.png';

import './/BurgerButton.css';
import { Button } from '../Button/Button';

const BurgerButton = () => {
    const [showLinks, setShowLinks] = useState(false);
    const { isLoggedIn, logOutUser } = useAuthContext();

    const burgerRef = useRef();
    const location = useLocation();
    const burgerMenuClassNames = classNames(
        'visagismo-coloracao-links-wrapper',
        { hidden: !showLinks }
    );

    useEffect(() => {
        setShowLinks(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                burgerRef.current &&
                !burgerRef.current.contains(event.target)
            ) {
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
                className={classNames('burger-button', { open: showLinks })}
                onClick={toggleShowLinks}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={burgerMenuClassNames}>
                <BurgerLink
                    to={'/coloracao'}
                    label={'Coloração Pessoal'}
                    iconImg={colorSwatches}
                />
                <BurgerLink
                    to={'/visagismo'}
                    label={'Visagismo Simulado'}
                    iconImg={visagismPen}
                />
                <BurgerLink
                    to={'/visagismoecoloracao'}
                    label={'Coloração/Visagismo'}
                    iconImg={visagismColoring}
                />
                {isLoggedIn ? (
                    <>
                        {' '}
                        <div className='logout-and-icon-wrapper'>
                            <img
                                src={logOutIcon}
                                alt='Log out icon'
                                className='icon-img-container'
                            />
                            <Button
                                overrideClassNames='logout'
                                label={'Log out'}
                                clickAction={logOutUser}
                            />
                        </div>
                        <BurgerLink
                            to={'/profile'}
                            label={'Seu perfil'}
                            iconImg={profileIcon}
                            onClick={toggleShowLinks}
                        />
                    </>
                ) : (
                    <>
                        <BurgerLink
                            to={'/login'}
                            label={'Log in'}
                            iconImg={loginIcon}
                        />
                        <BurgerLink
                            to={'/signup'}
                            label={'Sign up'}
                            iconImg={addUser}
                        />
                    </>
                )}
                <div className='underline-burger'>
                    <Underline />
                </div>
                <BurgerLink to={'/'} label={'Sobre mim'} iconImg={aboutMe} />
            </ul>
        </div>
    );
};

export default memo(BurgerButton);
