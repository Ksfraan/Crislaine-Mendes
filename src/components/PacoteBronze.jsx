import { useState, useEffect } from 'react';
import axios from 'axios';
import crisPhotoYellowDress from '../assets/crisPhotoYellowDress.png';
import '../styles/coloracaoPessoal.css';
import { baseUrl } from '../constants/constants';

const PacoteBronze = () => {
    const [pacoteBronze, setPacoteBronze] = useState(null);

    useEffect(() => {
        axios
            .get(`${baseUrl}/pacote-bronze`)
            .then((response) => {
                setPacoteBronze(response.data[0]);
            })
            .catch((error) => {
                console.error(
                    'Erro ao buscar detalhes do pacote Bronze:',
                    error
                );
            });
    }, []);

    if (!pacoteBronze) {
        return <div>Carregando Pacote Bronze...</div>;
    }

    return (
        <div className='pacote-bronze-wrapper'>
            <h3>{pacoteBronze.titulo}</h3>
            <h5>{pacoteBronze.subtitulo}</h5>
            <div className='pacote-bronze-description'>
                <img src={crisPhotoYellowDress} alt='' />
                <ul>
                    {pacoteBronze.informacoes.map((info, id) => (
                        <li key={id}>{info}</li>
                    ))}
                </ul>
                <p>
                    <br />
                    <b>PRAZO DE ENTREGA:</b> {pacoteBronze.prazoEntrega}
                </p>
            </div>
            <div>
                <p>
                    <br />
                    <b>Investimento:</b> <br />
                    {pacoteBronze.investimento}
                    <br />
                </p>
            </div>
        </div>
    );
};

export default PacoteBronze;
