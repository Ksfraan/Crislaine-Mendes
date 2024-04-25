/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';
import { useAddToCart } from './AddToCart.context';
import PropTypes from 'prop-types';

const HandleClickContext = createContext();

export const HandleClickProvider = ({ children }) => {
    const { addToCart } = useAddToCart();

    const handleClick = (item) => {
        try {
            addToCart(item);
        } catch (error) {
            console.error('Erro ao adicionar ao carrinho:', error);
        }
    };

    return (
        <HandleClickContext.Provider value={handleClick}>
            {children}
        </HandleClickContext.Provider>
    );
};

HandleClickProvider.propTypes = {
    children: PropTypes.node,
};
export const useHandleClick = () => useContext(HandleClickContext);
