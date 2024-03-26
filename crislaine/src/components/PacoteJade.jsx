import crisPhotoComTecidos from '../assets/crisPhotoComTecidos.png';

import '../styles/coloracaoPessoal.css';

const PacoteJade = () => {
    return (
        <div className='pacote-jade-wrapper'>
            <h3>PACOTE JADE</h3>
            <h5>VISAGISMO SIMULADO ON-LINE + COLORAÇÃO PESSOAL PRESENCIAL</h5>
            <img src={crisPhotoComTecidos} alt='Foto da Cris com tecidos' />
            <div>
                <p>
                    Nesse serviço irei analisar as linhas e a forma do seu rosto
                    e indicar os melhores cortes de cabelo, o que cada corte
                    comunica e simular cores de cabelo de acordo com a sua
                    coloração pessoal, <br />
                    através da descoberta do seu formato de rosto, será indicado
                    também as melhores armações de óculos e acessórios. <br />
                    Na coloração pessoal irei analisar as seguintes dimensões:{' '}
                    <br />
                    Análise de Contraste, <br /> Análise de profundidade, <br />{' '}
                    Análise de intensidade, <br /> Análise de estação das cores
                    e assim chegar nas suas melhores cores de roupa, cabelo,
                    maquiagem e acessórios. <br />
                    Está inclusa a explicação do círculo cromático e como
                    combinar as cores. <br /> Dossiê com cartela digital, <br />
                    inspiração de combinação de cores, maquiagem, looks e
                    cabelos da sua cartela e a psicologia das cores. <br />
                    Cartela fásica. <br />
                    <br />
                    PRAZO DE ENTREGA: 1 hora e meia para a Coloração pessoal SÃO
                    PAULO E SOROCABA. <br />
                    20 dias úteis para o visagismo. <br />
                    <b>Ivestimento: </b>
                    3x336,60 à vista: R$970,00
                </p>
            </div>
        </div>
    );
};

export default PacoteJade;
