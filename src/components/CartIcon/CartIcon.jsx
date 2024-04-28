import { Link } from 'react-router-dom';
import iconImg from '../../assets/cart.png';
import './CartIcon.css';

export const CartIcon = () => (
  <div className='cart-icon-wrapper'>
    <Link to='/carrinho'>
        <div className='cart-icon'>
            <img
                className='header-logo'
                src={iconImg}
                alt='Cris Mendes Logo'
            />
        </div>
    </Link>
  </div>
)