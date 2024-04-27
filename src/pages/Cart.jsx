import axios from 'axios';
import { baseUrl } from '../constants/constants';
import { useFetchCart } from '../hooks/useFetchCart';
import { useState, useEffect, useCallback } from 'react';
import Payment from '../components/Payment';

import '../styles/Cart.css';
import { CartItem } from '../components/CartItem';

const Cart = () => {
    const { isLoading, cart: initialCart, fetchCart } = useFetchCart();
    const [cart, setCart] = useState(initialCart);
    console.log('🚀 ~ Cart ~ cart:', cart);

    // To be used when removing items
    // rather than re-fetching the whole cart again
    useEffect(() => {
        setCart(initialCart);
    }, [initialCart]);

    const removeFromCart = useCallback(
        async (product) => {
            const productId = product?.id;
            try {
                const response = await axios.post(
                    `${baseUrl}/carrinho/remover`,
                    {
                        itemId: productId,
                    }
                );
                console.log(response.data.message);
                fetchCart();
            } catch (error) {
                console.error('Erro ao remover item do carrinho:', error);
            }
        },
        [fetchCart]
    );

    const calculateTotalPrice = useCallback(() => {
        const totalPrice = cart.reduce((acc, currentValue) => {
            console.log('current: ', currentValue);
            return currentValue ? acc + currentValue.prices : acc;
        }, 0);
        return totalPrice;
    }, [cart]);

    if (isLoading) {
        return null;
    }

    return (
        <div className='cart-page-wrapper'>
            <div className='cart-wrapper'>
                <h2>Carrinho</h2>
                {cart?.map((product) => (
                    <CartItem
                        key={product?.id}
                        product={product}
                        removeFromCart={removeFromCart}
                    />
                ))}
                {cart?.length === 0 && <p>O seu carrinho está vazio.</p>}
                <p>
                    <b>Total:</b> R$ {calculateTotalPrice()}
                </p>
                {cart?.length !== 0 && (
                    <>
                        <div>Finalizar Compra</div>
                        <Payment />
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
