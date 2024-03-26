import crisPhotoFace from '../assets/crisPhotoFace.png';

import '../styles/coloracaoPessoal.css';

const PacoteAmetista = () => {
    return (
        <div className='pacote-ametista-wrapper'>
            <h3>PACOTE AMESTISTA</h3>
            <h5>VISAGISMO SIMULADO EXPRESS + COLORAÇÃO PESSOAL</h5>
            <img src={crisPhotoFace} alt='' />
            <div className='pacote-ametista-information'>
                Nesse serviço irei analisar as linhas e a forma do seu rosto,
                indicar os melhores cortes de cabelo, o que cada corte comunica
                e simular cores de cabelo de acordo com a sua coloração pessoal.{' '}
                <br />
                Através da descoberta do seu formato de rosto, análise fácil
                simples, são indicadas também as melhores armações para óculos.{' '}
                <br />
                Na coloração pessoal irei analisar as seguintes dimensões:{' '}
                <br />
                Análise de Contraste, <br />
                Análise de profundidade, <br />
                Análise de intensidade, <br /> Análise de estação das cores e
                assim chegar nas suas melhores cores de roupa, cabelo, maquiagem
                e acessórios. <br /> <br />
                Esta incluso também, a explicação do círculo cromático e como
                combinar cores. <br />
                Dossiê com cartela digital, <br />
                Inspiração de combinação de cores, maquiagem, looks e cabelos da
                sua cartela e a psicologia das cores, <br />
                Cartela digital da sua estação. <br />
                Incluídas 2 variações de corte. <br />3 cores de cabelo da
                cartela (loiro, ruivo, iluminado ou uma cor de sua escolha){' '}
                <br />
                <br />
                NÃO ESTA INCLUSO SIMULAÇÃO DE ÓCULOS. <br />
                <br /> PRAZO DE ENTREGA: 10 dias úteis <br />
                <b>Investimento: </b> 3x R$210,00 <br />
                crédito à vista: R$600,00 <br />à vista: R$580,00
            </div>
        </div>
    );
};

export default PacoteAmetista;
