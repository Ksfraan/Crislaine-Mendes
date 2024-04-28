import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { baseUrl } from '../constants/constants';

export const useFetchCart = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [cart, setCart] = useState([]);

    const fetchCart = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${baseUrl}/carrinho`);
            const cartData = response.data;
            setCart([...cartData]);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error('Erro ao buscar carrinho:', error);
        }
    }, []);

    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    return { isLoading, cart, fetchCart };
};
