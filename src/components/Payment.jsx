import { useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const Payment = () => {
    useEffect(() => {
        initMercadoPago('TEST-d4422f03-5c39-49ae-8a62-d546f196a2aa', {
            locale: 'pt-BR',
        });
    }, []);

    return (
        <div>
            <Wallet
                initialization={{ preferenceId: '47549966' }}
                customization={{ texts: { valueProp: 'smart_option' } }}
            />
        </div>
    );
};

export default Payment;
