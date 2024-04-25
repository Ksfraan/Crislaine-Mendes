/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { baseUrl } from '../constants/constants';
import PropTypes from 'prop-types';
import axios from 'axios';

const AddToCartContext = createContext();

function AddToCartProviderWrapper({ children }) {
    const [addedToCart, setAddedToCart] = useState(false);

    const addToCart = async (item) => {
        try {
            const response = await axios.post(`${baseUrl}/carrinho/adicionar`, {
                item: item,
            });
            console.log(response.data.message);
            setAddedToCart(true);
        } catch (error) {
            console.error('Erro ao adicionar ao carrinho:', error);
        }
    };

    return (
        <AddToCartContext.Provider value={{ addToCart }}>
            {children}
        </AddToCartContext.Provider>
    );
}

function useAddToCart() {
    const context = useContext(AddToCartContext);
    if (!context) {
        throw new Error(
            'useAddToCart deve ser usado dentro de um AddToCartProvider'
        );
    }
    return context;
}

AddToCartProviderWrapper.propTypes = {
    children: PropTypes.node,
};

export { AddToCartProviderWrapper, useAddToCart };
