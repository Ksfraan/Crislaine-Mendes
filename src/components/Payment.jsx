import { useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const Payment = () => {
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
                }}
                customization={{ texts: { valueProp: 'security_safety' } }}
            />
        </div>
    );
};

export default Payment;
