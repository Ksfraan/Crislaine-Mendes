import { useEffect, useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { baseUrl } from '../constants/constants';

const Payment = ({ totalPrice, cart }) => {
    const publicKey = import.meta.env.VITE_MERCADO_PAGO_CHAVE;
    const [preferenceId, setPreferenceId] = useState(null);

    useEffect(() => {
        initMercadoPago(publicKey, { locale: 'pt-BR' });
    }, [publicKey]);

    useEffect(() => {
        const fetchPreferenceId = async () => {
            try {
                const response = await axios.post(`${baseUrl}/preferencia`, {
                    items: cart.map((item) => ({
                        title: item.title.toUpperCase(),
                        quantity: 1,
                        unit_price: item.prices,
                    })),
                });
                setPreferenceId(response.data.preferenceId);
            } catch (error) {
                console.error('Erro ao obter preferenceId:', error);
            }
        };

        fetchPreferenceId();
    }, [cart]);

    return preferenceId ? (
        <div id='wallet_container'>
            <Wallet
                initialization={{
                    preferenceId: preferenceId,
                    amount: totalPrice,
                }}
                customization={{ texts: { valueProp: 'security_safety' } }}
            />
        </div>
    ) : null;
};

Payment.propTypes = {
    totalPrice: PropTypes.node,
    cart: PropTypes.node,
};

export default Payment;
