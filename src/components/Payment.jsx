import { useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import PropTypes from 'prop-types';

const Payment = ({ totalPrice }) => {

    console.log('🚀 ~ Payment ~ totalPrice:', totalPrice);
    const publicKey = import.meta.env.VITE_MERCADO_PAGO_CHAVE;

    useEffect(() => {
        initMercadoPago(publicKey, { locale: 'pt-BR' });
    }, [publicKey]);

    return (
        <div id='wallet_container'>
            <Wallet
                initialization={{
                    preferenceId:
                        '47549966-1c20c395-6f3a-4cde-90e7-66a1156f40d0',
                    amount: totalPrice,
                }}
                customization={{ texts: { valueProp: 'security_safety' } }}
            />
        </div>
    );
};

Payment.propTypes = {
    totalPrice: PropTypes.node,
};

export default Payment;
