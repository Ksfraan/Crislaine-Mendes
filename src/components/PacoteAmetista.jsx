import { useEffect, useState } from 'react';
import axios from 'axios';
import crisPhotoFace from '../assets/crisPhotoFace.png';
import { baseUrl } from '../constants/constants';

const PacoteAmetista = () => {
    const [detalhesPacote, setDetalhesPacote] = useState(null);
    const [addedToCart, setAddedToCart] = useState(false);

    const addToCart = async () => {
        try {
            const response = await axios.post(`${baseUrl}/carrinho/adicionar`, {
                item: detalhesPacote,
            });
            console.log(response.data.message);
            setAddedToCart(true);
        } catch (error) {
            console.error('Erro ao adicionar ao carrinho:', error);
        }
    };

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
    }, [baseUrl]);

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
                {addedToCart ? (
                    <p>Adicionado ao carrinho</p>
                ) : (
                    <button onClick={addToCart}>Adicionar ao Carrinho</button>
                )}
            </div>
        </div>
    );
};

export default PacoteAmetista;
