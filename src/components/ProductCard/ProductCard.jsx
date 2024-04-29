/* eslint-disable react/prop-types */
import { useCallback, useState } from 'react';
import { useAddToCart } from '../../context/AddToCart.context';
import { Button } from '../Button/Button';

import './ProductCard.css';

export const ProductCard = ({ item, image }) => {
    const [selectedPayment, setSelectedPayment] = useState('');
    const { addToCart } = useAddToCart();

    const handleAddToCart = useCallback(
        (item) => {
            if (!selectedPayment) return;

            let selectedItem = { ...item };
            switch (selectedPayment) {
                case 'pix':
                    selectedItem.prices = item.prices.pix;
                    break;
                case 'creditCard':
                    selectedItem.prices = item.prices.creditCard;
                    break;
                case 'installments':
                    selectedItem.prices = item.prices.installments * 3;
                    break;
                default:
                    break;
            }
            addToCart(selectedItem);
            setSelectedPayment('');
        },
        [addToCart, selectedPayment]
    );

    return (
        <li className='product-card-wrapper'>
            <div className='product-card-image-wrapper'>
                <img
                    className='product-card-image'
                    src={image}
                    alt={`Product Card Image ${item.title}`}
                />
            </div>
            <h2 className='title'>{item.title.toUpperCase()}</h2>
            {item.subtitle && <h3>{item.subtitle.toUpperCase()}</h3>}

            <p>{item.informations.join(', ')}</p>
            {item.included && (
                <div>
                    <h4>Inclusos:</h4>
                    <ul>
                        {item.included.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
            <br />
            <p>
                PRAZO DE ENTREGA:
                {item.deadline}
            </p>

            <br />
            {item.prices && (
                <div className='product-card-payment-wrapper'>
                    <fieldset>
                        <legend>
                            <b>Investimento:</b>
                        </legend>

                        <p></p>
                        <div className='product-card-payment'>
                            <div className='product-card-pay-option'>
                                <input
                                    type='radio'
                                    id='pix'
                                    name='paymentOption'
                                    value='pix'
                                    checked={ selectedPayment === 'pix' }
                                    onChange={() => setSelectedPayment('pix')}
                                />
                                <label htmlFor='pix'>
                                    Pix: R${item.prices.pix}
                                    ,00
                                </label>
                            </div>
                            <div className='product-card-pay-option'>
                                <input
                                    type='radio'
                                    id='creditCard'
                                    name='paymentOption'
                                    value='creditCard'
                                    checked={ selectedPayment === 'creditCard' }
                                    onChange={() =>
                                        setSelectedPayment('creditCard')
                                    }
                                />
                                <label htmlFor='creditCard'>
                                    Cartão de Crédito à vista: R${' '}
                                    {item.prices.creditCard},00
                                </label>
                            </div>
                            <div className='product-card-pay-option'>
                                <input
                                    type='radio'
                                    id='installments'
                                    name='paymentOption'
                                    value='installments'
                                    checked={ selectedPayment === 'installments' }
                                    onChange={() =>
                                        setSelectedPayment('installments')
                                    }
                                />
                                <label htmlFor='installments'>
                                    Cartão de Crédito Parcelado: R$ 3x
                                    {item.prices.installments},00
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </div>
            )}

            <Button
                label={'+ Adicionar ao Carrinho'}
                labelClicked={'Adicionado!'}
                clickAction={() => handleAddToCart(item)}
            />
        </li>
    );
};
