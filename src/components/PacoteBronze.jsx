import crisPhotoYellowDress from '../assets/crisPhotoYellowDress.png';

import '../styles/coloracaoPessoal.css';

const PacoteBronze = () => {
    return (
        <div className='pacote-bronze-wrapper'>
            <h3>PACOTE BRONZE COLORAÇÃO</h3>

            <h5>COLORAÇÃO PESSOAL ONLINE</h5>
            <div className='pacote-bronze-description'>
                <img src={crisPhotoYellowDress} alt='' />
                <p>
                    Análise de Contraste, <br />
                    Análise de profundidade, <br />
                    Analise de intensidade, <br />
                    Análise de estação das cores explicação do círculo cromático
                    e como combinar cores. <br />
                    Dossiê com cartela digital, <br />
                    Inspiração de combinação de cores, maquiagem, looks e
                    cabelos da sua cartela e a psicologia das cores. <br />
                    Cartela digital da sua estação. <br />
                    <br />
                    <b>PRAZO DE ENTREGA:</b> 7 dias úteis.
                </p>
            </div>
            <br />
            <div>
                <p>
                    3 meses de assessoria pós atendimento. <br />
                    <br />
                    <b>Investimento: </b> <br />
                    3X R$166,00 no cartão de crédito, <br /> R$480,00 crédito à
                    vista,
                    <br />
                    R$460,00 pix ou dinheiro. <br />
                    <br />
                    SEM SIMULAÇÃO DE CABELO
                </p>
            </div>
        </div>
    );
};

export default PacoteBronze;
