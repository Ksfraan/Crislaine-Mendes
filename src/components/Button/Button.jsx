import { Link } from 'react-router-dom';
import './Button.css';

// eslint-disable-next-line react/prop-types
export const Button = ({label, to, clickAction}) => {

  return to ? (
      <Link className='button-container' to={to}>
          {label}
      </Link>
    ) : (
      <button className='button-container' onClick={clickAction}>
        {label}
      </button>
    )
}