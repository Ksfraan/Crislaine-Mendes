import { useState, useEffect } from 'react';
import axios from 'axios';
import crisPhotoYellowDress from '../assets/crisPhotoYellowDress.png';
import '../styles/coloracaoPessoal.css';

const PacoteBronze = () => {
    const [pacoteBronze, setPacoteBronze] = useState(null);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/pacote-bronze`)
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
        return <div>Carregando...</div>;
    }

    return (
        <div className='pacote-bronze-wrapper'>
            <h3>{pacoteBronze.titulo}</h3>
            <h5>{pacoteBronze.subtitulo}</h5>
            <div className='pacote-bronze-description'>
                <img src={crisPhotoYellowDress} alt='' />
                <p>
                    {pacoteBronze.informacoes}
                    <br />
                    <br />
                    <b>PRAZO DE ENTREGA:</b> {pacoteBronze.prazoEntrega}
                </p>
            </div>
            <br />
            <div>
                <p>
                    {pacoteBronze.assessoriaPosAtendimento}
                    <br />
                    <br />
                    <b>Investimento:</b> <br />
                    {pacoteBronze.investimento}
                    <br />
                    <br />
                    {pacoteBronze.simulacaoCabelo}
                </p>
            </div>
        </div>
    );
};

export default PacoteBronze;
