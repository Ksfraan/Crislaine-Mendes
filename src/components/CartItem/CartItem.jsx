import { Button } from '../Button/Button';
import './CartItem.css';

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export const CartItem = ({ product, removeFromCart }) => {
    if (!product) {
        return <div>Erro ao ler o produto!</div>;
    }
    return (
        <li className='cart-item'>
            <div className='cart-item-info'>
                <p>{product?.title.toUpperCase()}</p>
                <p className='price'>
                    <span>R$</span>
                    {product?.prices}
                </p>
            </div>
            <Button
                label={'Remover'}
                clickAction={() => removeFromCart(product)}
            />
        </li>
    );
};
