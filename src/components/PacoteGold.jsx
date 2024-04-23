import { useState, useEffect } from 'react';
import axios from 'axios';

import crisPhotoGreenDress from '../assets/crisPhotoGreenDress.png';
import Payment from './Payment';

const PacoteGold = () => {
    const [pacoteGold, setPacoteGold] = useState(null);
    const baseUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchPacoteGold = async () => {
            try {
                const response = await axios.get(`${baseUrl}/pacote-gold`);
                setPacoteGold(response.data[0]);
            } catch (error) {
                console.error('Erro ao buscar o pacote Gold:', error);
            }
        };

        fetchPacoteGold();
    }, []);

    if (!pacoteGold) {
        return <div>Carregando...</div>;
    }

    return (
        <div className='pacote-gold-wrapper'>
            <h3>{pacoteGold.titulo}</h3>
            <img src={crisPhotoGreenDress} alt='Crislaine Photo' />
            <h5>{pacoteGold.descricao}</h5>
            <div>
                {pacoteGold.inclusos && pacoteGold.inclusos.length > 0 ? (
                    pacoteGold.inclusos.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))
                ) : (
                    <p>Falha ao carregar os itens do Pacote Gold.</p>
                )}{' '}
                <br />
                <p>
                    <b>Prazo de Entrega:</b> {pacoteGold.prazoEntrega}
                </p>
                <br />
                <div>
                    <b>Investimento:</b>
                    <p>{pacoteGold.investimento}</p>
                </div>
            </div>
            <Payment />
        </div>
    );
};

export default PacoteGold;
