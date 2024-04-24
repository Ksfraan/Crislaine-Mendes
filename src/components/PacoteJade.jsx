import { useState, useEffect } from 'react';
import axios from 'axios';

import crisPhotoComTecidos from '../assets/crisPhotoComTecidos.png';
import { baseUrl } from '../constants/constants';

const PacoteJade = () => {
    const [pacoteJade, setPacoteJade] = useState(null);

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
        return <div>Carregando Pacote Jade...</div>;
    }

    return (
        <div className='pacote-jade-wrapper'>
            <h3>{pacoteJade.titulo}</h3>
            <h5>{pacoteJade.subtitulo}</h5>
            <img src={crisPhotoComTecidos} alt='Foto da Cris com tecidos' />
            <div>{pacoteJade.descricao}</div>
            <br />
            <p>
                <b>PRAZO DE ENTREGA:</b> {pacoteJade.prazoEntrega}
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
