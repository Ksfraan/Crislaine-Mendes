import { useState, useEffect } from 'react';
import axios from 'axios';
import Cristal from '../assets/cristal.jpeg';
import { baseUrl } from '../constants/constants';

const PacoteCristalVisagismo = () => {
    const [pacoteCristal, setPacoteCristal] = useState(null);

    useEffect(() => {
        axios
            .get(`${baseUrl}/pacote-cristal`)
            .then((response) => {
                setPacoteCristal(response.data[0]);
            })
            .catch((error) => {
                console.error(
                    'Erro ao buscar detalhes do pacote Cristal:',
                    error
                );
            });
    }, []);

    if (!pacoteCristal) {
        return <div>Carregando Pacote Cristal...</div>;
    }

    return (
        <div className='pacote-cristal-wrapper'>
            <h3>{pacoteCristal.titulo}</h3>
            <p>{pacoteCristal.descricao}</p>
            <ul>
                <br />
                <p>
                    <b>Inclusos:</b>
                    {pacoteCristal.inclusos.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </p>
                <br />
            </ul>
            <p>
                <b>PRAZO DE ENTREGA:</b> {pacoteCristal.prazoEntrega}
            </p>
            <div className='investimento-visagismo-cristal'>
                <p>
                    <b>Investimento:</b> {pacoteCristal.investimento}
                </p>
                <img src={Cristal} alt='cristal image' />
            </div>
        </div>
    );
};

export default PacoteCristalVisagismo;
