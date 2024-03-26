import quartzoRosa from '../assets/quartzoRosa.jpeg';

import '../styles/visagismo.css';

const PacoteQuartzoRosa = () => {
    return (
        <div className='pacote-quartzo-rosa-wrapper'>
            <h3>PACOTE QUARTZO ROSA</h3>

            <p>
                Esse pacote é para quem quer algo básico. indicado para quem ja
                sabe o que quer. irei analisar a forma do seu rosto , e simular
                1 corte de cabelo e 2 variações de cores ( a sua escolha) ou da
                sua coloração pessoal caso você saiba. não inclui armação de
                óculos nem estrategia de imagem.
            </p>
            <br />
            <p>
                1 simulação de corte 2 variações de cor PRAZO DE ENTREGA 5 dias
                úteis para o visagismo.
            </p>
            <div className='investiment-and-image'>
                <h5>Investimento 3x 83,30 à vista: R$220,00</h5>
                <img src={quartzoRosa} alt='' />
            </div>
        </div>
    );
};

export default PacoteQuartzoRosa;
