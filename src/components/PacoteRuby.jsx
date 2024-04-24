import { useEffect, useState } from 'react';
import axios from 'axios';

import crisPhotoOrangeDress from '../assets/crisPhotoOrangeDress.png';
import { baseUrl } from '../constants/constants';

const PacoteRuby = () => {
    const [pacoteRuby, setPacoteRuby] = useState(null);

    useEffect(() => {
        const fetchPacoteRuby = async () => {
            try {
                const response = await axios.get(`${baseUrl}/pacote-ruby`);
                setPacoteRuby(response.data[0]);
            } catch (error) {
                console.error('Erro ao buscar informações do pacote:', error);
            }
        };
        fetchPacoteRuby();
    }, []);

    if (!pacoteRuby) {
        return <div>Carregando Pacote Rubi...</div>;
    }

    return (
        <div className='pacote-ruby-wrapper'>
            <h3>{pacoteRuby.titulo}</h3>
            <h5>{pacoteRuby.subtitulo}</h5>
            <img
                src={crisPhotoOrangeDress}
                alt='foto da cris em um vestido laranja'
            />
            <p>{pacoteRuby.descricao}</p>
            <br />
            <p>
                <b>PRAZO DE ENTREGA (Coloração Pessoal):</b>{' '}
                {pacoteRuby.prazoEntregaColoracaoPessoal}
            </p>
            <br />
            <p>
                <b>PRAZO DE ENTREGA (Visagismo):</b>{' '}
                {pacoteRuby.prazoEntregaVisagismo}
            </p>
            <br />
            <p>
                <b>Investimento:</b> {pacoteRuby.investimento}
            </p>
        </div>
    );
};

export default PacoteRuby;
