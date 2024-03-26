import '../styles/coloracaoPessoal.css';

import crisPhotoGreenDress from '../assets/crisPhotoGreenDress.png';

const PacoteGold = () => {
    return (
        <div className='pacote-gold-wrapper'>
            <h3>PACOTE GOLD</h3>
            <h5>
                COLORAÇÃO PESSOAL ONLINE + SIMULAÇÃO DE 10 CORES DE CABELO NA
                CARTELA
            </h5>{' '}
            <img src={crisPhotoGreenDress} alt='' />
            <div>
                <p>
                    Análise de Contraste, <br />
                    Análise de profundidade, <br />
                    Analise de intensidade, <br />
                    Análise de estação das cores, explicação do círculo
                    cromático e como combinar cores. <br />
                    Dossiê com cartela digital, <br />
                    Inspiração de combinação de cores, maquiagem, looks e
                    cabelos da sua cartela e a psicologia das cores. <br />
                    Cartela digital da sua estação <br />
                    10 simulações de cores de cabelo dentro da cartela de cores
                    (tons loiros, iluminados, ruivos).
                </p>{' '}
                <br />
                <p>
                    3 meses de assessoria pós atendimento. <br />
                    PRAZO DE ENTREGA: 12 dias úteis.
                </p>{' '}
                <br />
                <p>
                    <b>Investimento: </b> <br />
                    3X R$234,00 no cartão de crédito, <br />
                    R$680,00 credito à vista, <br />
                    R$650,00 pix ou dinheiro.
                </p>
            </div>
        </div>
    );
};

export default PacoteGold;
