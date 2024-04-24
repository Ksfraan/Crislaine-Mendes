import axios from 'axios';
import { useAsync } from 'react-use';
import { baseUrl } from '../constants/constants';

export const useFetchCart = () => {
    const {
        loading: isLoading,
        error,
        value: cart,
    } = useAsync(async () => {
        const response = await axios.get(`${baseUrl}/carrinho`);
        const cartData = response.data;
        const totalPrice = cartData.reduce((total, item) => {
            if (!item) {
                return total;
            }
            return total + item.investimento;
        }, 0);
        return { cart: cartData, totalPrice };
    }, []);

    return {
        isLoading,
        cart: cart?.cart,
        totalPrice: cart?.totalPrice || 0,
        error,
    };
};
