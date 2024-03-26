import PacoteBronze from '../components/PacoteBronze';
import PacotePrata from '../components/PacotePrata';
import PacoteGold from '../components/PacoteGold';
import PacoteRuby from '../components/PacoteRuby';

import crisImage from '../assets/crisImage.png';
import crisPhotoCartelaCores from '../assets/crisPhotoCartelaCores.png';
import crisPhotoRedPants from '../assets/crisPhotoRedPants.png';

import '../styles/coloracaoPessoal.css';
import PacoteAmetista from '../components/PacoteAmetista';
import PacoteJade from '../components/PacoteJade';

const ColoracaoPessoal = () => {
    return (
        <div>
            <div className='coloração-pessoal-wrapper'>
                <h3>CONSULTORIA COLORAÇÃO PESSOAL</h3>
                <img src={crisImage} alt='' />
                <h1>PROPOSTA</h1>
            </div>
            <div className='coloracao-pessoal-o-que-é'>
                <p>
                    A ANÁLISE DE COLORAÇÃO PESSOAL É UMA DAS ETAPAS DO PROCESSO
                    DE CONSULTORIA DE IMAGEM, A QUAL,POR MEIO DE TECIDOS,
                    IDENTIFICAMOS QUAIS CORES FICAM MAIS HARMÔNICAS COM A SUA
                    BELEZA PESSOAL. ATRAVÉS DESSA ANÁLISE DESCOBRIMOS SUA
                    CARTELA. VOCÊ APRENDERÁ A USA-LAS A SEU FAVOR E A EQUILIBRAR
                    AS CORES QUE NÃO TE FAVORECEM.
                </p>
            </div>
            <div className='coloracao-pessoal-beneficios'>
                <img src={crisPhotoCartelaCores} alt='' />
                <h3>QUAIS OS BENEFÍCIOS DA ANÁLISE DE COLORAÇÃO PESSOAL?</h3>
                <p>
                    1 - ENTENDER AS CARACTERÍSTICAS DA SUA PELE, O QUE MAIS
                    HARMONIZA COM ELA E CONHECER AS CORES QUE MAIS VALORIZAM A
                    SUA BELEZA.
                </p>
                <br />
                <p>
                    2 - CONHECER AS CORES QUE PODEM NEUTRALIZAR OS EFEITOS QUE
                    VOCÊ NÃO GOSTARIA DE REALÇAR NO SEU ROSTO, COMO POR EXEMPLO
                    OLHEIRAS E MANCHAS E OUTRAS CARACTERÍSTICAS PESSOAIS QUE
                    VOCÊ NÃO GOSTA NO ROSTO.
                </p>
                <br />
                <p>
                    3- APLICAR TODO CONHECIMENTO DAS SUAS CARACTERÍSTICAS QUE
                    HARMONIZAM COM A SUA BELEZA EM ROUPA, CABELOS, MAQUIAGEM E
                    ACESSÓRIOS.
                </p>
            </div>
            <div className='coloracao-pessoal-analise'>
                <h3>O QUE É ANALISADO?</h3>{' '}
                <img src={crisPhotoRedPants} alt='foto da Crislaine' />
                <p>
                    NA CONSULTORIA DE COLORAÇÃO PESSOAL VAMOS AVALIAR AS
                    SEGUINTES CARACTERISTISCAS:
                </p>
                <br />
                <p>
                    <b>TEMPERATURA:</b> QUENTE, FRIA, NEUTRA FRIA, NEUTRA
                    QUENTE.
                </p>
                <p>
                    <b>INTENSIDADE:</b> CORES INTENSAS E SUAVES.{' '}
                    <b>PROFUNDIDADE: </b>
                    CLARO OU ESCURO.
                </p>
                <br />
                <p>
                    À PARTIR DA AVALIAÇÃO DAS DIMENSÕES, IREI INDENTIFICAR SUA
                    CARTELA ATRAVÉS DO MÉTODO SAZONAL EXPANDIDO DE 12 ESTAÇÕES:
                </p>
                <br />
                <p>
                    <b>OUTONO:</b> (ESCURO, QUENTE OU SUAVE). <br />
                    <b>PRIMAVERA:</b> (CLARO, QUENTE OU INTENSO). <br />
                    <b>INVERNO:</b> (FRIO, ESCURO OU INTENSO).
                </p>
            </div>
            <PacoteBronze />
            <PacotePrata />
            <PacoteGold />
            <PacoteAmetista />
            <PacoteRuby />
            <PacoteJade />
        </div>
    );
};

export default ColoracaoPessoal;
