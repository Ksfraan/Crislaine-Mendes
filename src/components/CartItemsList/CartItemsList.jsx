import { CartItem } from '../CartItem/CartItem';
import './CartItemsList.css'

// eslint-disable-next-line react/prop-types
export const CartItemsList = ({cart, removeFromCart}) => (
  <ul className='cart-items-list'>
      {/* eslint-disable-next-line react/prop-types */}
      {cart?.map((product, i) =>
        <CartItem
        key={`${product.id}-${i}`}
        product={product} 
        removeFromCart={removeFromCart} />
      )}
  </ul>
);