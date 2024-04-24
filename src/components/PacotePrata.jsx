import { useEffect, useState } from 'react';
import axios from 'axios';

import crisPhotoCartelaCores from '../assets/crisPhotoCartelaCores.png';
import { baseUrl } from '../constants/constants';

const PacotePrata = () => {
    const [pacotePrata, setPacotePrata] = useState(null);

    useEffect(() => {
        const fetchPacotePrata = async () => {
            try {
                const response = await axios.get(`${baseUrl}/pacote-prata`);
                setPacotePrata(response.data[0]);
            } catch (error) {
                console.error('Erro ao buscar informações do pacote:', error);
            }
        };
        fetchPacotePrata();
    }, []);

    if (!pacotePrata) {
        return <div>Carregando Pacote Prata...</div>;
    }

    return (
        <div className='pacote-prata-wrapper'>
            <div className='pacote-prata-description'>
                <h3>{pacotePrata.titulo}</h3>
                <h5>{pacotePrata.subtitulo}</h5>
                <img
                    src={crisPhotoCartelaCores}
                    alt='Foto da Cris com uma cartela de cores'
                />
                <ul>
                    {pacotePrata.informacoes.map((info, id) => (
                        <li key={id}>{info}</li>
                    ))}
                </ul>
                <p>
                    <b>PRAZO DE ENTREGA:</b> {pacotePrata.prazoEntrega}
                    <br />
                    <br />
                    <b>Investimento:</b> {pacotePrata.investimento}
                </p>
            </div>
        </div>
    );
};

export default PacotePrata;
