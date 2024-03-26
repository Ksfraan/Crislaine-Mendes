import crisPhotoCartelaCores from '../assets/crisPhotoCartelaCores.png';

import '../styles/coloracaoPessoal.css';

const PacotePrata = () => {
    return (
        <div className='pacote-prata-wrapper'>
            <div className='pacote-prata-description'>
                <h3>PACOTE PRATA</h3>
                <h5>
                    COLORAÇÃO PESSOAL ONLINE + 3 SIMULAÇÕES DE CORES DE CABELO
                </h5>
                <img
                    src={crisPhotoCartelaCores}
                    alt='foto da Cris com uma cartela de cores'
                />
                <p>
                    Análise de Contraste, <br /> Análise de profundidade <br />
                    Analise de intensidade <br />
                    Análise de estação das cores, explicação do círculo
                    cromático e como combinar cores. <br /> Dossiê com cartela
                    digital, <br />
                    Inspiração de combinação de cores, maquiagem, looks e
                    cabelos da sua cartela e a psicologia das cores.
                    <br /> Cartela digital da sua estação <br />
                    <b>3 simulações</b> de cores de cabelo dentro da cartela de
                    cores (loiro, iluminado e ruivos).
                </p>{' '}
                <br />
                <p>
                    3 meses de assessoria pós atendimento. <br />
                    PRAZO DE ENTREGA: 7 dias úteis.
                </p>{' '}
                <br />
                <p>
                    <b>Investimento: </b> <br />
                    3X R$199,00 No cartão de crédito, <br />
                    R$580,00 credito á vista, <br />
                    R$550,00 pix ou dinheiro.
                </p>
            </div>
        </div>
    );
};

export default PacotePrata;
