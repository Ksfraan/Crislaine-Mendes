import { useEffect, useState } from 'react';
import axios from 'axios';

import quartzoRosa from '../assets/quartzoRosa.jpeg';
import { baseUrl } from '../constants/constants';

const PacoteQuartzoRosa = () => {
    const [pacoteQuartzoRosa, setPacoteQuartzoRosa] = useState(null);

    useEffect(() => {
        const fetchPacoteQuartzoRosa = async () => {
            try {
                const response = await axios.get(
                    `${baseUrl}/pacote-quartzoRosa`
                );
                setPacoteQuartzoRosa(response.data[0]);
            } catch (error) {
                console.error('Erro ao buscar informações do pacote:', error);
            }
        };
        fetchPacoteQuartzoRosa();
    }, []);

    if (!pacoteQuartzoRosa) {
        return <div>Carregando Pacote Quartzo Rosa...</div>;
    }

    return (
        <div className='pacote-quartzo-rosa-wrapper'>
            <h3>{pacoteQuartzoRosa.titulo}</h3>

            <ul>
                {pacoteQuartzoRosa.descricao.map((info, id) => (
                    <li key={id}>{info}</li>
                ))}
            </ul>
            <br />
            <p>
                <b>PRAZO DE ENTREGA:</b> {pacoteQuartzoRosa.prazoEntrega}
            </p>
            <div className='investiment-and-image'>
                <p>
                    <b>Investimento:</b> {pacoteQuartzoRosa.investimento}
                </p>
                <img src={quartzoRosa} alt='' />
            </div>
        </div>
    );
};

export default PacoteQuartzoRosa;
