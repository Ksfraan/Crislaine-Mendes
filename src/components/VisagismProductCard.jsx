/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useAddToCart } from '../context/AddToCart.context';

// eslint-disable-next-line react/prop-types
export const VisagismProductCard = ({ product: pacote }) => {
    const [selectedPayment, setSelectedPayment] = useState('');
    const { addToCart } = useAddToCart();

    const handleAddToCart = (pacote) => {
        let item = { ...pacote };
        switch (selectedPayment) {
            case 'pix':
                item.prices = pacote.prices.pix;
                break;
            case 'creditCard':
                item.prices = pacote.prices.creditCard;
                break;
            case 'installments':
                item.prices = pacote.prices.installments * 3;
                break;
            default:
                break;
        }
        addToCart(item);
    };
    return (
        <div key={pacote.id} className={`visagism-pack-${pacote.type}`}>
            <h2>{pacote.title.toUpperCase()}</h2>
            {pacote.subtitle && <h3>{pacote.subtitle}</h3>}
            <p>{pacote.informations.join(', ')}</p>
            <br />
            <p>PRAZO DE ENTREGA:{pacote.deadline}</p>
            <br />
            {pacote.included && (
                <div>
                    <h4>Inclusos:</h4>
                    <ul>
                        {pacote.included.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
            {pacote.prices && (
                <div className={`pacote-visagismo-investimento-${pacote.type}`}>
                    <p>
                        <b>Investimento:</b>
                    </p>
                    <div>
                        <input
                            type='radio'
                            id='pix'
                            name='paymentOption'
                            value='pix'
                            onChange={() => setSelectedPayment('pix')}
                        />
                        <label htmlFor='pix'>
                            Pix: R${pacote.prices.pix}
                            ,00
                        </label>
                    </div>
                    <div>
                        <input
                            type='radio'
                            id='creditCard'
                            name='paymentOption'
                            value='creditCard'
                            onChange={() => setSelectedPayment('creditCard')}
                        />
                        <label htmlFor='creditCard'>
                            Cartão de Crédito à vista: R${' '}
                            {pacote.prices.creditCard},00
                        </label>
                    </div>
                    <div>
                        <input
                            type='radio'
                            id='installments'
                            name='paymentOption'
                            value='installments'
                            onChange={() => setSelectedPayment('installments')}
                        />
                        <label htmlFor='installments'>
                            Cartão de Crédito Parcelado: R$ 3x
                            {pacote.prices.installments},00
                        </label>
                    </div>
                </div>
            )}
            <button onClick={() => handleAddToCart(pacote)}>
                Adicionar ao Carrinho
            </button>
        </div>
    );
};
