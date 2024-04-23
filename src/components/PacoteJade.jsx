import { useState, useEffect } from 'react';
import axios from 'axios';

import crisPhotoComTecidos from '../assets/crisPhotoComTecidos.png';

const PacoteJade = () => {
    const [pacoteJade, setPacoteJade] = useState(null);
    const baseUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchPacoteJade = async () => {
            try {
                const response = await axios.get(`${baseUrl}/pacote-jade`);
                setPacoteJade(response.data[0]);
            } catch (error) {
                console.error('Erro ao buscar o pacote Jade:', error);
            }
        };

        fetchPacoteJade();
    }, []);

    if (!pacoteJade) {
        return <div>Carregando...</div>;
    }

    return (
        <div className='pacote-jade-wrapper'>
            <h3>{pacoteJade.titulo}</h3>
            <h5>{pacoteJade.subtitulo}</h5>
            <img src={crisPhotoComTecidos} alt='Foto da Cris com tecidos' />
            <div>{pacoteJade.descricao}</div>
            <br />
            <p>
                <b>Prazo de Entrega:</b> {pacoteJade.prazoEntrega}
            </p>
            <br />
            <div>
                <b>Investimento:</b>
                <p>{pacoteJade.investimento}</p>
            </div>
        </div>
    );
};

export default PacoteJade;
