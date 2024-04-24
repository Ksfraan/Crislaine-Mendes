import { useState, useEffect } from 'react';
import axios from 'axios';

import esmeralda from '../assets/esmeralda.jpeg';
import { baseUrl } from '../constants/constants';

const PacoteEsmeraldaVisagismo = () => {
    const [pacoteEsmeralda, setPacoteEsmeralda] = useState(null);

    useEffect(() => {
        const fetchPacoteEsmeralda = async () => {
            try {
                const response = await axios.get(`${baseUrl}/pacote-esmeralda`);
                setPacoteEsmeralda(response.data[0]);
            } catch (error) {
                console.error(
                    'Erro ao buscar informações do pacote Esmeralda:',
                    error
                );
            }
        };

        fetchPacoteEsmeralda();
    }, []);

    if (!pacoteEsmeralda) {
        return <div>Carregando Pacote Esmeralda...</div>;
    }

    return (
        <div className='pacote-esmeralda-wrapper'>
            <h3>{pacoteEsmeralda.titulo}</h3>
            <p>{pacoteEsmeralda.descricao}</p>
            <div>
                <br />
                <h4>Inclusos:</h4>
                <ul>
                    {pacoteEsmeralda.inclusos.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>
                <br />
            </div>
            <p>
                <b>PRAZO DE ENTREGA:</b> {pacoteEsmeralda.prazoEntrega}
            </p>
            <br />
            <div className='pacote-esmeralda-investimento'>
                <p>
                    <b>Investimento:</b> {pacoteEsmeralda.investimento}
                </p>{' '}
                <img src={esmeralda} alt='esmeralda image' />
            </div>
        </div>
    );
};

export default PacoteEsmeraldaVisagismo;
