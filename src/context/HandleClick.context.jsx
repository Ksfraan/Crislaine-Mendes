/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';
import { useAddToCart } from './AddToCart.context';
import PropTypes from 'prop-types';

const HandleAddToCart = createContext();

export const HandleAddToCartProvider = ({ children }) => {
    const { addToCart } = useAddToCart();

    const handleClick = (item) => {
        try {
            addToCart(item);
        } catch (error) {
            console.error('Erro ao adicionar ao carrinho:', error);
        }
    };

    return (
        <HandleAddToCart.Provider value={handleClick}>
            {children}
        </HandleAddToCart.Provider>
    );
};

HandleAddToCartProvider.propTypes = {
    children: PropTypes.node,
};
export const useHandleClick = () => useContext(HandleAddToCart);
