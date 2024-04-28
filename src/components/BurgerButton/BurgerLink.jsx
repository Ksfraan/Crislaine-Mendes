import { Link } from 'react-router-dom';
import './BurgerLink.css';

// eslint-disable-next-line react/prop-types
export const BurgerLink = ({to, label, iconImg}) => {
  return (
    <li
      key={label}
      className='burger-link-item'>
        {
          iconImg && (
            <div className='icon-img-container'>
              <img src={iconImg} alt={`${label} Menu Item`} />
            </div>
          )
        }
        <Link to={to}>{label}</Link>
    </li>
  )
};