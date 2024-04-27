import { usePacotesContext } from '../context/Pacotes.context';
import { useState } from 'react';
import { useAddToCart } from '../context/AddToCart.context';

const VisagismoComColoracao = () => {
    const { addToCart } = useAddToCart();
    const [selectedPayment, setSelectedPayment] = useState('');
    const pacotes = usePacotesContext();

    if (!pacotes) {
        return (
            <div>
                Carregando Pacotes de Visagismo Simulado + Coloração Pessoal...
            </div>
        );
    }

    const pacotesVisagismo = Object.values(pacotes).filter(
        (pacote) =>
            pacote.type === 'ametista' ||
            pacote.type === 'ruby' ||
            pacote.type === 'jade'
    );

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
        <div>
            {pacotesVisagismo.map((pacote) => (
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
                    <p>
                        PRAZO DE ENTREGA:
                        {pacote.deadline}
                    </p>

                    <br />
                    {pacote.prices && (
                        <div>
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

export default VisagismoComColoracao;
