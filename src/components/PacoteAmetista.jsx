/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { baseUrl } from '../constants/constants';
import { useHandleClick } from '../context/HandleClick.context';
import { useAddToCart } from '../context/AddToCart.context';
import axios from 'axios';
import crisPhotoFace from '../assets/crisPhotoFace.png';

const PacoteAmetista = () => {
    const [detalhesPacote, setDetalhesPacote] = useState(null);
    const [addedToCart, setAddedToCart] = useState(false);
    const { addToCart } = useAddToCart();
    const handleClick = useHandleClick();

    useEffect(() => {
        axios
            .get(`${baseUrl}/pacote-ametista`)
            .then((response) => {
                setDetalhesPacote(response.data[0]);
            })
            .catch((error) => {
                console.error(
                    'Erro ao buscar detalhes do pacote Ametista:',
                    error
                );
            });
    }, []);

    if (!detalhesPacote) {
        return <div>Carregando Pacote Ametista...</div>;
    }

    return (
        <div className='pacote-ametista-wrapper'>
            <h3>{detalhesPacote.titulo}</h3>
            <h5>{detalhesPacote.subtitulo}</h5>
            <img src={crisPhotoFace} alt='' />
            <div className='pacote-ametista-information'>
                <p>{detalhesPacote.informacoes}</p>
                <br />
                <p>
                    <b>PRAZO DE ENTREGA:</b>
                    {detalhesPacote.prazoEntrega}.
                </p>
                <br />
                <p>
                    <b>Investimento:</b> {detalhesPacote.investimento}.
                </p>
            </div>
            <div className='consultoria-item'>
                <button onClick={() => handleClick(detalhesPacote)}>
                    Adicionar ao Carrinho
                </button>
                {addedToCart && <p>Adicionado ao carrinho!</p>}
            </div>
        </div>
    );
};

export default PacoteAmetista;
