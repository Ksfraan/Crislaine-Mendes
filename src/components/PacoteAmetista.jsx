import { useState, useEffect } from 'react';
import crisPhotoFace from '../assets/crisPhotoFace.png';
import axios from 'axios';

const PacoteAmetista = () => {
    const [detalhesPacote, setDetalhesPacote] = useState(null);
    const baseUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        axios
            .get(`${baseUrl}/pacote-ametista`)

            .then((response) => {
                setDetalhesPacote(response.data);
            })
            .catch((error) => {
                console.error(
                    'Erro ao buscar detalhes do pacote Ametista:',
                    error
                );
            });
    }, [baseUrl]);

    if (!detalhesPacote) {
        return <div>Carregando...</div>;
    }

    return (
        <div className='pacote-ametista-wrapper'>
            <h3>{detalhesPacote[0].titulo}</h3>
            <h5>{detalhesPacote[0].subtitulo}</h5>
            <img src={crisPhotoFace} alt='' />
            <div className='pacote-ametista-information'>
                <p>{detalhesPacote[0].informacoes}</p>
                <br />
                <p>
                    <b>PRAZO DE ENTREGA:</b>
                    {detalhesPacote[0].prazoEntrega}.
                </p>
                <p>
                    <b>Investimento:</b> {detalhesPacote[0].investimento}.
                </p>
            </div>
        </div>
    );
};

export default PacoteAmetista;
