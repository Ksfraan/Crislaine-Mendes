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
                        '47549966-4cfbddb0-2029-4ba1-a665-9e56599fa7f3',
                }}
                customization={{ texts: { valueProp: 'security_safety' } }}
            />
        </div>
    );
};

export default Payment;
