import { useCallback, useState } from 'react';
import { usePacotesContext } from '../context/Pacotes.context';
import { useAddToCart } from '../context/AddToCart.context';

const ColoracaoPessoalComponent = () => {
    const { addToCart } = useAddToCart();
    const [selectedPayment, setSelectedPayment] = useState('');
    const pacotes = usePacotesContext();

    const handleAddToCart = useCallback(
        (pacote) => {
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
        },
        [addToCart, selectedPayment]
    );

    const pacotesColoracaoPessoal = Object.values(pacotes).filter(
        (pacote) =>
            pacote.type === 'bronze' ||
            pacote.type === 'prata' ||
            pacote.type === 'gold'
    );

    if (!pacotes) {
        return <div>Carregando Pacotes de Coloração Pessoal...</div>;
    }

    return (
        <div className='coloração-pessoal-wrapper'>
            {pacotesColoracaoPessoal.map((pacote) => (
                <div key={pacote.id}>
                    <h2>{pacote.title.toUpperCase()}</h2>
                    {pacote.subtitle && (
                        <h3>{pacote.subtitle.toUpperCase()}</h3>
                    )}

                    <p>{pacote.informations.join(', ')}</p>
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
                    <br />
                    <p>PRAZO DE ENTREGA:{pacote.deadline}</p>
                    <br />
                    {pacote.prices && (
                        <div className='coloração-pessoal-investimento'>
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
                                    onChange={() =>
                                        setSelectedPayment('creditCard')
                                    }
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
                                    onChange={() =>
                                        setSelectedPayment('installments')
                                    }
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
            ))}
        </div>
    );
};

export default ColoracaoPessoalComponent;
