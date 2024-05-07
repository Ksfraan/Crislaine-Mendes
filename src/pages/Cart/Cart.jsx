/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { useFetchCart } from '../../hooks/useFetchCart';

import './Cart.css';
import { baseUrl } from '../../constants/constants';
import Payment from '../../components/Payment';
import { EmptyCart } from '../../components/EmptyCart/EmptyCart';
import { Underline } from '../../components/Underline/Underline';
import { CartItemsList } from '../../components/CartItemsList/CartItemsList';
import { AuthContext } from '../../context/Auth.context';

const Cart = () => {
    const { isLoading, cart: initialCart, fetchCart } = useFetchCart();
    const [cart, setCart] = useState(initialCart);
    const isEmpty = useMemo(() => cart.length === 0, [cart]);
    const { user, setUser } = useContext(AuthContext);

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

    const totalPrice = useMemo(() => {
        const result = cart.reduce((acc, currentValue) => {
            return currentValue ? acc + currentValue.prices : acc;
        }, 0);
        return result;
    }, [cart]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className='cart-wrapper'>
            <div className='cart-title-wrapper'>
                <span className='cart-title'>Carrinho de {user.name}:</span>
                {!isEmpty && (
                    <span className='cart-counter'>{`${cart?.length} itens`}</span>
                )}
                <Underline />
            </div>
            {!isEmpty ? (
                <>
                    <CartItemsList
                        cart={cart}
                        removeFromCart={removeFromCart}
                    />
                    <Underline />
                    <div className='cart-total-wrapper'>
                        <div className='total-label'>
                            <span>Sub total</span>
                            <p className='total-text'>
                                <span className='currency'>R$</span>{' '}
                                {totalPrice}
                            </p>
                        </div>
                        <Payment totalPrice={totalPrice} cart={cart} />
                    </div>
                </>
            ) : (
                <EmptyCart />
            )}
        </div>
    );
};

export default Cart;
