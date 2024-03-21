import visagismoImage from '../assets/visagismoImage.png';
import facePaintingImage from '../assets/facePaintingImage.png';
import quartzoRosa from '../assets/quartzoRosa.jpeg';

import '../styles/visagismo.css';

const Visagismo = () => {
    return (
        <div className='visagism-page-wrapper'>
            <h2>CONSULTORIA VISAGISMO SIMULADO</h2>
            <img src={visagismoImage} alt='Young lady' />
            <h1>PROPOSTA</h1>

            <div className='simulate-visagism-text'>
                <h2>VISAGISMO SIMULADO</h2>
                <p>
                    O VISAGISMO É UMA ABORDAGEM ESTÉTICA QUE CONSIDERA AS
                    CARACTERÍSTICAS FÍSICAS, COMO FORMATO DO ROSTO, CABELO E
                    MAQUIAGEM, PARA CRIAR UMA IMAGEM QUE HARMONIZE COM A
                    PERSONALIDADE E ESTILO DE UMA PESSOA. ESSA TÉCNICA BUSCA
                    REALÇAR A BELEZA DE FORMA INDIVIDUALIZADA.
                </p>
                <img
                    src={facePaintingImage}
                    alt='Young lady with face painting'
                />{' '}
                <h3>QUAIS OS BENEFÍCIOS DA ANÁLISE DE VISAGISMO?</h3>
                <p>
                    OS BENEFÍCIOS DO VISAGISMO INCLUEM A CRIAÇÃO DE UMA IMAGEM
                    PESSOAL QUE REFLETE A INDIVIDUALIDADE, HARMONIZANDO
                    CARACTERÍSTICAS FÍSICAS COM ESTILO DE VIDA. ISSO PODE
                    AUMENTAR A AUTOESTIMA, CONFIANÇA E SATISFAÇÃO COM A
                    APARÊNCIA, PROMOVENDO UMA ABORDAGEM MAIS HOLÍSTICA À BELEZA.
                    ALÉM DISSO, O VISAGISMO AJUDA A ESCOLHER CORTES DE CABELO,
                    MAQUIAGEM E ACESSÓRIOS QUE DESTACAM AS MELHORES
                    CARACTERÍSTICAS DE CADA PESSOA.
                </p>
            </div>

            <div className='pacote-quartzo-rosa-wrapper'>
                <h3>PACOTE QUARTZO ROSA</h3>
                <h3>VISAGISMO SIMULADO</h3>
                <p>
                    Esse pacote é para quem quer algo básico. indicado para quem
                    ja sabe o que quer. irei analisar a forma do seu rosto , e
                    simular 1 corte de cabelo e 2 variações de cores ( a sua
                    escolha) ou da sua coloração pessoal caso você saiba. não
                    inclui armação de óculos nem estrategia de imagem.
                </p>
                <br />
                <p>
                    1 simulação de corte 2 variações de cor PRAZO DE ENTREGA 5
                    dias úteis para o visagismo.
                </p>
                <div className='investiment-and-image'>
                    <h5>Investimento 3x 83,30 à vista: R$220,00</h5>
                    <img src={quartzoRosa} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Visagismo;
