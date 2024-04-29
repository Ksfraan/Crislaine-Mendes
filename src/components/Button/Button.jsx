import { Link } from 'react-router-dom';
import './Button.css';
import { useCallback, useEffect, useRef, useState } from 'react';

// eslint-disable-next-line react/prop-types
export const Button = ({label = '', to, clickAction, labelClicked = '', messageDelay = 2000}) => {
  const [isActive, setIsActive] = useState(false);
  const timeoutId = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
        timeoutId.current = null;
      }
    }
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
      <button className='button-container' onClick={handleClick}>
        {isActive ? labelClicked : label}
      </button>
    )
}