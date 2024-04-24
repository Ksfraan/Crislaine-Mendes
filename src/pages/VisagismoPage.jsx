import visagismoImage from '../assets/visagismoImage.png';
import facePaintingImage from '../assets/facePaintingImage.png';
import PacoteCristalVisagismo from '../components/PacoteCristalVisagismo';
import PacoteEsmeraldaVisagismo from '../components/PacoteEsmeraldaVisagismo';
import PacoteQuartzoRosa from '../components/PacoteQuartzoRosa';
import PacoteAmetista from '../components/PacoteAmetista';
import PacoteRuby from '../components/PacoteRuby';
import PacoteJade from '../components/PacoteJade';

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
            </div>{' '}
            <div className='pacotes-visagismo-wrapper'>
                <PacoteQuartzoRosa />
                <PacoteCristalVisagismo />
                <PacoteEsmeraldaVisagismo />
                <PacoteAmetista />
                <PacoteRuby />
                <PacoteJade />
            </div>
        </div>
    );
};

export default Visagismo;
