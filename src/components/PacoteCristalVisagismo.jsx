import { useState, useEffect } from 'react';
import axios from 'axios';
import Cristal from '../assets/cristal.jpeg';

const PacoteCristalVisagismo = () => {
    const [pacoteCristal, setPacoteCristal] = useState(null);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/pacote-cristal`)
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
        return <div>Carregando...</div>;
    }

    return (
        <div className='pacote-cristal-wrapper'>
            <h3>{pacoteCristal.titulo}</h3>
            <p>{pacoteCristal.descricao}</p>
            <ul>
                <br />
                <p>
                    <b>Inclusos:</b>
                    {pacoteCristal.inclusos.map((item, index) => (
                        <li key={index}>{item}</li>
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
