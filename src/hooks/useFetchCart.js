import axios from 'axios';
import { useState, useEffect } from 'react';
import { baseUrl } from '../constants/constants';

export const useFetchCart = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const fetchCart = async () => {
        try {
            const response = await axios.get(`${baseUrl}/carrinho`);
            const cartData = response.data;
            setCart(cartData);
            const totalPrice = cartData.reduce(
                (total, item) => total + item.investimento,
                0
            );
            setTotalPrice(totalPrice);
            setIsLoading(false);
        } catch (error) {
            console.error('Erro ao buscar carrinho:', error);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const removeFromCart = async (productId) => {
        try {
            await axios.post(`${baseUrl}/carrinho/remover`, {
                itemId: productId,
            });

            fetchCart();
        } catch (error) {
            console.error('Erro ao remover item do carrinho:', error);
        }
    };

    return { isLoading, cart, totalPrice, fetchCart, removeFromCart };
};
