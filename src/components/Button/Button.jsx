/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './Button.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

export const Button = ({
    label = '',
    to,
    clickAction,
    labelClicked = 'Success!',
    messageDelay = 2000,
    overrideClassNames,
}) => {
    const [isActive, setIsActive] = useState(false);
    const timeoutId = useRef(null);
    const buttonClassNames = classNames(
        'button-container',
        overrideClassNames && overrideClassNames
    );

    useEffect(() => {
        return () => {
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
                timeoutId.current = null;
            }
        };
    }, []);

    const handleClick = useCallback(() => {
        clickAction && clickAction();
        setIsActive(true);
        timeoutId.current = setTimeout(() => {
            setIsActive(false);
        }, messageDelay);
    }, [clickAction, messageDelay]);

    return to ? (
        <Link className='button-container' to={to}>
            {label}
        </Link>
    ) : (
        <button className={buttonClassNames} onClick={handleClick}>
            {isActive ? labelClicked : label}
        </button>
    );
};
