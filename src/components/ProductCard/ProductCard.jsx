/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useCallback, useState } from 'react';
import { useAddToCart } from '../../context/AddToCart.context';
import { Button } from '../Button/Button';
import bronzeImage from '../../assets/crisPhotoYellowDress.png';
import silverImage from '../../assets/crisPhotoCartelaCores.png';
import goldImage from '../../assets/crisPhotoGreenDress.png';
import quartzoRosa from '../../assets/quartzoRosa.jpeg';
import Cristal from '../../assets/cristal.jpeg';
import esmeralda from '../../assets/esmeralda.jpeg';
import jadeImage from '../../assets/jade-icon.png';
import rubyImage from '../../assets/ruby-icon.png';
import amethyst from '../../assets/amethyst-icon.png';
import infoIcon from '../../assets/info-icon.png';

import './ProductCard.css';
import classNames from 'classnames';

export const ProductCard = ({ item, image }) => {
    console.log('🚀 ~ ProductCard ~ item:', item);
    const [selectedPayment, setSelectedPayment] = useState('');
    const { addToCart } = useAddToCart();

    const assignImage = useCallback((item) => {
        let imageResult;
        switch (item?.type) {
            case 'bronze':
                imageResult = bronzeImage;
                break;
            case 'prata':
                imageResult = silverImage;
                break;
            case 'gold':
                imageResult = goldImage;
                break;
            case 'quartzoRosa':
                imageResult = quartzoRosa;
                break;
            case 'cristal':
                imageResult = Cristal;
                break;
            case 'esmeralda':
                imageResult = esmeralda;
                break;
            case 'ametista':
                imageResult = amethyst;
                break;
            case 'ruby':
                imageResult = rubyImage;
                break;
            case 'jade':
                imageResult = jadeImage;
                break;

            default:
                imageResult = silverImage;
                break;
        }

        return imageResult;
    }, []);

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
        <li
            className={classNames('product-card-wrapper', {
                [item.type]: item?.type,
            })}
        >
            <div className='product-card-image-wrapper'>
                <img
                    className='product-card-image'
                    src={assignImage(item)}
                    alt={`Product Card Image ${item.title}`}
                />
            </div>
            <div className='product-card-info-wrapper'>
                <img
                    className='product-card-image'
                    src={infoIcon}
                    alt={`Product Card Image ${item.title}`}
                />
            </div>
            <div className='content-wrapper'>
                <div className='content'>
                    <h2 className='title'>{item.title.toUpperCase()}</h2>
                    {item.subtitle && <h3>{item.subtitle.toUpperCase()}</h3>}

                    {/* <p>{item.informations.join(', ')}</p> */}
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
                                            checked={selectedPayment === 'pix'}
                                            onChange={() =>
                                                setSelectedPayment('pix')
                                            }
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
                                            checked={
                                                selectedPayment === 'creditCard'
                                            }
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
                                            checked={
                                                selectedPayment ===
                                                'installments'
                                            }
                                            onChange={() =>
                                                setSelectedPayment(
                                                    'installments'
                                                )
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
                </div>
            </div>
        </li>
    );
};
